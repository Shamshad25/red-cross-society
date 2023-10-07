import React from "react";
import { Typography } from "@material-tailwind/react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <section id="footer" className="w-full flex justify-center py-20">
        <div className="w-4/5 flex gap-4 items-center ">
          <div className="px-6">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-full bg-red-50 flex flex-row justify-between p-8 ">
            <div className="flex flex-col gap-2">
              <Typography variant="small" className="font-bold py-4">
                Contact Information
              </Typography>
              <Typography variant="small">
                Phone: +977-1-5370650 , +977-1-537 2761
              </Typography>
              <Typography variant="small">
                Phone: +977-1-5370650 , +977-1-537 2761
              </Typography>
              <Typography variant="small">
                Email: nrcs@nrcs.org, info@nrcs.org
              </Typography>
              <Typography variant="small">Post Box No. : 217</Typography>
              <Typography variant="small">
                Fax : +977-4271915, 4273285
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="small" className="font-bold py-4">
                Quick Links
              </Typography>
              <Typography variant="small">About Us</Typography>
              <Typography variant="small">FAQ&apos;s</Typography>
              <Typography variant="small">What We Do</Typography>
              <Typography variant="small">Get Involved</Typography>
              <Typography variant="small">News And Events</Typography>
              <Typography variant="small">Contact Us</Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="small" className="font-bold py-4">
                Connect With Us
              </Typography>
              <Typography variant="small">YouTube</Typography>
              <Typography variant="small">Facebook</Typography>
              <Typography variant="small">Twitter</Typography>
              <Typography variant="small">Instagram</Typography>
            </div>
          </div>
        </div>
      </section>
      <footer className=" bg-red-500 text-center py-3">
        <Typography variant="small" className="text-white">
          Copyright 2023. All Rights Reserved by Nepal Red Cross.
        </Typography>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
