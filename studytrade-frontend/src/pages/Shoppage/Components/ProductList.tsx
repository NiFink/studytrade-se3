import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import { Product } from "../../../interfaces/Product";

interface ProductProps {
  products: Product[];
  toggleDetails: () => void;
  isDetailsOpen: boolean;
}

function ProductList({ products, toggleDetails, isDetailsOpen }: ProductProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  {
    /* Handle click event of every Product, set "setSelectedProduct" to the clicked one, opens "Productdetails"*/
  }
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    toggleDetails();
  };

  {
    /* shortened the passing parameters to 20 characters*/
  }
  const truncatedText = (text: string) =>
    text.length > 20 ? text.slice(0, 20) + "..." : text;

  return (
    <div
      data-testid="product-list"
      className="px-4 py-16 sm:px-6 sm:py-24 max-w-full justify-center lg:px-8"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 xl:gap-x-8">
        {/* Lists all fetch Products*/}
        {products.map((product) => (
          <button
            key={product._id}
            onClick={() => handleProductClick(product)}
            className="group relative items-center justify-center overflow-hidden cursor-pointer"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg via-transparent xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.img}
                alt={product.name + " " + product.img}
                className="h-full w-full object-cover object-center group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 inset-0 bg-gradient-to-b from-transparent to-black/30 group-hover:to-black/50 rounded-lg">
                <div className="absolute inset-0 flex flex-col   text-center translate-y-[80%] group-hover:translate-y-[60%] transition-all rounded-lg">
                  <h1 className="mt-3  text-xl font-bold text-white">
                    {truncatedText(product.name)}
                  </h1>
                  <p className="md:mt-3 text-lg font-medium text-white md:hidden group-hover:block">
                    {product.price} ({product.condition})
                  </p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* If any product is selected => opens "ProductDetails and pass selected product*/}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          toggleDetails={toggleDetails}
          isDetailsOpen={isDetailsOpen}
        />
      )}
    </div>
  );
}
export default ProductList;
