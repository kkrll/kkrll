import React from "react";
import Link from "next/link"

const MenuItem = ({ pageName, address }) => {
  return (
    <Link href={address}>
     <a className="menu-item">{pageName}</a> 
    </Link>
  );
};

export default MenuItem;
