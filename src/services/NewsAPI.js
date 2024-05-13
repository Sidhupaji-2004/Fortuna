import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const newsApiHeaders = {
        'X-RapidAPI-Key': 'c48643b35fmsh0b3cbd08e53bdcep111e91jsn3395338daf54',
        'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';
const createRequest = (url) => ({
    url, headers : newsApiHeaders
}); 

export const newsApi = createApi({
    reducerPath: "newsApi", 
    baseQuery: fetchBaseQuery({baseUrl}), 
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => createRequest('/v1/coindesk')
        })
    })
})


export const {
    useGetNewsQuery,
} = newsApi;