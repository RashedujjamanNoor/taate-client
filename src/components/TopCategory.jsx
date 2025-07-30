import React from "react";

const TopCategory = () => {
  const data = [
    { img: "/panjabi", category: "SHIRT" },
    { img: "/panjabi", category: "PANJABI" },

    { img: "/panjabi", category: "FASHION TOPS" },

    { img: "/panjabi", category: "EXCLUSIVE LAWN" },
    { img: "/panjabi", category: "POLO & T-SHIRT" },
    { img: "/panjabi", category: "ETHNIC PIECES" },
    { img: "/panjabi", category: "KIDS" },
    { img: "/panjabi", category: "ACCESSORIES" },
  ];
  return (
    <div className="mx-4 lg:mx-6 2xl:mx-8">
      <h2 className="text-center mt-10 text-xl 2xl:text-4xl font-bold text-primary">
        Top Category
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  justify-items-center items-center mt-10 gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative w-full h-auto overflow-hidden group cursor-pointer">
              <img
                src="/shirt.jpg"
                alt="shirt"
                className="w-full h-auto transform duration-900 transition-all ease-in group-hover:scale-105"
              />
              <p className="absolute z-10 bottom-0 text-center pt-6 pb-4 text-xl md:text-2xl font-bold text-primary drop-shadow-lg w-full h-full">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
