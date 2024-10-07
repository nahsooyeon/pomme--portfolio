"use server";

import { createClient } from "@/utils/supabase/server";

export async function getContactInfo(prevState: State | null, formData: FormData): Promise<State> {
  console.log("server action", formData);
  await new Promise(resolve => setTimeout(resolve, 1000));
  const supabase = createClient();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const content = formData.get("content") as string;
  const { data, error } = await supabase.from("proposals").insert([{ name, email, content }]);

  if (error) {
    return {
      status: "error",
      message: "An error occurred while submitting your proposal. Please try again later.",
    };
  }
  return {
    status: "success",
    message: `Your proposal has been submitted. Thank you, ${name}!`,
  };
}

export type State = {
  status: "success" | "error";
  message: string;
} | null;
