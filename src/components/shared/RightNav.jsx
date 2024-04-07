import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

function RightNav() {
  return (
    <div className="">
      <div className="mb-6">
        <h3 className="pb-4 text-xl font-bold">Login with</h3>

        <button className="btn btn-sm w-full btn-outline hover:bg-green-500">
          <FaGoogle /> Google
        </button>
        <button className="btn btn-sm w-full btn-outline mt-2">
          <FaGithub /> Github
        </button>
      </div>
      <div>
        <h3 className="text-xl font-bold ">Find Us On</h3>
        <div className=" border rounded-lg mt-4">
          <Link className="flex  items-center gap-2 p-6 link-hover border-b pb-2">
            {" "}
            <FaFacebook></FaFacebook> <span>Facebook</span>
          </Link>
          <Link className="flex  items-center gap-2 p-6 link-hover border-b pb-2">
            {" "}
            <FaTwitter></FaTwitter> <span>Twitter</span>
          </Link>
          <Link className="flex  items-center gap-2 p-6 link-hover border-b pb-2">
            {" "}
            <FaInstagram></FaInstagram> <span>Instagram</span>
          </Link>
        </div>
      </div>
      <div className="bg-[#ededed] p-2 mt-6">
        <h3 className="text-xl font-bold pb-4 pl-4 pt-2">Q-Zone</h3>
        <div>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightNav;
