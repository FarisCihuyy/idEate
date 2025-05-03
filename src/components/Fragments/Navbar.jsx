import { NavLink } from "react-router";
import Icn from "../Elements/Icon";
import clsx from "clsx";

const Navbar = () => {
  return (
    <nav className="mt-12 ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx(
            "flex items-center gap-2 mb-8 rounded transition-colors ease-in-out focus:outline-1 focus:outline-accent/50",
            {
              "text-accent": isActive,
              "hover:text-accent/80": !isActive,
            }
          )
        }
      >
        <Icn name="bitcoin-icons:home-outline" transparent={true} />
        Home
      </NavLink>

      <NavLink
        to="/category"
        className={({ isActive }) =>
          clsx(
            "flex items-center gap-2 mb-8 rounded transition-colors ease-in-out focus:outline-1 focus:outline-accent/50",
            {
              "text-accent": isActive,
              "hover:text-accent/80": !isActive,
            }
          )
        }
      >
        <Icn name="solar:bag-3-outline" transparent={true} />
        Categories
      </NavLink>

      <NavLink
        to="/favorite"
        className={({ isActive }) =>
          clsx(
            "flex items-center gap-2 mb-8 rounded transition-colors ease-in-out focus:outline-1 focus:outline-accent/50",
            {
              "text-accent": isActive,
              "hover:text-accent/80": !isActive,
            }
          )
        }
      >
        <Icn name="solar:heart-outline" transparent={true} />
        Favorite
      </NavLink>

      <NavLink
        to="/setting"
        className={({ isActive }) =>
          clsx(
            "flex items-center gap-2 mb-8 rounded transition-colors ease-in-out focus:outline-1 focus:outline-accent/50",
            {
              "text-accent": isActive,
              "hover:text-accent/80": !isActive,
            }
          )
        }
      >
        <Icn name="lsicon:setting-outline" transparent={true} />
        Setting
      </NavLink>

      <NavLink
        to="/feedback"
        className={({ isActive }) =>
          clsx(
            "flex items-center gap-2 mb-8 rounded transition-colors ease-in-out focus:outline-1 focus:outline-accent/50",
            {
              "text-accent": isActive,
              "hover:text-accent/80": !isActive,
            }
          )
        }
      >
        <Icn name="garden:smile-slight-stroke-16" transparent={true} />
        Feedback
      </NavLink>
    </nav>
  );
};

export default Navbar;
