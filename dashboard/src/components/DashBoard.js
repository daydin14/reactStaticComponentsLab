import SideBar from "./SideBar";
import Reviews from "./Reviews";
import Ratings from "./Ratings";
import Analysis from "./Analysis";
import Visitors from "./Visitors";

function DashBoard() {
  return (
    <div class="dashboard">
      <SideBar />
      <Reviews />
      <Ratings />
      <Analysis />
      <Visitors />
    </div>
  );
}

export default DashBoard;
