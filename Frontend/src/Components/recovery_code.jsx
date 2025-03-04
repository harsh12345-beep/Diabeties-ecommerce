// // "use client";
// // import Link from "next/link";
// // import { useState } from "react";
// // import { Menu, X } from "lucide-react";

// // function Header() {
// //   const [showFilter, setShowFilter] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <>
// //       {/* Top Section */}
// //       <div className="bg-white text-black flex justify-between items-center px-6 py-0.5 border-b border-gray-300 fixed top-0 w-full z-50">
// //         {/* Logo / Company Name */}
// //         <div className="text-xl font-bold">Logo</div>

// //         {/* Wishlist & Cart */}
// //         <div className="flex items-center space-x-4">
// //           {/* Wishlist Button */}
// //           <button className="px-3 border-r-2">
// //             <img src="/Icons & Icon-gifs/wishlist.png" className="w-7 h-7" />
// //           </button>

// //           {/* Cart Section */}
// //           <div className="flex items-center space-x-4 relative">
// //             <button className="relative">
// //               {/* Cart Icon Container */}
// //               <div className="w-10 h-10 flex items-center justify-center">
// //                 {/* Cart Icon with Hover Effect */}
// //                 <img
// //                   src="/Icons & Icon-gifs/cart-static.png"
// //                   className="w-8 h-8"
// //                   alt="Cart GIF"
// //                   onMouseEnter={(e) =>
// //                     (e.currentTarget.src = "/Icons & Icon-gifs/cart.gif")
// //                   }
// //                   onMouseLeave={(e) =>
// //                     (e.currentTarget.src = "/Icons & Icon-gifs/cart-static.png")
// //                   }
// //                 />
// //               </div>

// //               {/* Cart Count Indicator */}
// //               <span className="absolute -top-[-2px] -right-2.5 bg-[#6EAC89] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
// //                 3 {/* Replace this with dynamic cart count */}
// //               </span>
// //             </button>
// //             {/* Cart Summary (Now Inside Flex, Not Absolute) */}
// //             <div className="relative text-black rounded-md min-w-[90px] max-w-[110px]">
// //               <p className="text-sm text-gray-500">Shopping Cart:</p>
// //               <p className="text-sm"> $250</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Navbar */}
// //       <nav className="bg-black text-white py-2 px-12 fixed top-[42px] w-full z-50">
// //         <div className="container mx-auto flex items-center justify-between">
// //           {/* Left Section: Home and Navigation Links (Hidden on Small Screens) */}
// //           <div className="hidden md:flex space-x-6">
// //             <Link href="/Home">
// //               <img src="/Icons & Icon-gifs/home-icon.svg" className="w-5 h-5" />
// //             </Link>
// //             <Link href="/Product">Product</Link>
// //             <Link href="/Collection">Collection</Link>
// //             <Link href="/Shop">Shop</Link>
// //           </div>

// //           {/* Middle Section: Search Bar */}
// //           <div className="relative w-1/3 max-w-md hidden md:flex justify-center">
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               className="w-full py-2 px-4 rounded-[2rem] text-black outline-none"
// //             />
// //             <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-black bg-[#6EAC89] p-2.5 rounded-[50%]">
// //               <img
// //                 src="/Icons & Icon-gifs/magnifier-static.png"
// //                 className="w-5 h-5 bg-transparent"
// //                 alt="Search"
// //                 onMouseEnter={(e) =>
// //                   (e.currentTarget.src = "/Icons & Icon-gifs/magnifier.gif")
// //                 }
// //                 onMouseLeave={(e) =>
// //                   (e.currentTarget.src =
// //                     "/Icons & Icon-gifs/magnifier-static.png")
// //                 }
// //               />
// //             </button>
// //           </div>

