import { Button, Typography } from "@material-tailwind/react";

const Mission = () => {
  return (
    <section className="w-full">
      <div className="flex text-center">
        <div className="bg-gray-200 w-3/5 p-10 flex justify-center">
          <div className="w-2/3">
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
        <div className="bg-red-100 w-2/5 flex flex-col justify-center items-center">
          <div className="w-1/2">
            <Typography variant="h1" className="font-serif pb-2">
              Take A Pledge!
            </Typography>
            <Button variant="outlined" className="w-2/3 border border-red-500">
              Support Us
            </Button>
          </div>
        </div>
      </div>
      <div className="flex text-center">
        <div className="bg-gray-300 w-3/5 p-10 flex justify-center">
          <div className="w-2/3">
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
        <div className=" w-2/5 flex bg-red-50 flex-col justify-center items-center">
          <div className="w-1/2">
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
