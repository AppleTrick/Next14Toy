type Products = {
  id: number;
  name: string;
  category: string;
  img: string;
};

export const RenderProductsByCategory = (category: string, itemId: number, products: Array<Products>) => {
  const filteredProducts = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
  const product = filteredProducts.filter((product) => product.id === itemId)[0];

  if (filteredProducts.length === 0 || !product) {
    return <p className="text-gray-600">No items in this category.</p>;
  }
  return (
    <div className="bg-white rounded shadow-lg p-6" key={product.id}>
      <img src={product.img} alt="Product" className="w-full mb-4 rounded" />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">Product description...</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};
