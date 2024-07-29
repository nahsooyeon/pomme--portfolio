import { createClient } from "@/utils/supabase/server";

import AboutSection from "./landing/section/About";
import ContactSection from "./landing/section/Contact";
import WorkSection from "./landing/section/Work";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  // const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      {/*       <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav> */}

      <div className="flex w-full flex-1 flex-col gap-20">
        <main className="flex flex-1 flex-col gap-6">
          <AboutSection />
          <WorkSection />
          <ContactSection />
          {/*     <h2 className="mb-4 text-4xl font-bold">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
        </main>
      </div>
    </div>
  );
}
