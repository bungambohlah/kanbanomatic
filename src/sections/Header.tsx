import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Header: React.FC<{}> = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const RenderButtonThemeChanger: React.FC = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="h-15 w-full shadow-sm dark:border-gray-700">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />
        <RenderButtonThemeChanger />
      </div>
    </header>
  );
};

export default Header;
