import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Work } from "./components/work";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Work />
      <Contact />
    </>
  );
}
