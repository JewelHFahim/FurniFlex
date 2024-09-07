import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
      providesTags: ["furni-flex"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productApi;
export default productApi;
