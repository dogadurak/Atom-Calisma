import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import TeacherScheduleClient from "@/components/admin/TeacherScheduleClient";

export const metadata = {
  title: "Beren'in Programı | Admin",
};

export default async function BerenSchedulePage() {
  const supabase = await createClient();
  // TEMPORARY BYPASS
  // const { data: { user } } = await supabase.auth.getUser();

  // if (!user) {
  //   redirect("/login");
  // }

  // Admin check
  // const { data: profile } = await supabase
  //   .from('profiles')
  //   .select('role')
  //   .eq('id', user.id)
  //   .single();

  // if (profile?.role !== 'admin') {
  //   redirect("/dashboard");
  // }

  // Fetch Beren's schedule
  const { data: schedules } = await supabase
    .from("teacher_schedules")
    .select(`
      id,
      student_id,
      teacher_name,
      day_of_week,
      time_slot,
      created_at,
      profiles ( email, full_name )
    `)
    .eq("teacher_name", "Beren")
    .order("created_at", { ascending: false });

  // Fetch all students for the dropdown
  const { data: students } = await supabase
    .from("profiles")
    .select("id, email")
    .eq("role", "student")
    .order("email");

  return (
    <TeacherScheduleClient 
      teacherName="Beren" 
      initialSchedules={(schedules || []) as any} 
      students={students || []} 
    />
  );
}
