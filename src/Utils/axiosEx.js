const { default: axios } = require("axios");

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiurl = "http://localhost:1337/api";
const axiosEx = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${apikey}`,
  },
});

const GetLatestProducts = () => axiosEx.get("/prodacts?populate=*");
const GetProductsById = (productId) => axiosEx.get(`/prodacts/${productId}?populate=*`);

export { axiosEx, GetLatestProducts , GetProductsById};
