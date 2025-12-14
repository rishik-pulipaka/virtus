import SectionTitle from "../components/SectionTitle";
import PlaceholderGrid from "../components/PlaceholderGrid";

export default function CoreTeamSection() {
  return (
    <section>
      <SectionTitle>Core Team</SectionTitle>
      <PlaceholderGrid columns={3} rows={2} />
    </section>
  );
}
