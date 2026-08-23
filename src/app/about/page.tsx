import type { Metadata } from "next";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { HeroBanner } from "@/components/about/HeroBanner";
import { ExperienceCards } from "@/components/about/ExperienceCards";
import AboutContent from "@/docs/about.md";
import { Footer } from "@/components/core/Footer/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Apurv — software engineer building web, mobile, and backend systems.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto w-full px-4 py-8 md:px-6 md:py-12">
        <HeroBanner />
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
        <AboutContent
          components={{
            wrapper: ({ children }: { children: React.ReactNode }) => (
              <>{children}</>
            ),
            ExperienceCards,
          }}
        />
      </div>
      <Footer />
    </PageShell>
  );
}
