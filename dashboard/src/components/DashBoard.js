import SideBar from "./SideBar";
import Module from "./Module";
import Main from "./Main";

function DashBoard() {
  return (
    <div>
        <SideBar/>

        <Module/>
        <Module/>
        <Module/>
        
        <Main/>
    </div>
  )
}

export default DashBoard;