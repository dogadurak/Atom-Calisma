import { createClient } from "@/utils/supabase/server";
import ExamClientComponent from "@/components/dashboard/ExamClientComponent";

export const metadata = {
  title: "Deneme Sınavları | Dashboard",
};

export default async function ExamPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let initialResults = [];
  if (user) {
    const { data } = await supabase
      .from("exam_results")
      .select("*")
      .eq("student_id", user.id)
      .order("created_at", { ascending: false });
    
    if (data) initialResults = data;
  }

  return <ExamClientComponent initialResults={initialResults} />;
}
