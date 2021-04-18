import React from "react";
import Link from "next/link"

const MenuItem = ({ pageName, address }) => {
  return (
    <Link href={address}>
     <span className="menu-item">{pageName}</span> 
    </Link>
  );
};

export default MenuItem;
