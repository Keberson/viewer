import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUzi, IUziPage } from "../interfaces/IQueries";


export const uziApi = createApi({
    reducerPath: 'uziApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://194.226.121.145:8080/api/uzi/uzis/',
        prepareHeaders: (headers) => {
            headers.set(
                'token',
                'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzU5MTgwNDEsIngtdXNlcl9pZCI6IjM4ODQxNmU3LWViMGYtNDJiZS1hNzViLTdkMTNlNzdmOWVmYiJ9.eO2pvSAkuGG5GC9Qfv-WTeq1AtorvVl62zjGg8R9UpS_EdkyCzpyMJfVwQRBnIePQzgjpGg5dzuHKZDWHmfsAjim9sbYuKrpqVprq0ywXpUHXLG91xtKxqjg1_LLjDWvurbHsLkaM4_VcXE5hEU3aBU-pPBUylDAoyH9cgohZJhqaR5YoeVq2bDMBQbNNZrKbBxnDsyT14EPpOIgytT9ZYPfQaU7U3lKVPvTvpCcWP0WLWWa2wO5W2f-_PqvnrOB3LNATxazs3Z5vjg5KPFjAGCTeQUc85m2rgQiAXCDrrIAX5bDV8fD-u0S2wmQwLdWFQ4nbpG42GSHPu3DxLKPYQ'
            )

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getUziIds: builder.query<IUziPage[], string>({
            query: (id) => `${id}/images`,


        }),
        getUziInfo: builder.query<IUzi, string>({
            query: (id) => `${id}/`
        })
    }),
})

export const { useGetUziIdsQuery, useLazyGetUziInfoQuery } = uziApi;
