import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import LoginButton from '../components/LoginButton';

const Header: React.FC<Record<string, never>> = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const RenderButtonThemeChanger: React.FC = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='w-10 h-10 text-yellow-500 '
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className='w-10 h-10 text-gray-900 '
          role='button'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header className='w-full shadow-sm h-15 dark:border-gray-700'>
      <div className='container flex items-center justify-between px-4 py-4 sm:px-6'>
        {/* Logo */}
        <Logo />
        <div className='flex items-center gap-4 flex-end'>
          <LoginButton />
          <RenderButtonThemeChanger />
        </div>
      </div>
    </header>
  );
};

export default Header;
