import { Typography } from "@material-tailwind/react";
import dp from "../assets/image 8.png";

const Details = () => {
  return (
    <section
      id="details"
      className="flex flex-col justify-center items-center bg-red-50 py-20"
    >
      <Typography variant="h1" className="font-serif pb-14">
        Hear From Us
      </Typography>
      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 divide-x-2 divide-gray-400">
        <div className="flex flex-row gap-8 items-center">
          <div>
            <img src={dp} alt="image" />
          </div>
          <div className=" w-2/3">
            <Typography variant="paragraph" className="font-bold">
              Mr. John Doe
            </Typography>
            <Typography color="red" variant="small" className="py-2">
              Designation
            </Typography>
            <Typography variant="paragraph">
              Proin cras id semper tellus euismod aenean est a egestas. Rutrum
              in ipsum vivamus nunc dignissim sit...
            </Typography>
          </div>
        </div>
        <div className="flex flex-row gap-8 items-center pl-4">
          <div>
            <img src={dp} alt="image" />
          </div>
          <div className=" w-2/3">
            <Typography variant="paragraph" className="font-bold">
              Mr. John Doe
            </Typography>
            <Typography color="red" variant="small" className="py-2">
              Designation
            </Typography>
            <Typography variant="paragraph">
              Proin cras id semper tellus euismod aenean est a egestas. Rutrum
              in ipsum vivamus nunc dignissim sit...
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
