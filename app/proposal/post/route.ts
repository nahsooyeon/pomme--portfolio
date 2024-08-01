import { NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  const { name, email, content } = await req.json();
  const supabase = createClient();
  const { data, error } = await supabase.from("proposals").insert([{ name, email, content }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ message: "Proposal submitted successfully", data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
