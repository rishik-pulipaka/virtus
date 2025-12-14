import ContentBlock from "../components/ContentBlock";
import Divider from "../components/Divider";
import SectionTitle from "../components/SectionTitle";
import PlaceholderGrid from "../components/PlaceholderGrid";

export default function AboutPage() {
  return (
    <main>
      {/* === ABOUT INTRO === */}
      <ContentBlock title="About Virtus">
        I need something to fill the information here
      </ContentBlock>

      {/* === CORAL BLOCK (same as Home hero style) === */}
      <div className="w-full h-[500px] bg-[#B26663] my-24" />

      {/* === OUR MISSION === */}
      <SectionTitle>Our Mission</SectionTitle>

      <ContentBlock>
        Originally “Virtus Verbum”, Virtus standing for virtue/excellence and
        verbum standing for writing. Virtus draws its values from its name. We
        are committed to advancing educational access and equity by providing
        complimentary, individualized college essay mentorship to high school
        students from underserved and first-generation backgrounds.
        <br />
        <br />
        Through structured guidance, personalized support, and an emphasis on
        authentic self-representation, Virtus seeks to reduce systemic barriers
        to higher education and ensure that academic opportunity is determined
        by merit rather than circumstance.
      </ContentBlock>

      <Divider />

      {/* === CORE TEAM === */}
      <SectionTitle>Core Team</SectionTitle>
      <PlaceholderGrid columns={3} rows={2} />

      <Divider />

      {/* === AMBASSADORS === */}
      <SectionTitle>Ambassadors</SectionTitle>
      <PlaceholderGrid columns={3} rows={2} />
    </main>
  );
}
