import clsx from "clsx";
import React from "react";

const Button = ({ textSize = "text-base", variant, color = "transparent", outline, children }) => {
  return (
    <button
      className={clsx(
        `grow font-medium ${color} rounded-full p-1 mx-auto flex items-center gap-1 cursor-pointer`,
        variant !== "with-icon" ? "justify-center py-2 px-4" : "justify-start pr-6",
        outline && "outline-1 outline-accent",
        textSize
      )}
    >
      {children}
    </button>
  );
};

export default Button;
