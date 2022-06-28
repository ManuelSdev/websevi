import { baseApi } from "./baseApi";


const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserOrders: builder.query({
            query: (userId) => `/orders/getUserOrders/${userId}`,
            providesTags: ['Orders'],
        }),
        getAllOrders: builder.query({
            query: () => `/orders/getAdminOrders`,
            providesTags: ['Orders'],
        }),
        addOrder: builder.mutation({
            query: (order) => ({
                url: "/orders/createOrder",
                method: "POST",
                /*
                headers: {
                    //'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8"
                },
                */
                body: order
            }),
            invalidatesTags: ['Orders'],
        }),
    }),
})

export const { useGetUserOrdersQuery, useGetAllOrdersQuery, useAddOrderMutation } = orderApi