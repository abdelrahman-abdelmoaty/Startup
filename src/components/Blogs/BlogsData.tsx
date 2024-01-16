import { Blog } from "@/utils/types";
import blogImg1 from "@components/Blogs/imgs/blog-01.webp";
import blogImg2 from "@components/Blogs/imgs/blog-02.webp";
import blogImg3 from "@components/Blogs/imgs/blog-03.webp";
import authorImg1 from "@components/Blogs/imgs/auth-01.webp";
import authorImg2 from "@components/Blogs/imgs/auth-02.webp";
import authorImg3 from "@components/Blogs/imgs/auth-03.webp";

export const BLOGS: Blog[] = [
  {
    title: "Best UI components for modern websites",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    date: 2025,
    author: "Samuyl Joshi",
    authorTitle: "Graphic Designer",
    category: "Creative",
    url: "/",
    blogImgUrl: blogImg1.src,
    authorImgUrl: authorImg1.src,
  },
  {
    title: "9 simple ways to improve your design skills",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    date: 2025,
    author: "Musharof Chy",
    authorTitle: "Content Writer",
    category: "Computer",
    url: "/",
    blogImgUrl: blogImg2.src,
    authorImgUrl: authorImg2.src,
  },
  {
    title: "Tips to quickly improve your coding speed.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    date: 2025,
    author: "Lethium Deo",
    authorTitle: "Graphic Designer",
    category: "Design",
    url: "/",
    blogImgUrl: blogImg3.src,
    authorImgUrl: authorImg3.src,
  },
];
