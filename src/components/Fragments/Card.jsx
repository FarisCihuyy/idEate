import Button from "../Elements/Button";
import Icn from "../Elements/Icon";

const Card = ({ children }) => {
  return <div className="flex-1 bg-foreground p-4 rounded-2xl">{children}</div>;
};

const Header = ({ imageUrl, name }) => {
  return (
    <div className="w-2/3 mx-auto">
      <img src={imageUrl} alt={name} className="w-full max-w-28 mx-auto object-contain" />
    </div>
  );
};

const Body = ({ name, desc }) => {
  return (
    <div className="my-4">
      <h2 className="font-semibold text-xl">{name}</h2>
      {desc && <p className="text-sm">Weight {desc}</p>}
    </div>
  );
};

const Footer = ({ variant = null, textSize, children }) => {
  return (
    <Button color="bg-accent" variant={variant} textSize={textSize}>
      {children}
    </Button>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
