import "./styleMenu.css";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { CSSTransition } from "react-transition-group";

import Sidebar from "../Sidebar";

function Menu() {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);
  return (
    <>
      <button
        className="flex w-10 cursor-pointer items-center justify-center self-end rounded-sm bg-[#00ADB5] p-1 lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose size={30} color="#FFF" /> : <IoMdMenu size={30} color="#FFF" />}
      </button>

      <CSSTransition nodeRef={nodeRef} in={open} timeout={500} classNames="sidebar" unmountOnExit>
        <div>
          {createPortal(
            <div className="sideBar" ref={nodeRef}>
              <Sidebar />
            </div>,
            document.body,
          )}
        </div>
      </CSSTransition>
    </>
  );
}

export default Menu;
