import { Icon } from "@iconify/react";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import Icn from "../Elements/Icon";
import Avatar from "./Avatar";
import Button from "../Elements/Button";

const MainHeader = () => {
  return (
    <header className="grid items-center grid-cols-12 gap-8 p-6 border-b border-accent/30 fixed z-10 left-48 right-0 top-0 backdrop-blur-sm bg-dark/20">
      <div className="col-span-8 flex gap-2">
        <DropDown />
        <SearchBar />
      </div>
      <div className="col-span-4 flex items-center gap-2 h-full">
        <Button color="bg-accent" variant={"with-icon"}>
          <Icn name={"lineicons:cart-2"} variant="bg-dark" />
          <p>2 items added</p>
        </Button>
        <div className="flex items-center gap-2 h-full">
          <Icon
            icon="solar:bell-outline"
            className="h-full w-auto aspect-square rounded-full border border-accent p-2.5"
          />
          <Avatar imgUrl="assets/images/avatar.jpg" />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
