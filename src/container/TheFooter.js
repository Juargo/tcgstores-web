import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span>
          Consultas o sugerencias al 
          <a href="https://www.instagram.com/pok3buy/"> Instagram</a>
        </span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoreUI for React
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
