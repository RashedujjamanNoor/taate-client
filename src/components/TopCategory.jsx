import React from "react";

const TopCategory = () => {
  const data = [
    { img: "/shirt.jpg", category: "SHIRT" },
    { img: "/shirt.jpg", category: "PANJABI" },

    { img: "/shirt.jpg", category: "FASHION TOPS" },

    { img: "/shirt.jpg", category: "EXCLUSIVE LAWN" },
    { img: "/shirt.jpg", category: "POLO & T-SHIRT" },
    { img: "/shirt.jpg", category: "ETHNIC PIECES" },
    { img: "/kid.jpg", category: "KIDS" },
    { img: "/shirt.jpg", category: "ACCESSORIES" },
  ];
  return (
    <div className="mx-4 lg:mx-6 2xl:mx-8">
      <div>
        <fieldset className="border-t-2 border-primary  text-center mt-15">
          <legend className="px-8 text-center mt-10 text-2xl 2xl:text-4xl font-bold text-primary">
            TOP CATEGORY
          </legend>
        </fieldset>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  justify-items-center items-center mt-10 gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative w-full h-auto overflow-hidden group cursor-pointer">
              <img
                src={item.img}
                alt="shirt"
                className="w-full h-auto transform duration-500 transition-all ease-in group-hover:scale-105"
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
