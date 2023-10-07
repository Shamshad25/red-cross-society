import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@material-tailwind/react";
import logo from "../assets/Logo.png";
import { FaSistrix } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full hidden sm:flex  justify-around  items-center p-4 ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-8">
          <AnchorLink href="#about" className="text-white cursor-pointer z-50">
            About Us
          </AnchorLink>
          <AnchorLink
            href="#difference"
            className="text-white cursor-pointer z-50"
          >
            What we do
          </AnchorLink>
          <AnchorLink href="#news" className="text-white cursor-pointer z-50">
            Get Involved
          </AnchorLink>
          <AnchorLink href="#about" className="text-white cursor-pointer z-50">
            News & Updates
          </AnchorLink>
          <AnchorLink
            href="#bloodbank"
            className="text-white cursor-pointer z-50"
          >
            Resources
          </AnchorLink>
          <AnchorLink href="#footer" className="text-white cursor-pointer z-50">
            Contact
          </AnchorLink>
        </ul>
      </div>
      <div className="flex items-center gap-2 z-30">
        <div className="border flex justify-center items-center border-red-500">
          <FaSistrix color="red" size={20} className="z-30 cursor-pointer" />
        </div>
        <Button color="red">Donate</Button>
      </div>
    </header>
  );
};

export default Navbar;
