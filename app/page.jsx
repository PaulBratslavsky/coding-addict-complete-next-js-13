import CTA from "../components/CTA";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Steps from "../components/Steps";
import Faqs from "../components/Faqs";

export default async function Home() {

  return (
    <div>
      <Hero />
      <Stats />
      <Benefits />
      <Steps />
      <Faqs />
      <CTA />
    </div>
  );
}
