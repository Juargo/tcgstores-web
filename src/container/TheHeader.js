import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHeader, CToggler } from "@coreui/react";
import Search from "../components/Search";
const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
       <h1>POKEBUY V1.2.5</h1>
       <span className="subtitulo">- Cotiza</span>
        <Search></Search>
  
    </CHeader>
  );
};

export default TheHeader;
