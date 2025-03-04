"use client";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Organic Apple",
    price: "$5.99",
    image: "/4 5.png",
    sale: "10% Off",
  },
  {
    id: 2,
    name: "Fresh Banana",
    price: "$3.99",
    image: "/5 4.png",
    sale: "15% Off",
  },
  {
    id: 3,
    name: "Green Broccoli",
    price: "$4.49",
    image: "/6 11.png",
    sale: "5% Off",
  },
  {
    id: 4,
    name: "Carrot Crunch",
    price: "$2.99",
    image: "/10 1.png",
    sale: "20% Off",
  },
  {
    id: 5,
    name: "Juicy Orange",
    price: "$6.99",
    image: "/10 2.png",
    sale: "10% Off",
  },
];

function FeatureProduct() {
  return (
    <section className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg lg:text-[2rem] font-black text-black">
          Featured <span className="text-[#2cc16d]">Prodcuts</span>
        </h1>
        <a href="#" className="text-green-600 font-semibold">
          View All →
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-[5px] p-2 border flex flex-col items-center text-center relative transition-all duration-300 hover:scale-101 hover:shadow-lg"
          >
            {/* Sale Tag */}
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product.sale}
            </div>
            <Link href="/Product_description">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover mb-4 cursor-pointer"
              />
            </Link>

            {/* Product Details */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col text-left">
                <h3 className="text-[12px] font-bold text-[#4D4D4D]">
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
    </section>
  );
}

export default FeatureProduct;
