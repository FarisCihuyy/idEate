import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";

const Icn = ({ name, variant, outline, transparent }) => {
  return (
    <Icon
      icon={name}
      className={clsx(
        "h-8 w-auto aspect-square p-1 flex-none rounded-full",
        `${variant}`,
        outline && "outline-1 outline-accent cursor-pointer",
        transparent && "bg-transparent"
      )}
    />
  );
};

export default Icn;
