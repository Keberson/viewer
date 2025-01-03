import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUzi, IUziPage } from "../interfaces/IQueries";


export const uziApi = createApi({
    reducerPath: 'uziApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://194.226.121.145:8080/api/uzi/uzis/',
        prepareHeaders: (headers) => {
            headers.set(
                'token',
                'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzU5NDc1NDIsIngtdXNlcl9pZCI6IjM4ODQxNmU3LWViMGYtNDJiZS1hNzViLTdkMTNlNzdmOWVmYiJ9.HnK46FJfldnUMrbOX-aGYZjS5k_WoNXaJUnCwfN2n_pVWtXie_F1zSCtFbHqd4HR68-5d_cAH_QtOPSuLw6VZxSqwn_udraCU4m38r7VQ1FFVoWX55yC3bkag_xHMv_mp_Y7_53XKTqKELpvE1bPEMl5kPucuAMdlEef6f48t-WXTQqjcxLvla48D1M1_ZEZ8HIubjNbMXjtpvjFCKLalHeLqc2gLKVVQ1FTVe_7d5LQDW-XolIcl9tjUEw7ygbC7OGJaXbuQdWzuI5QthcBqna_sxtmxQqW4B6EjDBdMn6_wvJAbzsMjEmWIf_KKOKCALq5Bj-XK_o1b2qYDmAEig'
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
