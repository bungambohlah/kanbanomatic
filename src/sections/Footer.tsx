import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='px-4 py-6 mt-24 sm:px-6'>
      <div className='text-sm text-center text-gray-500 dark:text-slate-300'>
        <span className='mr-2 text-lg font-bold text-gray-900 dark:text-gray-100'>
          {' '}
          Kanbanomatic
        </span>{' '}
        &copy; {new Date().getFullYear()} All Rights Reserved with MIT License.
      </div>
      <div className='text-sm text-center text-gray-500 dark:text-slate-300'>
        Developed with <span className='text-rose-500'>♥</span> by
        <span className='mr-2 font-bold text-gray-900 text-md dark:text-gray-100'>
          {' '}
          <a target='_blank' href='https://afif.dev/' rel='noopener noreferrer'>
            Afif Abdillah Jusuf
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
