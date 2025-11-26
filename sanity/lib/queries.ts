import { defineQuery } from "next-sanity";

export const EVENTS_QUERY = defineQuery(`*[_type == "event"] | order(date asc) {
  _id,
  title,
  slug,
  date,
  location,
  price,
  "imageUrl": collageLayers[0].image.asset->url,
  tags
}`);

export const EVENT_BY_SLUG_QUERY = defineQuery(`*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  date,
  location,
  price,
  shortDesc,
  longDesc,
  dressCode,
  whatToBring,
  collageLayers,
  galleryImages,
  tags
}`);
