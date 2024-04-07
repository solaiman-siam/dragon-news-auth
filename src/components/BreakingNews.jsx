import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function BreakingNews() {
  return (
    <div className="flex py-2 px-2 bg-[#f5f5f5] mt-4">
      <button className="bg-[#d72050] px-4 py-2  text-white font-medium">
        Latest
      </button>
      <Marquee speed={100}>
        <Link className="mr-10">
          Bangladesh is an overpopulated country in the world
        </Link>
        <Link className="mr-10">
          Bangladesh is an overpopulated country in the world
        </Link>
        <Link className="mr-10">
          Bangladesh is an overpopulated country in the world
        </Link>
        <Link className="mr-10">
          Bangladesh is an overpopulated country in the world
        </Link>
      </Marquee>
    </div>
  );
}

export default BreakingNews;
