import React from "react";
import NavbarSec1 from "./NavbarSec1.tsx";
import NavbarSec2 from "./NavbarSec2.tsx";
import NavbarSec3 from "./NavbarSec3.tsx";

export default function Navbar() {
  return (
    <div className="font-poppins">
      <NavbarSec1 />
      <NavbarSec2 />
      <NavbarSec3 />
    </div>
  );
}
