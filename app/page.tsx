import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}
