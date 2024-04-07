import logo from "../../assets/logo.png";
import moment from "moment";
import BreakingNews from "../BreakingNews";
function Header() {
  return (
    <div className="pt-8 flex justify-center items-center flex-col w-full ">
      <img className="w-[400px] " src={logo} alt="" />
      <p className="text-[#706F6F] pt-4">Journalism Without Fear or Favour</p>
      <h4 className="text-[#3d3d3d] text-lg pt-2 ">
        {moment().format("dddd, MMMM D, YYYY")}
      </h4>
      <div>
        <BreakingNews></BreakingNews>
      </div>
    </div>
  );
}

export default Header;
