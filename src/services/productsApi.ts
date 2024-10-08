import { baseApi } from "./baseApi";
import { Product } from "./types";

export const productsApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query<Product[], void>({
            query: () => ({
                method: 'GET',
                url: '/products'
            })
        })
    })
})

export const { useGetProductsQuery } = productsApi