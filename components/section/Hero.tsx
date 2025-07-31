import { WavyBackground } from "../ui/wavy-background"
const Hero = () => {
    return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Full Stack Developer
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Innovations from the core
        </p>
    </WavyBackground>
    );
};

export default Hero;