// create boilerplate for api calls

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DashboardMetrics, NewProduct, Product } from "../types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics", "Products"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMetrics"],
    }),
    getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: "/products",
        params: search ? { search } : {}
      }),
      providesTags: ["Products"],
    }),
    createProduct: build.mutation<Product, NewProduct>({
      query: (newProduct : NewProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct
      }),
      invalidatesTags: ["Products"]
    })
    
  }),
});

export const { useGetDashboardMetricsQuery, useGetProductsQuery, useCreateProductMutation } = api;
