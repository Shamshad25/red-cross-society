import { Button, Typography } from "@material-tailwind/react";
import aboutImg from "../assets/about.png";
import vector from "../assets/Vector.svg";

const About = () => {
  return (
    <section id="about" className="my-8 py-20 grid grid-cols-2 ">
      <div className="flex justify-center items-end gap-4 ">
        <img src={vector} alt="vector" className=" pb-12 " />
        <div className="h-96 w-96 bg-red-100 flex justify-center items-center">
          <img
            src={aboutImg}
            alt="about"
            style={{ width: "350px", height: "350px" }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center w-2/3 ">
        <div className="flex items-center gap-2">
          <Typography variant="paragraph">About Us</Typography>
          <hr className=" h-0.5 w-20 bg-gray-300" />
        </div>

        <Typography variant="h1" className="my-4 font-serif">
          Your Support is Really Powerful.
        </Typography>
        <Typography variant="small" className="mb-4 w-3/4">
          The secret to happiness lies in helping others. Never underestimate
          the difference YOU can make in the lives of the poor, the abused and
          the helpless.
        </Typography>
        <Button className="w-2/3" color="red">
          Read More
        </Button>
      </div>
    </section>
  );
};

export default About;
