const Avatar = ({ imgUrl }) => {
  return <div style={{ backgroundImage: `url(${imgUrl})` }} className="aspect-square h-full bg-contain rounded-full"></div>;
};

export default Avatar;
