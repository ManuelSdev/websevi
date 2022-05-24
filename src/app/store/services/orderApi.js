import { baseApi } from "./baseApi";


const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
            })
        }),
    }),
})

export const { useAddOrderMutation } = orderApi