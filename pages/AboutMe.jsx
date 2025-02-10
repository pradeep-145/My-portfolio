import Image from "next/image"
import about from "@public/images/AboutMe.png"
const AboutMe = () => {
  return (
    <section className=" flex flex-col gap-24" >
        <h1 className="text-center lg:text-5xl text-2xl font-bold font-palanquin sm:text-3xl md:text-4xl lg:mt-6  dark:text-gray-300 text-slate-600">About Me</h1>
        <div className="flex lg:flex-row lg:mt-10 flex-col gap-11  ">

        <div className="flex flex-1 justify-center items-center">
            <Image src={about} width={250} height={250} className=" max-md:w-28 hover:scale-[1.01]" alt="About me logo"></Image>
        </div>
        <div className="flex flex-1 justify-center px-[45px] items-center ">
            <p className="lg:text-lg md:text:md text-sm text-wrap text-justify  text-slate-600 dark:text-gray-300 ">Hello! I'm Pradeep Sakthi, a passionate and dedicated Full Stack Developer with a knack for crafting dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy building seamless and user-friendly digital experiences.As a Full Stack Developer, I bridge the gap between design and technology, ensuring that every project I work on is not only visually appealing but also functionally robust.</p>  

        </div>
        </div>
    </section>
  )
}

export default AboutMe