// //           {/* Right Section: Account (Only on Desktop) */}
// //           <div className="hidden md:flex items-center space-x-4">
// //             <div className="text-center">
// //               <p>Account</p>
// //               <div className="flex space-x-2">
// //                 <Link
// //                   href="/Login"
// //                   className="text-sm text-gray-400 hover:text-white"
// //                 >
// //                   Login
// //                 </Link>
// //                 <span className="text-sm text-gray-400">/</span>
// //                 <Link
// //                   href="/Register"
// //                   className="text-sm text-gray-400 hover:text-white"
// //                 >
// //                   Register
// //                 </Link>
// //               </div>
// //             </div>

// //             <img
// //               src="/image.png"
// //               alt="Profile"
// //               className="w-8 h-8 rounded-full cursor-pointer"
// //             />
// //           </div>

// //           {/* Mobile View: Menu Button on Left, Search on Right */}
// //           <div className="flex w-full justify-between items-center md:hidden">
// //             <button
// //               onClick={() => setMenuOpen(!menuOpen)}
// //               className="text-white"
// //             >
// //               <Menu className="w-6 h-6" />
// //             </button>
// //             <div className="relative w-2/3 max-w-sm flex justify-center">
// //               <input
// //                 type="text"
// //                 placeholder="Search..."
// //                 className="w-full py-2 px-4 rounded-[2rem] text-black outline-none"
// //               />
// //               <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-black bg-[#6EAC89] p-2.5 rounded-[50%]">
// //                 <img
// //                   src="/Icons & Icon-gifs/magnifier-static.png"
// //                   className="w-5 h-5 bg-transparent"
// //                   alt="Search"
// //                   onMouseEnter={(e) =>
// //                     (e.currentTarget.src = "/Icons & Icon-gifs/magnifier.gif")
// //                   }
// //                   onMouseLeave={(e) =>
// //                     (e.currentTarget.src =
// //                       "/Icons & Icon-gifs/magnifier-static.png")
// //                   }
// //                 />
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Responsive Mobile Menu (Only on Mobile) */}
// //         {menuOpen && (
// //           <div className="fixed top-0 left-0 w-[60%] h-full bg-black text-white flex flex-col p-4 space-y-4 md:hidden">
// //             <button onClick={() => setMenuOpen(false)} className="self-end">
// //               <X className="w-6 h-6" />
// //             </button>
// //             <div className="flex flex-col space-y-4 flex-grow text-center">
// //               <Link href="/Home" onClick={() => setMenuOpen(false)}>
// //                 Home
// //               </Link>
// //               <Link href="/Product" onClick={() => setMenuOpen(false)}>
// //                 Product
// //               </Link>
// //               <Link href="/Collection" onClick={() => setMenuOpen(false)}>
// //                 Collection
// //               </Link>
// //               <Link href="/Shop" onClick={() => setMenuOpen(false)}>
// //                 Shop
// //               </Link>
// //             </div>
// //             <div className="mt-auto">
// //               <div className=" text-center">
// //                 <div className="flex flex-row m-2 text-center justify-center">
// //                   <img
// //                     src="/image.png"
// //                     alt="Profile"
// //                     className="w-8 h-8 rounded-full mx-2"
// //                   />
// //                   <p className="p-0">Account</p>
// //                 </div>
// //                 <Link
// //                   href="/Login"
// //                   className="text-sm text-gray-400"
// //                   onClick={() => setMenuOpen(false)}
// //                 >
// //                   Login / Register
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </nav>
// //     </>
// //   );
// // }

// // export default Header;

// const [dropdownOpen, setDropdownOpen] = useState(false);
// const dropdownRef = useRef(null);

// useEffect(() => {
//   function handleClickOutside(event) {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   }
//   document.addEventListener("mousedown", handleClickOutside);
//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, []);

