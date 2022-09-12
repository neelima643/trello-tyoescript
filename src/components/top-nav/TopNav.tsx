import React from "react";
import InputSelect from "../input-select/InputSelect";
import Button from "../button/Button";
import "../top-nav/TopNav.css";
import { FaSearch, FaTrello } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";

const TopNav = () => {
  const workspace = [
    { key: "Workspace", val: "Workspace" },
    { key: "Workspace", val: "Workspace" },
    { key: "Workspace", val: "Workspace" },
  ];
  const recent = [
    { key: "Recent", val: "Recent" },
    { key: "Recent", val: "Recent" },
    { key: "Recent", val: "Recent" },
  ];
  const starred = [
    { key: "Starred", val: "Starred" },
    { key: "Starred", val: "Starred" },
    { key: "Starred", val: "Starred" },
  ];
  const templates = [
    { key: "Templates", val: "Templates" },
    { key: "Templates", val: "Templates" },
    { key: "Templates", val: "Templates" },
  ];

  return (
    <header>
      <div className="nav">
        <BsFillGrid3X3GapFill className="menuicon" size={20} />
      </div>

      <div className="nav1">
        <FaTrello className="trelloicon" size={20} />
      </div>
      <div className="nav">
        <div className="head">Trello</div>
      </div>

      <InputSelect
        divname="nav"
        selectclass="element"
        options={workspace}
        optionclass="headeroption"
      />

      <InputSelect divname="nav" selectclass="element" options={recent} />

      <InputSelect divname="nav" selectclass="element" options={starred} />

      <InputSelect divname="nav" selectclass="element" options={templates} />

      <div className="nav">
        <Button buttonclass="createbutton" label="Create" />
      </div>

      <div className="rightside">
        <div className="searchdiv">
          <FaSearch size={24} className="searchicon" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="infodiv">
          <AiOutlineInfoCircle size={24} />
        </div>

        <div className="notifdiv">
          <MdNotifications size={20} />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
