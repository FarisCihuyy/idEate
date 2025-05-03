import MainHeader from "../Fragments/MainHeader";
import DiscountOverview from "./DiscountOverview";
import ProductOverview from "./ProductOverview";

const MainContent = () => {
  return (
    <div className="ml-56 py-6 pr-6">
      <main className="relative">
        <MainHeader />
        <ProductOverview />
        <DiscountOverview />
      </main>
    </div>
  );
};

export default MainContent;
