import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://furni-flex-server-six.vercel.app/api" }),
  tagTypes: ["furni-flex"],
  endpoints: () => ({}),
});

export default apiSlice;
