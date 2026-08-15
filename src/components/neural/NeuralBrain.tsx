"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface NeuralBrainProps {
  activityLevel?: number;
  className?: string;
}

// Fixed positions for labeled concept nodes — spread around perimeter like the reference
const conceptNodes = [
  { id: 0, x: 22, y: 12, label: "BAŞARI",      size: 4 },
  { id: 1, x: 50, y: 6,  label: "DİSİPLİN",    size: 4 },
  { id: 2, x: 78, y: 14, label: "VİZYON",       size: 4 },
  { id: 3, x: 85, y: 45, label: "ÖZGÜVEN",      size: 4 },
  { id: 4, x: 72, y: 82, label: "ODAK",         size: 4 },
  { id: 5, x: 50, y: 90, label: "MERAK",        size: 4 },
  { id: 6, x: 18, y: 75, label: "SÜREKLİLİK",  size: 4 },
];

// Central brain hub
const hubNode = { id: 7, x: 50, y: 48, size: 6 };

// Generate interior scattered neurons
const generateInteriorNodes = () => {
  const interior = [];
  const totalInterior = 55;

  for (let i = 0; i < totalInterior; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 8 + Math.random() * 32;
    let x = 50 + Math.cos(angle) * radius * 1.1;
    let y = 48 + Math.sin(angle) * radius * 0.9;
    x = Math.max(6, Math.min(94, x));
    y = Math.max(6, Math.min(94, y));

    interior.push({
      id: 8 + i,
      x,
      y,
      size: 0.8 + Math.random() * 2,
    });
  }
  return interior;
};

// Generate tiny background particles for depth
const generateParticles = () => {
  const particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: 2 + Math.random() * 96,
      y: 2 + Math.random() * 96,
      size: 0.2 + Math.random() * 0.6,
      opacity: 0.1 + Math.random() * 0.3,
      delay: Math.random() * 5,
    });
  }
  return particles;
};

