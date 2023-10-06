import { Button, Typography } from "@material-tailwind/react";
import modal1 from "../assets/modal1.png";
import modal2 from "../assets/modal2.png";
import guidanceImg from "../assets/guidance_sanitize-hands.svg";
import carryImg from "../assets/la_people-carry.svg";

const Difference = () => {
  return (
    <section id="difference" className="my-8 py-20 grid grid-cols-2 ">
      <div className=" flex flex-col items-end">
        <div className="w-2/3 h-full">
          <Typography variant="h1" className="font-serif">
            How we’re making a difference
          </Typography>
          <Typography variant="small" className="py-4">
            Consectetur curabitur quis vitae aliquet nulla habitasse feugiat sed
            tellus. Vulputate ut elit sed laoreet amet phasellus pulvinar
            pretium. Nunc dictum quisque lobortis vulputate gravida imperdiet
            libero at ac.
          </Typography>
          <div className="flex gap-2">
            <img src={guidanceImg} alt="guidance" className="w-1/8" />
            <Typography variant="small" className="w-7/8 py-2">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </Typography>
          </div>
          <div className="flex gap-2">
            <img src={carryImg} alt="carry" className="w-1/8" />
            <Typography variant="small" className="w-7/8 py-2">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </Typography>
          </div>
          <Typography variant="small" className="py-2">
            Proin cras id semper tellus euismod aenean est a egestas. Rutrum in
            ipsum vivamus nunc dignissim sit.
          </Typography>
          <Button color="red" className="w-1/3 my-4">
            Learn More
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-end gap-4 ">
        <div className="flex flex-col items-end">
          <div className="h-42 w-48 flex justify-center items-center bg-red-100">
            <img
              src={modal2}
              alt="modal1"
              className="w-44 h-44 pt-2 -mb-10 z-20 object-cover"
            />
          </div>
          <div className="h-96 w-96 bg-red-100 flex justify-center items-center">
            <img
              src={modal1}
              alt="modal"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
