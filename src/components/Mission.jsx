import { Button, Typography } from "@material-tailwind/react";

const Mission = () => {
  return (
    <section id="mission" className="w-full">
      <div className="flex flex-col md:flex-row text-center">
        <div className="bg-gray-200 w-full md:w-3/5 p-10 flex justify-center">
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="font-serif">
              Our Mission
            </Typography>
            <Typography variant="small" className="font-serif">
              Elementum nec posuere auctor varius. Vehicula nec faucibus orci
              eget odio tortor in pharetra ultrices. Diam varius vitae placerat
              vitae quis mauris cras senectus tempus.
            </Typography>
            <Typography variant="paragraph" className="text-red-700">
              Read More
            </Typography>
          </div>
        </div>
        <div className="bg-red-100 w-full py-4 md:w-2/5 flex justify-center items-center">
          <div className="w-full md:w-1/2">
            <Typography variant="h1" className="font-serif pb-2">
              Take A Pledge!
            </Typography>
            <Button variant="outlined" className="w-2/3 border border-red-500">
              Support Us
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-center">
        <div className="bg-gray-300  w-full md:w-3/5 p-10 flex justify-center">
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="font-serif">
              Objectives & Functions
            </Typography>
            <Typography variant="small" className="font-serif">
              Elementum nec posuere auctor varius. Vehicula nec faucibus orci
              eget odio tortor in pharetra ultrices. Diam varius vitae placerat
              vitae quis mauris cras senectus tempus.
            </Typography>
            <Typography variant="paragraph" className="text-red-700">
              Read More
            </Typography>
          </div>
        </div>
        <div className=" w-full py-4 md:w-2/5 flex bg-red-50 flex-col justify-center items-center">
          <div className="w-full md:w-1/2">
            <Typography variant="h1" className="font-serif pb-2">
              Photos & Videos
            </Typography>
            <Button variant="outlined" className="border border-red-500 w-2/3">
              Go to Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
