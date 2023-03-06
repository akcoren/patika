import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigator = () => {
  return (
    <>
      <div className="flex gap-3 bg-slate-200 p-4">
        <Link className="p-1 border pointer border-slate-500" to={`/`}>
          Characters
        </Link>

        <Link className="p-1 border pointer border-slate-500" to={`quotes`}>
          Quotes
        </Link>
      </div>

      <Outlet />
    </>
  );
};

export default Navigator;
