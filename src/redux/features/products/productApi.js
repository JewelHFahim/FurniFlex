import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => `/products`,
      providesTags: ["furni-flex"],
    }),

    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["furni-flex"],
    }),

  }),
  overrideExisting: false,
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productApi;
export default productApi;
