import { Button, Typography } from "@material-tailwind/react";

const BloodBank = () => {
  return (
    <section id="bloodbank" className="w-full flex justify-center py-16">
      <div className="w-full md:w-2/3">
        <div className="flex items-center gap-2">
          <Typography variant="paragraph" className="font-sans ">
            Blood Bank
          </Typography>
          <hr className=" h-0.5 w-20 bg-gray-300" />
        </div>
        <div className="flex flex-col md:flex-row pb-6">
          <div className="w-full md:w-1/2">
            <Typography variant="h1" className="font-serif py-8">
              The Nepal Red Cross Blood Bank Inventory
            </Typography>
            <Typography variant="paragraph">
              These are the currently available number of pints of different
              blood groups.
            </Typography>
          </div>
          <div className="w-1/2  flex flex-col justify-end items-end pb-20">
            <Button color="red" className="w-full md:w-1/2">
              Donate Blood
            </Button>
          </div>
        </div>

        <div className="grid grid-rows-1 md:grid-cols-10 gap-4 py-2">
          <div className="col-span-2 py-4 border-2 border-red-100 text-center">
            <Typography>Pints Available</Typography>
          </div>
          <Typography
            variant="lead"
            className=" bg-gray-300 text-center font-serif font-bold "
          >
            0<br />
            Pints
          </Typography>
          <Typography
            variant="lead"
            className=" bg-red-100 text-center font-serif font-bold "
          >
            72
            <br />
            Pints
          </Typography>
          <Typography
            variant="lead"
            className=" bg-red-100 text-center font-serif font-bold "
          >
            72
            <br />
            Pints
          </Typography>
          <Typography
            variant="lead"
            className=" bg-red-100 text-center font-serif font-bold "
          >
            72
            <br />
            Pints
          </Typography>
          <Typography
            variant="lead"
            className=" bg-red-100 text-center font-serif font-bold "
          >
            29
            <br />
            Pints
          </Typography>
          <Typography
            variant="lead"
            className=" bg-gray-300 text-center font-serif font-bold "
          >
            11
            <br />
            Pints
          </Typography>
          <Typography
            variant="lead"
            className=" bg-red-100 text-center font-serif font-bold "
          >
            72
            <br />
            Pints
          </Typography>
          <Typography
            variant="lead"
            className=" bg-red-100 text-center font-serif font-bold "
          >
            72
            <br />
            Pints
          </Typography>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-10 gap-4 items-center text-center">
          <div className="col-span-2 py-2 border-2 border-red-100 text-center">
            <Typography className="col-span-2">Blood Groups</Typography>
          </div>

          <Typography>A +</Typography>
          <Typography>A -</Typography>
          <Typography>B +</Typography>
          <Typography>B -</Typography>
          <Typography>AB +</Typography>
          <Typography>AB -</Typography>
          <Typography>O +</Typography>
          <Typography>O -</Typography>
        </div>
      </div>
    </section>
  );
};

export default BloodBank;
