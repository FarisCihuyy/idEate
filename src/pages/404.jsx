import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[url(assets/images/404.png)] bg-contain bg-no-repeat relative">
      <div className="w-xl absolute right-12">
        <h1 className="font-bold text-[10rem]">404</h1>
        <h2 className="font-bold text-3xl my-2">UH OH! You're lost.</h2>
        <p className="">
          The page you are looking for does not exist. How you got here is a mystery. But you can
          click the button below to go back to the homepage.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 bg-accent px-4 py-2 text-sm font-semibold rounded-full transition-colors hover:bg-accent/0 hover:outline-2 hover:outline-accent"
        >
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
