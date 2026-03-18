import { ClientHero } from "../components/ClientHero";
import { BusinessServices } from "../components/BusinessServices";
import { CompanyOverview } from "../components/CompanyOverview";
import { TeamMembers } from "../components/TeamMembers";
import { Recruitment } from "../components/Recruitment";

export default function HomePage() {
  return (
    <main>
      <ClientHero />
      <BusinessServices />
      <CompanyOverview />
      <TeamMembers />
      <Recruitment />
    </main>
  );
}
