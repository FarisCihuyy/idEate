import Button from "../Elements/Button";
import Header from "../Elements/Header";
import Card from "../Fragments/Card";
import Countdown from "../Fragments/Countdown";
import RangeSlider from "../Fragments/RangeSlider";

const DiscountOverview = () => {
  const discountStore = [
    {
      id: "STR00001",
      name: "Comptoir",
      image: "assets/images/comptoir.png",
    },
    {
      id: "STR00002",
      name: "Delight",
      image: "assets/images/delight.png",
    },
    {
      id: "STR00003",
      name: "Lofts",
      image: "assets/images/lofts.png",
    },
    {
      id: "STR00004",
      name: "Tim Shop",
      image: "assets/images/tim shop.png",
    },
  ];

  return (
    <section className="mt-8 grid grid-cols-12 items-stretch gap-8">
      <div className="col-span-8 h-full">
        <div>
          <Header title="20% Discount">
            <p className="flex gap-1 items-center text-sm py-0.5 px-4 rounded-full transition-colors ring-0 ring-accent cursor-pointer hover:ring-1 hover:text-accent hover:bg-accent/10">
              see all
            </p>
          </Header>
          <div className="mt-2 flex gap-4 text-center bg-dark p-4 rounded-2xl">
            {discountStore.map((store) => (
              <Card key={store.id}>
                <Card.Header imageUrl={store.image} name={store.name} />
                <Card.Body name={store.name} />
                <Card.Footer textSize="text-sm">shop now</Card.Footer>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Header title="Nearby shop">
            <RangeSlider />
          </Header>
          <div className="mt-3 flex gap-4 text-center rounded-2xl *:flex-1">
            <div className="flex items-center gap-4 bg-dark p-4 rounded-2xl">
              <div className="max-w-20 aspect-square">
                <img
                  src="assets/images/shawpno.png"
                  alt="Shawpno super shop"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium">Shwapno super shop</h3>
                <p className="my-2">⭐⭐⭐⭐⭐</p>
                <div className="flex items-center gap-2">
                  <Button textSize="text-sm" color="bg-accent">
                    follow
                  </Button>
                  <Button textSize="text-sm" color="bg-accent">
                    shop now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-dark p-4 rounded-2xl">
              <div className="max-w-20 aspect-square">
                <img
                  src="assets/images/shawpno.png"
                  alt="Shawpno super shop"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium">Shwapno super shop</h3>
                <p className="my-2">⭐⭐⭐⭐⭐</p>
                <div className="flex items-center gap-2">
                  <Button textSize="text-sm" color="bg-accent">
                    follow
                  </Button>
                  <Button textSize="text-sm" color="bg-accent">
                    shop now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-col">
        <Header title="Exclusive" />
        <div className="mt-2 grow relative w-full bg-dark rounded-2xl h-full overflow-hidden">
          <div className="absolute -top-56 -right-40 object-contain overflow-hidden">
            <img
              src="assets/images/cold juice.png"
              alt="Cold Pressed Juice"
              className="rotate-30 scale-105"
            />
          </div>
          <div className="w-full h-full p-8 relative z-10 flex flex-col justify-between">
            <h3 className="w-2/3 font-semibold text-xl">
              Cold Pressed Juice <span className="block text-2xl text-accent">80% Off</span>
            </h3>

            <div className="flex flex-col gap-2">
              <Countdown targetDate="2025-11-01T00:00:00" />
              <Button color="bg-foreground">shop now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountOverview;
