import { Icon } from "@iconify/react/dist/iconify.js";

const Header = ({ title, children }) => {
  return (
    <header className="flex items-end justify-between">
      <h1 className="flex items-start gap-0.5 font-medium text-xl">
        {title}
        <Icon icon="material-symbols-light:info-outline" />
      </h1>
      {children}
    </header>
  );
};

export default Header;
