import Image from "next/image"
import about from "@public/images/AboutMe.svg"
const AboutMe = () => {
  return (
    <section className=" border-t-2 " id="about-me">
        <h1 className="text-center text-5xl font-bold font-palanquin mt-6 text-slate-600">About Me</h1>
        <div className="flex md:flex-row md:mt-10 flex-col gap-11 mt-24">

        <div className="flex flex-1 justify-center items-center">
            <Image src={about} width={250} height={250} className=" max-sm:w-36" alt="About me logo"></Image>

        </div>
        <div className="flex flex-1 justify-center items-center">
            <p className="text-lg text-wrap text-justify text-slate-600 ">Hello! I'm Pradeep Sakthi, a passionate and dedicated Full Stack Developer with a knack for crafting dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy building seamless and user-friendly digital experiences.As a Full Stack Developer, I bridge the gap between design and technology, ensuring that every project I work on is not only visually appealing but also functionally robust.</p>  

        </div>
        </div>
    </section>
  )
}

export default AboutMe