import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="mx-auto flex items-center justify-center">
        <p className="mr-2">© 2023 Name?</p>
		<a
          href="https://github.com/ElonMusk2002/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10 ml-2 fill-current text-dark-400 hover:text-gray-500"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 0C4.475 0 0 4.475 0 10c0 4.411 2.865 8.141 6.839 9.458.5.092.682-.213.682-.474 0-.233-.009-.853-.014-1.674-2.782.604-3.37-1.338-3.37-1.338-.455-1.177-1.11-1.492-1.11-1.492-.908-.619.07-.607.07-.607 1.004.07 1.531 1.031 1.531 1.031.892 1.525 2.34 1.084 2.912.829.091-.646.349-1.085.634-1.334-2.22-.251-4.555-1.107-4.555-4.936 0-1.09.39-1.984 1.032-2.682-.104-.252-.448-1.269.098-2.642 0 0 .84-.268 2.75 1.024a9.527 9.527 0 012.475-.333 9.568 9.568 0 012.475.333c1.91-1.292 2.748-1.024 2.748-1.024.546 1.373.202 2.39.098 2.641.642.698 1.032 1.592 1.032 2.682 0 3.837-2.337 4.683-4.563 4.928.358.309.678.917.678 1.847 0 1.334-.012 2.408-.012 2.727 0 .263.18.567.688.473C17.138 18.141 20 14.412 20 10c0-5.525-4.475-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;