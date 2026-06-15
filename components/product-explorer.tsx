"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { ProductCard } from "@/components/product-card";
import { productCategories, products } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductExplorer() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="flex gap-3 overflow-x-auto pb-3">
        {productCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "whitespace-nowrap rounded-full border px-5 py-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
              activeCategory === category
                ? "border-amber-400 bg-slate-950 text-white shadow-industrial"
                : "border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:text-slate-950"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, delay: index * 0.025 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
