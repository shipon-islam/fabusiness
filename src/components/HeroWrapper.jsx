import Header from "./Header";

export default function HeroWrapper({ children, className, bg = "red" }) {
  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${
            bg === "red"
              ? "/images/bg/red-city.jpg"
              : "/images/bg/blue-city.jpg"
          })`,
        }}
        className={`bg-cover bg-center min-h-[670px] relative ${className}`}
      >
        <div className="container">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full">
            {children}
          </div>
        </div>
      </section>

      <div className="w-full h-20 bg-darkSlate lg:hidden"></div>
    </>
  );
}
