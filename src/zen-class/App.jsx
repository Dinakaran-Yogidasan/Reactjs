import { useState } from "react";
import "./App.css";
import SignInSide from "./components/SignInSide";
import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Sidebar from "./components/layout/Sidebar";
import Blog from "./components/layout/Blog";
import TopSide from "./components/layout/TopSide";
import TimeLine from "./components/layout/MyTimeline";
import MyTimeline from "./components/layout/MyTimeline";



function App() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <SignInSide />
      {/* <Topbar /> */}
      <TopSide/>
      {/* <Blog/> */}
      {/* <MyTimeline/> */}
      {/* <Navbar open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} /> */}
    </>
  );
}

export default App;
