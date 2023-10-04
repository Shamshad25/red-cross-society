import { Button } from "@material-tailwind/react";
import logo from "../assets/Logo.png";
import { FaSistrix } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex w-full  justify-around  items-center p-4">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-8">
          <li>About Us</li>
          <li>What we do</li>
          <li>Get Involved</li>
          <li>News & Updates</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-2 z-30">
        <div className="border w-8 h-8 flex justify-center items-center border-red-500">
          <FaSistrix color="red" size={20} />
        </div>
        <Button color="red">Donate</Button>
      </div>
    </header>
  );
};

export default Navbar;
