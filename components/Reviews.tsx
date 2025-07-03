"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./ui/Icons";

const colors = [
  {
    name: "Dark Blue",
    hex: "#233D4D",
    image: "/Products/Tops/TopDarkBlue.png",
  },
  {
    name: "Light Blue",
    hex: "#A2D2FF",
    image: "/Products/Tops/TopLightBlue.png",
  },
  {
    name: "Blue Green",
    hex: "#007C91",
    image: "/Products/Tops/TopBlueGreen.png",
  },
];

const sizes = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

export default function PurchaseScreen() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Our{" "}
          <span className="text-blue-900 relative px-2 inline-block">
            Products
            <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-blue-800" />
          </span>
        </h2>
      </div>

      {/* Product Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <motion.img
          key={selectedColor.image}
          src={selectedColor.image}
          alt={selectedColor.name}
          className="w-full max-h-[600px] object-contain rounded-3xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Info */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Unisex 3-Pocket Scrub Top</h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Experience comfort and style with our ultra-soft, premium quality scrub top.
            Designed for long shifts and maximum functionality.
          </p>

          {/* Color */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-gray-700 font-semibold">Color:</span>
            <div className="flex gap-3">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor.name === color.name ? "border-gray-900" : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-gray-700 font-semibold">Size:</span>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <motion.button
                  key={size}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-blue-900 text-white"
                      : "bg-white border border-gray-300 hover:bg-blue-50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </motion.button>
              ))}
              
            </div>
            
          </div>
  <div className="pt-4">
            <button
              onClick={() => setShowChart(!showChart)}
              className="flex items-center justify-between w-full px-4 py-3 bg-white border rounded-2xl shadow hover:shadow-md transition-all"
            >
              <span className="text-sm font-semibold text-gray-800">View Sizing Chart</span>
              <motion.svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  showChart ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {showChart && (
                <motion.div
                  className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <table className="w-full text-sm sm:text-base text-left border-collapse">
                    <thead>
                      <tr className="text-gray-700 border-b">
                        <th className="py-2 px-3 font-semibold">Size</th>
                        <th className="py-2 px-3 font-semibold">Chest (in)</th>
                        <th className="py-2 px-3 font-semibold">Length (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["XXS", "35-36", "26"],
                        ["XS", "37-39", "26"],
                        ["S", "40-41", "26.5"],
                        ["M", "41-42", "26.5"],
                        ["L", "43-44", "27"],
                        ["XL", "44-45", "27.5"],
                        ["2XL", "50-52", "28"],
                        ["3XL", "52.5-53", "28.5"],
                        ["4XL", "53-54", "29"],
                      ].map(([size, chest, length]) => (
                        <tr key={size} className="border-t hover:bg-gray-50 transition-colors">
                          <td className="py-2 px-3 font-medium text-gray-800">{size}</td>
                          <td className="py-2 px-3 text-gray-700">{chest}</td>
                          <td className="py-2 px-3 text-gray-700">{length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Price */}
          <div className="text-2xl font-bold text-blue-950">$12.50</div>

          {/* Add to Cart */}
          <motion.button
            className="w-full py-3 rounded-2xl bg-blue-900 text-white text-lg font-semibold shadow hover:shadow-lg transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Add to Cart
          </motion.button>

          {/* Warning */}
   

          {/* Expandable Sizing Chart */}
        
        </div>
      </div>
    </div>
  );
}
