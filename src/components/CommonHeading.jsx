export default function CommonHeading({
  heading,
  subHeading,
  className,
  subClassName,
}) {
  return (
    <div className="text-center my-6 sm:my-9 lg:my-10 container">
      <h1
        className={`font-bold text-xl sm:text-[1.4rem] lg:text-2xl text-gold ${className}`}
      >
        {heading}
      </h1>
      <p
        className={`text-2xl sm:text-4xl mt-1.5 font-semibold ${subClassName}`}
      >
        {subHeading}
      </p>
    </div>
  );
}
