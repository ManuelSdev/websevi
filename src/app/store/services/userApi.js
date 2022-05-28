import { baseApi } from "./baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (authId) => `/users/getUser/${authId}`,
            providesTags: ['User'],
        }),
        updateUserData: builder.mutation({
            query: ({ userId, ...data }) => ({
                url: `/users/updateUser/${userId}`,
                method: "PATCH",
                /*
                headers: {
                    //'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8"
                },
                */
                body: data
            }),
            invalidatesTags: ['User'],
        }),
        updateUserFav: builder.mutation({
            query: ({ userId, productId }) => ({
                url: `/users/updateFavorites/${userId}/${productId}`,
                method: "PATCH",
                /*
                headers: {
                    //'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8"
                },
                */
                //body: data
            }),
            invalidatesTags: ['User'],
        }),
    }),
})

export const { useGetUserQuery, useUpdateUserDataMutation, useUpdateUserFavMutation } = userApi