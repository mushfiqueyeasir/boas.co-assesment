/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import StickyNav from "./StickyNav";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });

    return (
        <section className="drawer w-full ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <NavBar />
                <StickyNav isSticky={sticky} />
            </div>
            <SideBar />
        </section>
    );
};

export default Header;
