"use client";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const router = useRouter(); // ✅ Use Next.js router for redirection

  // Handle Place Order Click
  const handlePlaceOrder = () => {
    router.push("/payment"); // ✅ Navigate to the Payment Page
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-6">
      {/* Title */}
      <h2 className="text-black text-xl font-semibold mb-4">Order Summary</h2>

      {/* Product List */}
      <div className="space-y-3">
        {/* Product 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/3 4.png" // Replace with actual image path
              alt="Product 1"
              className="w-12 h-12 object-cover rounded-md"
            />
            <span className="text-black">Product Name x5</span>
          </div>
          <span className="text-black font-semibold">$70.00</span>
        </div>

        {/* Product 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/5 4.png" // Replace with actual image path
              alt="Product 2"
              className="w-12 h-12 object-cover rounded-md"
            />
            <span className="text-black">Product Name x1</span>
          </div>
          <span className="text-black font-semibold">$14.00</span>
        </div>
      </div>

      {/* Line Separator */}
      <hr className="my-3" />

      {/* Pricing Summary */}
      <div className="text-black flex justify-between">
        <span>Subtotal:</span>
        <span className="text-black font-semibold">$84.00</span>
      </div>
      <div className="text-black flex justify-between">
        <span>Shipping:</span>
        <span className="font-semibold text-green-600">Free</span>
      </div>

      {/* Line Separator */}
      <hr className="my-3" />

      {/* Total Price */}
      <div className="text-black flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>$84.00</span>
      </div>

      {/* Place Order Button */}
      <button
        className="mt-6 w-full bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-all"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
