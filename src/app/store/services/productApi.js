import { objectToFormData } from "../../../lib/utils/converters";
import { baseApi } from "./baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (product) => ({
                url: "/products/createProduct",
                method: "POST",
                body: objectToFormData(product)
            })
        }),
    }),
})

export const { useAddProductMutation } = productApi