"use client";

import { ProductList } from "@/app/ui/ProductList";
import { RenderProductsByCategory } from "./RenderProductsByCategory";

type ShopPageProps = {
  params: {
    slug: string[];
  };
};

const products = [
  {
    id: 1,
    name: "T-Shirt fabric",
    category: "T-Shirts",
    img: "https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 2,
    name: "T-Shirt non-fabric",
    category: "T-Shirts",
    img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 3,
    name: "cap",
    category: "Hats",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 4,
    name: "Car SUV",
    category: "Cars",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 5,
    name: "Car PORSCHE",
    category: "Cars",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 6,
    name: "Shoes Canvas",
    category: "Shoes",
    img: "https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 7,
    name: "Shoes  Nike",
    category: "Shoes",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
  },
];

const ShopPage = ({ params }: ShopPageProps) => {
  const category = params.slug?.[0] ?? null;
  const itemId = params.slug?.[1] ?? 0;

  return (
    <div className="bg-gray-100 text-black">
      <h1 className="text-4xl font-semibold mb-6">Welcome to the Dante Shopping Mall</h1>
      {category ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
          <h2 className="text-2xl font-semibold mb-4">{category.toUpperCase()}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 md:w-2/3">{RenderProductsByCategory(category, Number(itemId), products)}</div>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default ShopPage;
