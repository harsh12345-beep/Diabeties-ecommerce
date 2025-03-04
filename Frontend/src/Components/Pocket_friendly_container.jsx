"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Special Deal",
    image: "/3 4.png",
    price: "$59.99",
    oldPrice: "$79.99",
    feedback: "501",
    sale: "10% Off",
    bestSale: true,
  },
  {
    id: 2,
    name: "Organic Apple",
    image: "/4 5.png",
    price: "$29.99",
    oldPrice: "$39.99",
    sale: "20% Off",
    feedback: "320",
  },
  {
    id: 3,
    name: "Fresh Banana",
    image: "/5 4.png",
    price: "$19.99",
    oldPrice: "$25.99",
    sale: "40% Off",
    feedback: "210",
  },
  {
    id: 4,
    name: "Green Broccoli",
    image: "/6 11.png",
    price: "$15.99",
    oldPrice: "$20.99",
    sale: "10% Off",
    feedback: "180",
  },
  {
    id: 5,
    name: "Carrot Crunch",
    image: "/10 1.png",
    price: "$12.99",
    oldPrice: "$18.99",
    sale: "29% Off",
    feedback: "150",
  },
  {
    id: 6,
    name: "Special Deal",
    image: "/10 2.png",
    price: "$59.99",
    oldPrice: "$79.99",
    feedback: "501",
    sale: "10% Off",
    bestSale: true,
  },
  {
    id: 7,
    name: "Organic Apple",
    image: "/10 7.png",
    price: "$29.99",
    oldPrice: "$39.99",
    sale: "22% Off",
    feedback: "320",
  },
  {
    id: 8,
    name: "Fresh Banana",
    image: "/3 4.png",
    price: "$19.99",
    oldPrice: "$25.99",
    sale: "25% Off",
    feedback: "210",
  },
  {
    id: 9,
    name: "Green Broccoli",
    image: "/6 11.png",
    price: "$15.99",
    oldPrice: "$20.99",
    sale: "10% Off",
    feedback: "180",
  },
  {
    id: 10,
    name: "Organic Apple",
    image: "/10 7.png",
    price: "$29.99",
    oldPrice: "$39.99",
    sale: "12% Off",
    feedback: "320",
  },
  {
    id: 11,
    name: "Fresh Banana",
    image: "/3 4.png",
    price: "$19.99",
    oldPrice: "$25.99",
    sale: "20% Off",
    feedback: "210",
  },
  {
    id: 12,
    name: "Green Broccoli",
    image: "/6 11.png",
    price: "$15.99",
    oldPrice: "$20.99",
    sale: "15% Off",
    feedback: "180",
  },
];

function PocketFriendlyContainer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // Offer ends in 3 days
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#F7F7F7] py-10 mx-auto my-[4rem]">
      <div className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg lg:text-[2rem] font-black text-black">
            Pocket Friendly <span className="text-[#2cc16d]">Deals</span>
          </h1>
          <a href="#" className="text-green-600 font-semibold">
            View All →
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:grid-cols-3 grid-cols-2">
          {/* Large Product Card */}
          <div className="col-span-2 row-span-2 bg-white rounded-lg px-8 py-4 border relative flex flex-col items-center text-center transition-all duration-300 hover:scale-101 hover:shadow-lg">
            <div className="absolute top-4 right-4 flex space-x-2">
              <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                10% Off
              </span>
              <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded">
                Best Sale
              </span>
            </div>
            <Link href="/Product_description">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="w-[16rem] h-[16rem] object-cover mb-4"
              />
            </Link>
            <div className="w-full flex justify-center space-x-2 mb-2 relative right-6 mt-2">
              <button className="px-4 py-2 rounded-[50%] bg-[#F2F2F2] w-16 h-16">
                <img
                  src="/Icons & Icon-gifs/wishlist.png"
                  className="w-10 h-10"
                />
              </button>
              <button className="w-[75%] px-4 bg-green-600 text-white rounded-[2rem]">
                Add to Cart
              </button>
            </div>
            <h3 className="text-lg font-bold text-green-800 mt-2">
              {products[0].name}
            </h3>
            <p className="text-xl font-semibold text-green-600 py-2">
              {products[0].price}{" "}
              <span className="text-sm text-gray-500 line-through">
                {products[0].oldPrice}
              </span>
            </p>
            <p className="text-gray-600 flex flex-row items-center">
              <img
                src="/Icons & Icon-gifs/full star.png"
                className="w-[12px] h-[12px]"
              />
              <img
                src="/Icons & Icon-gifs/full star.png"
                className="w-[12px] h-[12px]"
              />
              <img
                src="/Icons & Icon-gifs/full star.png"
                className="w-[12px] h-[12px]"
              />
              <img
                src="/Icons & Icon-gifs/full star.png"
                className="w-[12px] h-[12px]"
              />
              <img
                src="/Icons & Icon-gifs/unfull star.png"
                className="w-[11px] h-[11px]"
              />{" "}
              <span className="px-2">({products[0].feedback} feedback)</span>
            </p>
            <p className="text-red-500 font-semibold mt-2">
              Hurry Up! Offer ends in:
            </p>
            <div className="text-lg font-bold flex justify-center space-x-6 mt-1 text-black">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <span>{value}</span> {/* Time value */}
                  <span className="text-sm text-[#999999] mt-1 uppercase">
                    {unit}
                  </span>{" "}
                  {/* Label with spacing & color */}
                </div>
              ))}
            </div>
          </div>

          {/* Other Product Cards */}
          {products.slice(1).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg py-2 px-2 border flex flex-col items-center text-center justify-center relative transition-all duration-300 hover:scale-101 hover:shadow-lg"
            >
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.sale}
              </div>
              <Link href="/Product_description">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover mb-4 cursor-pointer"
                />
              </Link>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col text-left">
                  <h3 className="text-[10px] font-bold text-[#4D4D4D]">
                    {product.name}
                  </h3>
                  <p className="text-[14px] text-[#1A1A1A]">{product.price}</p>
                  <div className="flex mt-1">
                    <img
                      src="/Icons & Icon-gifs/full star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/Icons & Icon-gifs/full star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/Icons & Icon-gifs/full star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/Icons & Icon-gifs/full star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/Icons & Icon-gifs/unfull star.png"
                      className="w-[11px] h-[11px]"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col space-y-2">
                  <button className="bg-[#6EAC89] text-white py-2 px-4 rounded text-[10px]">
                    Add to Cart
                  </button>
                  <button className="bg-white text-black border border-black py-2 px-4 rounded text-[10px]">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PocketFriendlyContainer;
