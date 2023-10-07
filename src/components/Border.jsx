import { Typography } from "@material-tailwind/react";

const Border = () => {
  return (
    <section id="border" className="w-full grid grid-cols-4 bg-blue-200">
      <div className="flex justify-center items-center bg-gray-100 py-12">
        <Typography variant="h2" className="w-1/2 font-serif text-center">
          Become a Volunteer
        </Typography>
      </div>
      <div className="flex justify-center items-center bg-red-100 py-12">
        <Typography variant="h2" className="w-1/2 font-serif text-center">
          Donate Blood
        </Typography>
      </div>
      <div className="flex justify-center items-center bg-gray-300 py-12">
        <Typography variant="h2" className="w-1/2 font-serif text-center">
          Become A Member
        </Typography>
      </div>
      <div className="flex justify-center items-center bg-red-50 py-12">
        <Typography variant="h2" className="w-4/5 font-serif text-center">
          Find a Red Cross Near you
        </Typography>
      </div>
    </section>
  );
};

export default Border;
