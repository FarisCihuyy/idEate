import Header from "../Elements/Header";
import Icn from "../Elements/Icon";
import Card from "../Fragments/Card";
import CurrentOrderItem from "../Fragments/CurrentOrderItem";

const ProductOverview = () => {
  const popularProduct = [
    {
      id: "GRY00001",
      name: "Orange",
      weight: "1 kilogram",
      price: 3.99,
      image: "assets/images/orange.png",
    },
    {
      id: "GRY00002",
      name: "Nutela",
      weight: "500 gram",
      price: 5.99,
      image: "assets/images/nutela.png",
    },
    {
      id: "GRY00003",
      name: "Nescafe",
      weight: "300 ml",
      price: 4.99,
      image: "assets/images/nescafe.png",
    },
  ];

  return (
    <section className="mt-24 grid grid-cols-12 items-stretch gap-8">
      <div className="col-span-8 h-full">
        <Header title="Popular product">
          <p className="flex gap-1 items-center text-sm py-0.5 px-4 rounded-full transition-colors ring-0 ring-accent cursor-pointer hover:ring-1 hover:text-accent hover:bg-accent/10">
            see all
          </p>
        </Header>
        <div className="mt-2 flex gap-4 text-center bg-dark p-4 rounded-2xl">
          {popularProduct.map((item) => {
            const formatedPrice = new Intl.NumberFormat("en-US").format(item.price);
            return (
              <Card key={item.id}>
                <Card.Header imageUrl={item.image} name={item.name} />
                <Card.Body name={item.name} desc={item.weight} />
                <Card.Footer variant="with-icon" textSize={"text-xl"}>
                  <Icn name="eva:plus-outline" variant="bg-dark" />${formatedPrice}
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="col-span-4 flex flex-col">
        <Header title="Last order"></Header>
        <div className="mt-2 grow bg-dark p-4 rounded-2xl h-full">
          <CurrentOrderItem></CurrentOrderItem>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
