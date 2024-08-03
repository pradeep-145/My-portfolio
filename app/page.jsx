import Image from "next/image";
import Introduction from "@components/Intoduction";
import AboutMe from "@components/AboutMe";
import Education from "@components/Education";
import Skills from "@components/Skills";
import Projects from "@components/Projects";


export default function Home() {
  return (
    <main className="flex flex-col ">
      <section className="max-container  padding-x pt-28 h-screen w-full">
        <Introduction></Introduction>
      </section>
      <section className="max-container w-full  padding-x padding-y">
        <AboutMe/>
      </section>
      <section className="max-container  w-full padding-x padding-y">
        <Education/>
      </section>
      <section className="max-container w-full  padding-x padding-y">
        <Skills/>
      </section>
      <section className="max-container w-full padding-x padding-y">
        <Projects/>
      </section>
      
    
    </main>
  );
}
