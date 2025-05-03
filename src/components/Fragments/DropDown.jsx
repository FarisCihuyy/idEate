import { Icon } from "@iconify/react/dist/iconify.js";
import Icn from "../Elements/Icon";
import { useState } from "react";
import clsx from "clsx";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cities = [
    "Nganjuk, Jawa Timur",
    "Jayapura, Papua",
    "Bandung, Jawa Barat",
    "Medan, Sumatera Utara",
  ];

  const sortedCities = [...cities].sort();

  return (
    <label
      htmlFor="location"
      className="w-full flex items-center gap-2 bg-accent p-1 rounded-full relative"
      onMouseDown={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <Icn name="weui:location-outlined" variant="bg-dark"></Icn>
      <select
        name="location"
        id="location"
        className="w-full pr-5 mr-5 outline-none bg-transparent appearance-none overflow-ellipsis"
        onChange={() => setIsOpen(!isOpen)}
      >
        {sortedCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <Icon
        icon="uiw:down"
        className={clsx(
          `absolute right-5 w-5 h-5 pointer-events-none transition-transform ease-in-out`,
          isOpen && "rotate-180"
        )}
      />
    </label>
  );
};

export default DropDown;
