import Button from "../Elements/Button";
import Counter from "./Counter";

const OrderItem = () => {
  const currentOrderItem = [
    {
      id: "GRY00004",
      name: "Red Saffron",
      weight: "1 kilogram",
      quantity: 1,
      price: 25.99,
      image: "assets/images/Red Saffron.png",
    },
    {
      id: "GRY00005",
      name: "Sweets",
      weight: "500 gram",
      quantity: 3,
      price: 25.0,
      image: "assets/images/Sweets.png",
    },
    {
      id: "GRY00006",
      name: "Honeyf",
      weight: "500 gram",
      quantity: 2,
      price: 12.5,
      image: "assets/images/Honey.png",
    },
  ];

  const total = currentOrderItem.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="h-full flex flex-col justify-between">
      <ul className="flex flex-col gap-4">
        {currentOrderItem.map((item) => {
          const { id, name, weight, quantity, price, image } = item;
          const formatedPrice = new Intl.NumberFormat("en-US").format(price);

          return (
            <li key={id} className="grid grid-cols-9 items-center gap-4">
              <div className="col-span-5 flex items-center gap-2">
                <img src={image} alt={name} className="w-12 h-12 object-contain" />
                <div className="min-w-0">
                  <h3 className="font-medium text-sm truncate">{name}</h3>
                  <p className="text-[0.55rem]">Weight {weight}</p>
                </div>
              </div>
              <div className="col-span-2 flex items-center gap-1 border border-accent rounded-full">
                <Counter qty={quantity} />
              </div>
              <div className="col-span-2 text-left">
                <p className="text-sm font-semibold">${formatedPrice * quantity}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-between gap-4 mt-4">
        <Button outline={true}>
          <sup className="mt-2 text-[0.55rem]">Total</sup>$
          {new Intl.NumberFormat("en-US").format(total)}
        </Button>
        <Button color="bg-accent">Order again</Button>
      </div>
    </div>
  );
};

export default OrderItem;
