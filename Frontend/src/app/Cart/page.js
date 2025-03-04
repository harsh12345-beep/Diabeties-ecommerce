"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product Name 1",
      price: 14.0,
      quantity: 5,
      image: "/stripProduct3.jpg",
    },
    {
      id: 2,
      name: "Product Name 2",
      price: 14.0,
      quantity: 5,
      image: "/stripProduct5.jpg",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const Router = useRouter();

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, Math.min(99, item.quantity + delta)),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon code");
    }
  };

  const handleCheckout = () => {
    Router.push("/billing");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal * (1 - discount);

  return (
    <div className="max-w-7xl mx-auto p-6 pt-[140px]">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        My Shopping Cart
      </h1>

      {/* Cart Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Cart Items */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-1 text-black">
          {cartItems.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-600">Your cart is empty.</p>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-full mt-4"
                onClick={() => {
                  Router.push("/Shop");
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Desktop Table */}
              <table className="hidden md:table w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-3">PRODUCT</th>
                    <th className="p-3">PRICE</th>
                    <th className="p-3">QUANTITY</th>
                    <th className="p-3">SUBTOTAL</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3 flex items-center gap-3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded"
                        />
                        {item.name}
                      </td>
                      <td className="p-3">${item.price.toFixed(2)}</td>
                      <td className="p-3">
                        <div className="flex w-2/3 items-center border rounded-full px-2 py-1">
                          <button
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2"
                          >
                            -
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-3 font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="p-3 text-center">
                        <button
                          aria-label="Remove item"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 text-lg"
                        >
                          <FaTimes />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Stacked Layout */}
              <div className="md:hidden space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="border-b pb-4 relative">
                    {/* Cross Icon at Top-Right Corner */}
                    <button
                      aria-label="Remove item"
                      onClick={() => removeItem(item.id)}
                      className="absolute top-0 right-0 text-gray-400 text-lg"
                    >
                      <FaTimes />
                    </button>

                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-600">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded-full px-2 py-1">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2"
                        >
                          -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <Link href="/Shop">
              <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full hover:opacity-90">
                Return to Shop
              </button>
            </Link>
            <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full hover:opacity-90">
              Update Cart
            </button>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="bg-white p-4 rounded-lg shadow-md w-full lg:w-80 text-black">
          <h3 className="text-lg font-semibold mb-3">Cart Total</h3>
          <div className="flex justify-between border-b pb-2">
            <span>Subtotal:</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Shipping:</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Discount:</span>
            <span className="text-red-600">
              -${(subtotal * discount).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between font-bold text-lg py-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-green-500 text-white w-full py-3 rounded-full mt-3 hover:opacity-90"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Coupon Section */}
      <div className="bg-white w-full lg:w-2/5 mt-4 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-3 text-black">Coupon Code</h3>
        <div className="relative w-full">
          <label htmlFor="coupon-code" className="sr-only">
            Enter coupon code
          </label>
          <input
            id="coupon-code"
            type="text"
            placeholder="Enter code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="w-full p-3 border rounded-full pr-20 md:pr-16"
          />
          <button
            onClick={applyCoupon}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-8 md:px-6 py-2 rounded-full hover:opacity-90"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
