import DragonNewsCard from "../components/DragonNewsCard";
import Header from "../components/shared/Header";
import LeftNav from "../components/shared/LeftNav";
import Navbar from "../components/shared/Navbar";
import RightNav from "../components/shared/RightNav";
import { useLoaderData } from "react-router-dom";
function Home() {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-6 mt-14">
        <div>
          <LeftNav></LeftNav>
        </div>
        <div className="col-span-2">
          <h1 className="text-xl font-bold ">Dragon News Home</h1>
          {news.map((item) => (
            <DragonNewsCard key={item._id} news={item}></DragonNewsCard>
          ))}
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
}

export default Home;
