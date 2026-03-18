import { Hero } from "../components/Hero";
import { BusinessServices } from "../components/BusinessServices";
import { CompanyOverview } from "../components/CompanyOverview";
import { TeamMembers } from "../components/TeamMembers";
import { ContactCTA } from "../components/ContactCTA";

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <BusinessServices />
      <CompanyOverview onNavigate={onNavigate} />
      <TeamMembers />
      <ContactCTA onNavigate={onNavigate} />
    </main>
  );
}
