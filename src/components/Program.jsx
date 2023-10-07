import { Typography } from "@material-tailwind/react";
import play from "../assets/play.svg";

const Program = () => {
  return (
    <section id="program" className="w-full py-20 flex justify-center">
      <div className="w-2/3 flex flex-col items-center ">
        <Typography variant="h1" className="capitalize font-serif">
          we also have a radio program
        </Typography>
        <div className="flex border-2 border-red-100 my-8">
          <div className="px-8">
            <Typography variant="lead" className="">
              Tuesday Program
            </Typography>
          </div>
          <div className="px-8 bg-red-50">
            <Typography variant="lead">Together for Humanity</Typography>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-16 py-8">
          <div className="flex justify-start items-center gap-4 ">
            <div className="bg-gray-200 text-center px-5 py-2">
              <Typography variant="paragraph" className="font-serif font-bold">
                30 <br />
                July
              </Typography>
            </div>
            <div>
              <Typography variant="paragraph" className="font-bold">
                Episode 676_Red Cross Radio
              </Typography>
              <Typography variant="small">Monsoon Response</Typography>
              <div className="flex items-center gap-4">
                <img src={play} alt="play" />
                <div className="flex">
                  <hr className=" h-1 w-32 bg-gray-700" />
                  <hr className=" h-1 w-20 bg-gray-300" />
                </div>
                <Typography variant="small">4:29 / 11:29</Typography>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 ">
            <div className="bg-gray-200 text-center px-5 py-2">
              <Typography variant="paragraph" className="font-serif font-bold">
                30 <br />
                July
              </Typography>
            </div>
            <div>
              <Typography variant="paragraph" className="font-bold">
                Episode 676_Red Cross Radio
              </Typography>
              <Typography variant="small">Monsoon Response</Typography>
              <div className="flex items-center gap-4">
                <img src={play} alt="play" />
                <div className="flex">
                  <hr className=" h-1 w-32 bg-gray-700" />
                  <hr className=" h-1 w-20 bg-gray-300" />
                </div>
                <Typography variant="small">4:29 / 11:29</Typography>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 ">
            <div className="bg-gray-200 text-center px-5 py-2">
              <Typography variant="paragraph" className="font-serif font-bold">
                30 <br />
                July
              </Typography>
            </div>
            <div>
              <Typography variant="paragraph" className="font-bold">
                Episode 676_Red Cross Radio
              </Typography>
              <Typography variant="small">Monsoon Response</Typography>
              <div className="flex items-center gap-4">
                <img src={play} alt="play" />
                <div className="flex">
                  <hr className=" h-1 w-32 bg-gray-700" />
                  <hr className=" h-1 w-20 bg-gray-300" />
                </div>
                <Typography variant="small">4:29 / 11:29</Typography>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 ">
            <div className="bg-gray-200 text-center px-5 py-2">
              <Typography variant="paragraph" className="font-serif font-bold">
                30 <br />
                July
              </Typography>
            </div>
            <div>
              <Typography variant="paragraph" className="font-bold">
                Episode 676_Red Cross Radio
              </Typography>
              <Typography variant="small">Monsoon Response</Typography>
              <div className="flex items-center gap-4">
                <img src={play} alt="play" />
                <div className="flex">
                  <hr className=" h-1 w-32 bg-gray-700" />
                  <hr className=" h-1 w-20 bg-gray-300" />
                </div>
                <Typography variant="small">4:29 / 11:29</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
