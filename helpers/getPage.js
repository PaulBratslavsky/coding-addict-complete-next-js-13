import qs from "qs";


const QUERY = (slug) =>
qs.stringify({
  populate: {
    Blocks: {
      populate: ["Link", "image"],
    },
  },
  filters: { slug: slug },
});


export async function getPage(page) {
  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://coding-addict-strapi.onrender.com/api/pages";
  try {
    const res = await fetch(BASE_URL + "?" + QUERY(page));
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return { data: null };
  }
}