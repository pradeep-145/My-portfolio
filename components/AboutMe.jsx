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
        <div className="flex flex-1 justify-center">
            <p className="text-xl text-wrap"></p>  

        </div>
        </div>
    </section>
  )
}

export default AboutMe