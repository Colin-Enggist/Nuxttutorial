export const {data, pending, error, refresh} = await useFetch(_URL.people,{
    method: "GET",
})