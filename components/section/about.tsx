import { TextGenerateEffect } from "../ui/text-generated-effects";
import { cn } from "@/lib/utils";

const Aboutme = () => {

    const words = `Highly motivated and results-oriented Software Developer with a proven track record in designing,
     developing, and automating scalable web applications and workflows.
      Expertise in Python, JavaScript (ReactJS), FastAPI, and microservices architecture, 
      coupled with strong database management skills across SQL and NoSQL systems (PostgreSQL, MongoDB, Firebase, Redis)`;
    
    return (
        <section id="aboutme" className="bg-black flex flex-col items-center justify-center gap-10 px-10 md:px-25 ">
            <h2 className="text-white text-4xl font-bold">About Me</h2>
            <div className="relative flex h-[50rem] w-full items-center justify-center bg-black">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:20px_20px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
                <TextGenerateEffect words={words}/>
            </div>
        </section>

    )

};

export default Aboutme;
