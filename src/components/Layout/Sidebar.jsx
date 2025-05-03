import Icn from "../Elements/Icon";
import Navbar from "../Fragments/Navbar";

const Sidebar = () => {
  return (
    <aside className="bg-dark w-48 min-h-screen fixed z-10 p-6">
      <div className="w-2/3">
        <img src="/assets/images/logo.svg" alt="Ideate shop logo" />
      </div>
      <Navbar></Navbar>
      <div className="absolute bottom-6 right-0 w-full">
        <button className="flex items-center justify-center gap-2 mx-auto cursor-pointer transition-colors ease-in-out hover:text-rose-600 focus:outline-none">
          Logout
          <Icn name="solar:logout-3-outline" transparent={true} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