export default function NeuralBrain({ activityLevel = 50, className = "" }: NeuralBrainProps) {
  const [interiorNodes] = useState(generateInteriorNodes);
  const [particles] = useState(generateParticles);
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const [activeLabelIndex, setActiveLabelIndex] = useState(0);

  const allNodes = useMemo(() => [...conceptNodes, hubNode, ...interiorNodes], [interiorNodes]);

  // Sequential label highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLabelIndex(prev => (prev + 1) % conceptNodes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Random activity firing
  useEffect(() => {
    const count = Math.max(3, Math.floor((activityLevel / 100) * allNodes.length * 0.3));
    const interval = setInterval(() => {
      const next: number[] = [];
      for (let i = 0; i < count; i++) {
        next.push(allNodes[Math.floor(Math.random() * allNodes.length)].id);
      }
      setActiveNodes(next);
    }, 1400);
    return () => clearInterval(interval);
  }, [activityLevel, allNodes]);

  // Build connections — thin lines between nearby nodes
  const connections = useMemo(() => {
    const lines: { from: number; to: number; opacity: number }[] = [];

    // Connect every concept node to hub
    conceptNodes.forEach(cn => {
      lines.push({ from: cn.id, to: hubNode.id, opacity: 0.25 });
    });

    // Connect concept nodes to nearby interior nodes
    conceptNodes.forEach(cn => {
      const nearby = interiorNodes
        .map(n => ({ id: n.id, dist: Math.hypot(n.x - cn.x, n.y - cn.y) }))
        .filter(n => n.dist < 25)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 4);
      nearby.forEach(n => lines.push({ from: cn.id, to: n.id, opacity: 0.2 }));
    });

    // Connect interior nodes to each other (sparse, only close ones)
    for (let i = 0; i < interiorNodes.length; i++) {
      const ni = interiorNodes[i];
      const nearby = interiorNodes
        .filter((_, j) => j !== i)
        .map(n => ({ id: n.id, dist: Math.hypot(n.x - ni.x, n.y - ni.y) }))
        .filter(n => n.dist < 16)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 2);
      nearby.forEach(n => {
        const exists = lines.some(l =>
          (l.from === ni.id && l.to === n.id) || (l.to === ni.id && l.from === n.id)
        );
        if (!exists) lines.push({ from: ni.id, to: n.id, opacity: 0.12 });
      });
    }

    // Hub to some interior nodes
    const hubNearby = interiorNodes
      .map(n => ({ id: n.id, dist: Math.hypot(n.x - hubNode.x, n.y - hubNode.y) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 8);
    hubNearby.forEach(n => lines.push({ from: hubNode.id, to: n.id, opacity: 0.2 }));

    return lines;
  }, [interiorNodes]);

  const getNode = (id: number) => allNodes.find(n => n.id === id)!;

  return (
    <div className={`relative w-full aspect-[16/10] mx-auto ${className}`}>

      {/* Soft ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[50%] h-[50%] left-[25%] top-[25%] rounded-full bg-cyan-500/8 dark:bg-cyan-500/6 blur-[80px]" />
        <div className="absolute w-[25%] h-[25%] left-[38%] top-[35%] rounded-full bg-blue-500/6 dark:bg-blue-400/5 blur-[60px]" />
      </div>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow-sm">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
          <filter id="glow-md">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
          <filter id="glow-lg">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <radialGradient id="hub-gradient">
            <stop offset="0%" stopColor="rgb(6,182,212)" stopOpacity="0.9" />
            <stop offset="60%" stopColor="rgb(59,130,246)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background particles (tiny star-like dots) */}
        {particles.map((p, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={p.x}
            cy={p.y}
            r={p.size}
            className="fill-cyan-400/40 dark:fill-cyan-300/30"
            animate={{ opacity: [p.opacity, p.opacity * 2.5, p.opacity] }}
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: p.delay }}
          />
        ))}

        {/* Connection lines — thin, subtle */}
        {connections.map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          if (!from || !to) return null;

          const isActive = activeNodes.includes(conn.from) || activeNodes.includes(conn.to);
          const isLabelConn = conn.from === conceptNodes[activeLabelIndex].id || conn.to === conceptNodes[activeLabelIndex].id;

          return (
            <g key={`conn-${i}`}>
              {/* Base line */}
              <line
                x1={from.x} y1={from.y}
                x2={to.x} y2={to.y}
                className="stroke-slate-300/50 dark:stroke-cyan-500/15"
                strokeWidth="0.25"
              />
              {/* Active glow line */}
              {isActive && (
                <motion.line
                  x1={from.x} y1={from.y}
                  x2={to.x} y2={to.y}
                  stroke="rgb(6,182,212)"
                  strokeWidth="0.5"
                  filter="url(#glow-sm)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{ duration: 1.3 }}
                />
              )}
              {/* Sequential label connection — purple */}
              {isLabelConn && (
                <motion.line
                  x1={from.x} y1={from.y}
                  x2={to.x} y2={to.y}
                  stroke="rgb(147,51,234)"
                  strokeWidth="0.6"
                  filter="url(#glow-sm)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0.5, 0.8, 0] }}
                  transition={{ duration: 2.5 }}
                />
              )}
            </g>
          );
        })}

        {/* Traveling signal pulses along random connections */}
        {connections.slice(0, 6).map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          if (!from || !to) return null;

          return (
            <motion.circle
              key={`travel-${i}`}
              r="0.5"
              fill="rgb(6,182,212)"
              filter="url(#glow-sm)"
              animate={{
                cx: [from.x, to.x, from.x],
                cy: [from.y, to.y, from.y],
                opacity: [0, 0.9, 0.9, 0]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "linear"
              }}
            />
          );
        })}

        {/* Interior neuron nodes — small clean dots */}
        {interiorNodes.map(node => {
          const isActive = activeNodes.includes(node.id);
          return (
            <g key={`interior-${node.id}`}>
              {isActive && (
                <motion.circle
                  cx={node.x} cy={node.y}
                  r={node.size * 3}
                  fill="rgba(6,182,212,0.15)"
                  initial={{ opacity: 0.5 }}
                  animate={{ r: [node.size * 2, node.size * 5], opacity: [0.4, 0] }}
                  transition={{ duration: 1.2 }}
                />
              )}
              <circle
                cx={node.x} cy={node.y}
                r={node.size}
                className={isActive ? "fill-cyan-400 dark:fill-cyan-300" : "fill-slate-300 dark:fill-slate-500/60"}
                filter={isActive ? "url(#glow-sm)" : undefined}
              />
              {isActive && (
                <circle
                  cx={node.x} cy={node.y}
                  r={node.size * 0.4}
                  className="fill-white"
                  opacity={0.8}
                />
              )}
            </g>
          );
        })}

        {/* Central hub node */}
        <motion.circle
          cx={hubNode.x} cy={hubNode.y}
          r={12}
          fill="url(#hub-gradient)"
          animate={{ r: [11, 13, 11], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <circle cx={hubNode.x} cy={hubNode.y} r={hubNode.size} className="fill-cyan-400 dark:fill-cyan-300" filter="url(#glow-md)" />
        <circle cx={hubNode.x} cy={hubNode.y} r={hubNode.size * 0.5} className="fill-white" opacity={0.9} />

        {/* Concept nodes — slightly larger with ring effect */}
        {conceptNodes.map((node, idx) => {
          const isSeqActive = idx === activeLabelIndex;
          const isActive = activeNodes.includes(node.id) || isSeqActive;

          return (
            <g key={`concept-${node.id}`}>
              {/* Outer ring glow */}
              {isSeqActive && (
                <motion.circle
                  cx={node.x} cy={node.y}
                  r={8}
                  fill="none"
                  stroke="rgb(147,51,234)"
                  strokeWidth="0.4"
                  filter="url(#glow-md)"
                  animate={{ r: [6, 10, 6], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              {/* Soft halo */}
              <circle
                cx={node.x} cy={node.y}
                r={isSeqActive ? 5 : 3}
                className={isSeqActive ? "fill-purple-400/20" : "fill-cyan-400/10"}
                filter="url(#glow-md)"
              />
              {/* Core dot */}
              <circle
                cx={node.x} cy={node.y}
                r={isSeqActive ? node.size * 1.2 : node.size}
                className={isSeqActive ? "fill-purple-400 dark:fill-purple-300" : isActive ? "fill-cyan-400 dark:fill-cyan-300" : "fill-cyan-500/70 dark:fill-cyan-400/50"}
                filter="url(#glow-sm)"
              />
              {/* Bright center */}
              <circle
                cx={node.x} cy={node.y}
                r={node.size * 0.35}
                className="fill-white"
                opacity={isSeqActive ? 1 : 0.7}
              />
            </g>
          );
        })}
      </svg>

      {/* Floating text labels */}
      {conceptNodes.map((node, idx) => {
        const isSeqActive = idx === activeLabelIndex;

        return (
          <motion.div
            key={`label-${node.id}`}
            className="absolute -translate-x-1/2 whitespace-nowrap pointer-events-none select-none"
            style={{ left: `${node.x}%`, top: `${node.y - 7}%`, zIndex: isSeqActive ? 20 : 1 }}
            animate={{
              opacity: isSeqActive ? 1 : 0.5,
              scale: isSeqActive ? 1.15 : 1,
              y: isSeqActive ? -4 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <span
              className={`text-[10px] md:text-xs font-extrabold tracking-[0.2em] ${
                isSeqActive
                  ? "text-purple-600 dark:text-purple-300"
                  : "text-slate-500 dark:text-slate-400"
              }`}
              style={{
                textShadow: isSeqActive
                  ? "0 0 8px rgba(147,51,234,0.5), 0 0 20px rgba(147,51,234,0.3)"
                  : "none",
              }}
            >
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
