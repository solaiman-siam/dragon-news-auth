import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import RightNav from "./shared/RightNav";
import { useParams } from "react-router-dom";
function NewsDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-7 mt-20">
        <div className="col-span-5">
          <h1 className="text-xl font-bold pb-6">Dragon News</h1>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="col-span-2">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
