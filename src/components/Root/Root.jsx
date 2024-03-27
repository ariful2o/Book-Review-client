import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./Footer/Footer";


export default function Root() {
  return (<>
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
    <Footer />
  </>)
}
