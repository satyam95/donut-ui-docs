import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 sm:px-0 py-1">
        <div className="text-balance text-sm leading-5 sm:leading-7 text-center">
          Built by{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline underline-offset-4"
          >
            satyam
          </a>
          . The source code is available on{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
