import { BASE_API_URL } from '@/constants'
import { UpdateUserSchema } from '@/features/user/schema/update-user-schema';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'users',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_API_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/fetch-user-data',
      providesTags: ["User"]
    }),
    updateUser: builder.mutation({
      query: (user: UpdateUserSchema) => ({
        url: '/update-user-data',
        method: 'put',
        body: user,
      }),
      invalidatesTags: ["User"]
    })
  })
})

export const { 
  useGetUsersQuery,
  useUpdateUserMutation,
} = userApi;