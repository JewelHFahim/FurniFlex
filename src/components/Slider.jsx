import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-06/rch-201-black.jpg",
      url: "/",
      bg: "bg-gradient-to-r from-white to-white",
    },
    {
      id: 2,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-11/img107000ejd.jpg",
      url: "/",
      bg: "bg-gradient-to-r from-white to-white",
    },
    {
      id: 3,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2024-09/rch-301view-01rgjjcolor.jpg",
      url: "/",
      bg: "bg-gradient-to-r from-white to-white",
    },
  ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000);

      return () => clearInterval(interval);
    }, [slides.length]);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translate(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT SECTION */}
            <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-4 2xl:gap-8 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-3xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link to={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* IMAGE SECTION */}
            <div className="xl:w-1/2 h-1/2 xl:h-full">
              <img
                src={slide.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex justify-center items-center 
            ${current === index ? "scale-150" : ""}`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] rounded-full bg-slate-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