// <div className="relative" ref={dropdownRef}>
//   <button className="relative" onMouseEnter={() => setDropdownOpen(true)}>
//     Shop
//   </button>
//   {dropdownOpen && (
//     <div
//       className="absolute top-full left-0 w-40 bg-white text-black shadow-md rounded-md border border-gray-300"
//       onMouseLeave={() => setDropdownOpen(false)}
//     >
//       {Array.from({ length: 5 }, (_, i) => (
//         <Link
//           key={i}
//           href={`/shop${i + 1}`}
//           className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
//         >
//           Shop {i + 1}
//         </Link>
//       ))}
//     </div>
//   )}
// </div>;

// <div className="relative" ref={dropdownRef}>
//   <button className="relative" onMouseEnter={() => setDropdownOpen(true)}>
//     Shop
//   </button>
//   {dropdownOpen && (
//     <div
//       className="absolute top-full left-0 w-40 bg-white text-black shadow-md rounded-md border border-gray-300"
//       onMouseLeave={() => setDropdownOpen(false)}
//     >
//       {shopLinks.map((shop, index) => (
//         <Link
//           key={index}
//           href={shop.link}
//           className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
//         >
//           {shop.name}
//         </Link>
//       ))}
//     </div>
//   )}
// </div>;

// // categories code

// \"use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaChevronDown, FaSearch } from "react-icons/fa";

// const categories = [
//   "All Categories",
//   "Low GI Foods",
//   "Sugar-Free Snacks",
//   "Diabetic-Friendly Drinks",
//   "Keto & Low-Carb",
//   "Healthy Grains",
//   "Supplements",
//   "Organic Vegetables",
//   "Protein Bars",
//   "Dairy Alternatives",
// ];

// const productsList = {
//   "Low GI Foods": [
//     {
//       id: 1,
//       name: "Quinoa",
//       image: "/stripProduct.jpg",
//       price: 12.99,
//       rating: 4.8,
//       sale: true,
//     },
//     {
//       id: 2,
//       name: "Oats",
//       image: "/category1product2.jpg",
//       price: 7.99,
//       rating: 4.7,
//       sale: false,
//     },
//     {
//       id: 3,
//       name: "Brown Rice",
//       image: "/stripProduct5.jpg",
//       price: 9.49,
//       rating: 4.5,
//       sale: true,
//     },
//   ],
//   "Sugar-Free Snacks": [
//     {
//       id: 4,
//       name: "Almond Cookies",
//       image: "/stripProduct22.jpg",
//       price: 5.99,
//       rating: 4.6,
//       sale: true,
//     },
//     {
//       id: 5,
//       name: "Dark Chocolate",
//       image: "/stripProduct10.jpg",
//       price: 9.99,
//       rating: 4.5,
//       sale: false,
//     },
//     {
//       id: 6,
//       name: "Protein Biscuits",
//       image: "/stripProduct9.jpg",
//       price: 6.49,
//       rating: 4.4,
//       sale: true,
//     },
//   ],
//   "Diabetic-Friendly Drinks": [
//     {
//       id: 7,
//       name: "Green Tea",
//       image: "/stripProduct8.webp",
//       price: 6.49,
//       rating: 4.9,
//       sale: true,
//     },
//     {
//       id: 8,
//       name: "Sugar-Free Juice",
//       image: "/stripProduct7.jpg",
//       price: 4.99,
//       rating: 4.3,
//       sale: false,
//     },
//     {
//       id: 9,
//       name: "Herbal Detox Tea",
//       image: "/stripProduct6.avif",
//       price: 8.99,
//       rating: 4.7,
//       sale: true,
//     },
//   ],
//   "Organic Vegetables": [
//     {
//       id: 10,
//       name: "Broccoli",
//       image: "/stripProduct5.jpg",
//       price: 5.99,
//       rating: 4.8,
//       sale: false,
//     },
//     {
//       id: 11,
//       name: "Carrots",
//       image: "/stripProduct4.webp",
//       price: 4.99,
//       rating: 4.6,
//       sale: true,
//     },
//     {
//       id: 12,
//       name: "Spinach",
//       image: "/stripProduct3.jpg",
//       price: 3.99,
//       rating: 4.9,
//       sale: false,
//     },
//   ],

