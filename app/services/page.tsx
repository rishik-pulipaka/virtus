import ContentBlock from "../components/ContentBlock";
import Divider from "../components/Divider";
import AmbassadorsSection from "../components/AmbassadorsSection";

export default function ServicesPage() {
  return (
    <main>
      <ContentBlock title="Services">
        Mission statement: Originally “Virtus Verbum”, Virtus standing for
        virtue/excellence and verbum standing for writing. Virtus draws its
        values from its name. We are committed to advancing educational access
        and equity by providing complimentary, individualized college essay
        mentorship to high school students from underserved and first-generation
        backgrounds.
      </ContentBlock>

      <Divider />

      <AmbassadorsSection />
    </main>
  );
}
