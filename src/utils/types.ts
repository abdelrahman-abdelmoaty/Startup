export type Testimonial = {
  img: string;
  quote: string;
  name: string;
  title: string;
};

export type Feature = {
  SVGElement: React.ReactNode;
  heading: string;
  paragraph: string;
};

export type PricingPlan = {
  name: string;
  desc: string;
  pricePerMonth: number;
  pricePerYear: number;
  features: number[];
};

export type Blog = {
  title: string;
  desc: string;
  date: number;
  author: string;
  authorTitle: string;
  category: string;
  url: string;
  blogImgUrl: string;
  authorImgUrl: string;
};
