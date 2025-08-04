import { Projects } from "@/components/section/projects";
import Hero from "@/components/section/Hero";
import Contacts from "@/components/section/contacts";
import Aboutme from "@/components/section/about";
export default function Home() {
  return (
    <>
    <section id="home">
      <Hero />
      <Aboutme/>
      <Projects />
      <Contacts/>
    </section>
    </>
  );
}
