"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { v4 } from "uuid";
import FormEntry from "./FormEntry";

export type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      {/* MODAL CONTAINER */}
      <div className="relative top-20 mx-auto p-6 border w-96 shadow-lg rounded-lg bg-white">
        <Header name="Create New Product" />
        <form className="mt-5" action="POST" onSubmit={handleSubmit}>
          {/* PRODUCT NAME */}
          <FormEntry
            htmlFor="productName"
            label="Product Name"
            type="text"
            name="name"
            placeholder="Name"
            handleChange={handleChange}
            value={formData.name}
          />

          {/* PRICE */}
          <FormEntry
            htmlFor="productPrice"
            label="Price"
            type="number"
            name="price"
            placeholder="Price"
            handleChange={handleChange}
            value={formData.price}
          />

          {/* STOCK QUANTITY */}
          <FormEntry
            htmlFor="stockQuantity"
            label="Stock Quantity"
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            handleChange={handleChange}
            value={formData.stockQuantity}
          />

          {/* RATING */}
          <FormEntry
            htmlFor="rating"
            label="Rating"
            type="number"
            name="rating"
            placeholder="Rating"
            handleChange={handleChange}
            value={formData.rating}
          />

          {/* CREATE ACTION */}
          <div className="pt-10 flex justify-between">
            <Button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-700"
            >
              Create
            </Button>
            <Button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white hover:bg-gray-700"
            >
              Cancel
            </Button>
          </div>

          {/* <label htmlFor="productName" className={labelStyles}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            className={inputStyles}
          /> */}
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