//   "Healthy Grains": [
//     {
//       id: 13,
//       name: "Barley",
//       image: "/stripProduct2.webp",
//       price: 12.99,
//       rating: 4.8,
//       sale: true,
//     },
//     {
//       id: 14,
//       name: "Oats",
//       image: "/stripProduct.jpg",
//       price: 7.99,
//       rating: 4.7,
//       sale: false,
//     },
//     {
//       id: 15,
//       name: "Brown Rice",
//       image: "/10 7.png",
//       price: 9.49,
//       rating: 4.5,
//       sale: true,
//     },
//   ],
//   Supplements: [
//     {
//       id: 16,
//       name: "Multivitamin Capsules",
//       image: "/10 1.png",
//       price: 19.99,
//       rating: 4.9,
//       sale: true,
//     },
//     {
//       id: 17,
//       name: "Omega-3 Fish Oil",
//       image: "/6 11.png",
//       price: 14.99,
//       rating: 4.5,
//       sale: false,
//     },
//     {
//       id: 18,
//       name: "Probiotics",
//       image: "/5 4.png",
//       price: 16.99,
//       rating: 4.8,
//       sale: true,
//     },
//     {
//       id: 19,
//       name: "Vitamin D3",
//       image: "/3 4.png",
//       price: 12.49,
//       rating: 4.7,
//       sale: false,
//     },
//     {
//       id: 20,
//       name: "Iron Tablets",
//       image: "/4 5.png",
//       price: 9.99,
//       rating: 4.6,
//       sale: true,
//     },
//   ],
// };

// // **Combine all products into "All Categories"**
// const allProducts = Object.values(productsList).flat();
// productsList["All Categories"] = allProducts;

// export default function CategoryPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All Categories");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   // **Fix: Ensure filteredProducts is always an array**
//   const filteredProducts = (
//     selectedCategory === "All Categories"
//       ? allProducts
//       : productsList[selectedCategory] ?? []
//   ).filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.price.toString().includes(searchTerm)
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6 pt-[140px] text-black">
//       {/* Sidebar for Categories - Scrollable on Desktop */}
//       <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg min-h-fit md:h-screen md:sticky md:top-20 overflow-y-auto">
//         {/* Dropdown for mobile */}
//         <div
//           className="md:hidden flex justify-between items-center bg-white p-3 rounded-md cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span className="font-medium">{selectedCategory}</span>
//           <FaChevronDown />
//         </div>
//         {/* Sidebar Menu */}
//         <div className={`mt-4 md:block ${menuOpen ? "block" : "hidden"}`}>
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`block w-full text-left px-4 py-2 rounded-md font-medium mb-2 transition ${
//                 selectedCategory === category
//                   ? "bg-green-500 text-white"
//                   : "bg-white text-gray-600 border"
//               }`}
//               onClick={() => {
//                 setSelectedCategory(category);
//                 setMenuOpen(false);
//               }}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Product Section */}
//       <div className="w-full md:w-3/4">
//         <h1 className="text-3xl font-bold text-center mb-6">
//           {selectedCategory}
//         </h1>

//         {/* Search Bar */}
//         <div className="relative w-full mb-4">
//           <input
//             type="text"
//             placeholder="Search products by name or price..."
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <FaSearch className="absolute top-4 right-4 text-gray-500" />
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((item) => (
//               <div
//                 key={item.id}
//                 className="border p-4 bg-white rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg"
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={200}
//                   height={200}
//                   className="w-full h-40 object-cover rounded-md"
//                 />
//                 <h3 className="font-bold text-lg mt-2">{item.name}</h3>
//                 <p className="mt-1 text-lg font-bold text-green-600">
//                   ${item.price.toFixed(2)}
//                 </p>
//                 <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded-md hover:bg-green-700">
//                   Add to Cart
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               No products found.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
