import SectionTitle from "../components/SectionTitle";
import PlaceholderGrid from "../components/PlaceholderGrid";

export default function AmbassadorsSection() {
  return (
    <section>
      <SectionTitle>Ambassadors</SectionTitle>
      <PlaceholderGrid columns={3} rows={2} />
    </section>
  );
}
