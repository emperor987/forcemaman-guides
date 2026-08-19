/* WebP imports (primary — 63% smaller than JPG) */
import guideLifestyleWebp from "@/assets/ref/webp/guide-lifestyle.webp";
import guideEditorialWebp from "@/assets/ref/webp/guide-editorial.webp";
import founderWebp from "@/assets/ref/webp/founder.webp";
import blogFeaturedWebp from "@/assets/ref/webp/blog-featured.webp";
import blog1Webp from "@/assets/ref/webp/blog-1.webp";
import blog2Webp from "@/assets/ref/webp/blog-2.webp";
import blog3Webp from "@/assets/ref/webp/blog-3.webp";
import blog4Webp from "@/assets/ref/webp/blog-4.webp";
import blog5Webp from "@/assets/ref/webp/blog-5.webp";
import blog6Webp from "@/assets/ref/webp/blog-6.webp";
import blog5ProduitsWebp from "@/assets/ref/webp/blog-5-produits.webp";
import chariotWebp from "@/assets/ref/webp/chariot.webp";
import carnetWebp from "@/assets/ref/webp/carnet.webp";
import organiseurWebp from "@/assets/ref/webp/organiseur.webp";

/* JPG fallbacks (for older browsers) */
import guideLifestyleJpg from "@/assets/ref/guide-lifestyle.jpg";
import guideEditorialJpg from "@/assets/ref/guide-editorial.jpg";
import founderJpg from "@/assets/ref/founder.jpg";
import blogFeaturedJpg from "@/assets/ref/blog-featured.jpg";
import blog1Jpg from "@/assets/ref/blog-1.jpg";
import blog2Jpg from "@/assets/ref/blog-2.jpg";
import blog3Jpg from "@/assets/ref/blog-3.jpg";
import blog4Jpg from "@/assets/ref/blog-4.jpg";
import blog5Jpg from "@/assets/ref/blog-5.jpg";
import blog6Jpg from "@/assets/ref/blog-6.jpg";
import blog5ProduitsJpg from "@/assets/ref/blog-5-produits.jpg";
import chariotJpg from "@/assets/ref/chariot.jpg";
import carnetJpg from "@/assets/ref/carnet.jpg";
import organiseurJpg from "@/assets/ref/organiseur.jpg";

export interface ImageSrc {
  webp: string;
  jpg: string;
}

function img(webp: string, jpg: string): ImageSrc {
  return { webp, jpg };
}

/** Returns the primary src (WebP) for simple <img src={...}> usage */
export function src(i: ImageSrc): string {
  return i.webp;
}

export const images = {
  guideLifestyle: img(guideLifestyleWebp, guideLifestyleJpg),
  guideEditorial: img(guideEditorialWebp, guideEditorialJpg),
  founder: img(founderWebp, founderJpg),
  blogFeatured: img(blogFeaturedWebp, blogFeaturedJpg),
  blog1: img(blog1Webp, blog1Jpg),
  blog2: img(blog2Webp, blog2Jpg),
  blog3: img(blog3Webp, blog3Jpg),
  blog4: img(blog4Webp, blog4Jpg),
  blog5: img(blog5Webp, blog5Jpg),
  blog6: img(blog6Webp, blog6Jpg),
  blog5Produits: img(blog5ProduitsWebp, blog5ProduitsJpg),
  chariot: img(chariotWebp, chariotJpg),
  carnet: img(carnetWebp, carnetJpg),
  organiseur: img(organiseurWebp, organiseurJpg),
};
