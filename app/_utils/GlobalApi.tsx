import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY!;

const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
});

const getCategory = () => axiosClient.get("categories?populate=*");
const getDoctors = () => axiosClient.get("doctors?populate=*");

const getDoctorByCategory = (category: string) =>
    axiosClient.get(
        "/doctors?filters[categories][Name][$in]=" + category + "&populate=*"
    );

export default { getCategory, getDoctors, getDoctorByCategory };
