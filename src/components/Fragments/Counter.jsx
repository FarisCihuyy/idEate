import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const Counter = ({ qty }) => {
  const [quantity, setQuantity] = useState(qty);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Icon icon="iconamoon:arrow-left-2-duotone" className="text-xl" onClick={handleDecrement} />
      <p className="text-[0.75rem]">{quantity}</p>
      <Icon
        icon="iconamoon:arrow-right-2-duotone"
        className="text-xl text-accent"
        onClick={handleIncrement}
      />
    </>
  );
};

export default Counter;
