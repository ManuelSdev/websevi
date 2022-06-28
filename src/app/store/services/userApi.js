import { baseApi } from "./baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (authId) => `/users/getUser/${authId}`,
            providesTags: ['User'],
        }),
        getUserFavs: builder.query({
            query: (userId) => `/users/getFavorites/${userId}`,
            providesTags: ['Favs'],
        }),
        updateUserData: builder.mutation({
            query: ({ userId, ...data }) => ({
                url: `/users/updateUser/${userId}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['User'],
        }),
        updateUserFav: builder.mutation({
            query: ({ userId, productId }) => ({
                url: `/users/updateFavorites/${userId}/${productId}`,
                method: "PATCH",
            }),
            invalidatesTags: ['User', 'Favs'],
        }),
    }),
})

export const { useGetUserQuery, useGetUserFavsQuery, useUpdateUserDataMutation, useUpdateUserFavMutation } = userApi