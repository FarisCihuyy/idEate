const Avatar = ({ imgUrl }) => {
  return <div className={`aspect-square h-full bg-[url(${imgUrl})] bg-contain rounded-full`}></div>;
};

export default Avatar;
