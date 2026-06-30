import AboutUs from "@/components/About/AboutUs";
import FundersPartners from "@/components/About/FundersPartners";
import Impact from "@/components/About/Impact";
import OurTeam from "@/components/About/OurTeam";

export default async function page() {
  return (
    <>
      <AboutUs />
      <OurTeam />
      <FundersPartners />
      <Impact />
    </>
  );
}
