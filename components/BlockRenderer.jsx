import Hero from "./Hero";
import CTA from "./CTA";
import Benefits from "./Benefits";
import Stats from "./Stats";
import Steps from "./Steps";
import Faqs from "./Faqs";

export default function BlockRenderer({ blocks }) {
  return blocks.map((block, index) => {
    console.log(block, "Block Data");
    switch (block.__component) {
      case "page.hero":
        return <Hero key={index} data={block} />;
      case "page.cta":
        return <CTA key={index} data={block} />;
      case "page.benefits":
        return <Benefits key={index} data={block} />;
      case "page.stats":
        return <Stats key={index} data={block} />;
      case "page.steps":
        return <Steps key={index} data={block} />;
      case "page.faqs":
        return <Faqs key={index} data={block} />;
      default:
        return null;
    }
  });
}
