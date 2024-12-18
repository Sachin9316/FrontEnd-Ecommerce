/* eslint-disable react/prop-types */
const Card = ({ post }) => {
  const { title, brand, price, image } = post;

  const titleLength =
    title.length > 30 ? title.split(" ").slice(0, 2).join("") : title;

  return (
    <div className="flex text-gray-300 flex-col font-semibold gap-y-1 my-4 mx-2 w-72 p-3 border hover:shadow-gray-950 shadow-lg cursor-pointer duration-200 hover:scale-105">
      <img src={image} alt="" className="h-[240px] bg-cover hover:scale-95 duration-300" loading="lazy" />
      <h2 className="font-semibold">${price}</h2>
      <h2 className="font-semibold uppercase">{brand}</h2>
      <h2 className="font-bold ">{titleLength}</h2>
    </div>
  );
};

export default Card;
