import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24">
      <div className="text-center text-sm text-gray-500 dark:text-slate-300">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
          {" "}
          Kanbanomatic
        </span>{" "}
        &copy; {new Date().getFullYear()} All Rights Reserved with MIT License.
      </div>
      <div className="text-center text-sm text-gray-500 dark:text-slate-300">
        Developed with <span className="text-rose-500">♥</span> by
        <span className="dark:text-gray-100 text-gray-900 font-bold text-md mr-2">
          {" "}
          <a target="_blank" href="https://afif.dev/" rel="noopener noreferrer">
            Afif Abdillah Jusuf
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
