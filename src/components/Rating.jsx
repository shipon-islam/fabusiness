import { StarEmptyIcon, StarHalfIcon, StarIcon } from "./SvgIcons";

export default function Rating({ rating = 4.5 }) {
  const arr = Array.from({ length: 5 }, (v, i) => {
    let index = i + 0.5;
    return (
      <span key={i} className="text-orange-400">
        {Number(rating) >= i + 1 ? (
          <StarIcon key={index} className="text-lightBlue w-5 h-auto" />
        ) : Number(rating) >= index ? (
          <StarHalfIcon
            key={index}
            className="text-lightBlue w-[19px] h-auto"
          />
        ) : (
          <StarEmptyIcon key={index} className="text-lightBlue w-5 h-auto" />
        )}
      </span>
    );
  });

  return <div className="flex gap-x-1 items-center">{arr}</div>;
}
