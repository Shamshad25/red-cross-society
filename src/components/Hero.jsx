import { Button, Typography } from "@material-tailwind/react";
import hero from "../assets/hero-bg.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full relative bg-gradient-to-tr from-red-300 to-gray-900">
      <img
        src={hero}
        alt="hero"
        className="absolute w-full h-full object-cover mix-blend-overlay"
      />
      <div>
        <Navbar />
      </div>

      <div className="w-full h-2/3 flex justify-center absolute mt-6">
        <div className="w-1/2 flex justify-center items-center flex-col">
          <Typography variant="paragraph" className="text-white text-center">
            Unite, Serve, Strengthen Together
          </Typography>
          <Typography variant="h1" className="text-white text-center py-8">
            Serving Humanity, Saving Lives Red Cross Society
          </Typography>
          <Typography variant="small" className="text-white text-center pb-4">
            Compassion drives us. Together, we serve, uplift, and strengthen
            communities. Join us in making a difference, one act of kindness at
            a time.
          </Typography>
          <Button className="w-1/2" color="red">
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
