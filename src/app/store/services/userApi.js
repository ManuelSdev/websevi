import { baseApi } from "./baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (authId) => `/users/getUser/${authId}`,
        }),
    }),
})

export const { useGetUserQuery } = userApi