import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a className="my-2 flex items-center justify-evenly">
        <h2 className="text-3xl lg:text-5xl md:text-5xl font-extrabold text-gray-700 dark:text-slate-300">
          <span className="text-purple-300">Kanban</span>omatic
        </h2>
      </a>
    </Link>
  );
};

export default Logo;
