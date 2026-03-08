import heroBg from "./img/hero-bg.jpg";
import abt from "./img/abt.jpg";
import avatar1 from "./img/avatar1.png";
import avatar2 from "./img/avatar2.png";
import avatar3 from "./img/avatar3.png";
import breadCrumbBg from "./img/breadcrumb-bg.jpg";
import companyLogo1 from "./img/company-logo1.png";
import companyLogo2 from "./img/company-logo2.png";
import companyLogo3 from "./img/company-logo3.png";
import companyLogo4 from "./img/company-logo4.png";
import companyLogo5 from "./img/company-logo5.png";
import pomegranate from "./img/dd.jpg";
import favicon from "./img/favicon.png";
import featureBg from "./img/feature-bg.jpg";
import heroBg2 from "./img/hero-bg-2.jpg";
import heroBg3 from "./img/hero-bg-3.jpg";
import homePageBg from "./img/homepage-bg-pattern.png";
import logo from "./img/logo.png";
import newsBg1 from "./img/news-bg-1.jpg";
import newsBg2 from "./img/news-bg-2.jpg";
import newsBg3 from "./img/news-bg-3.jpg";
import newsBg4 from "./img/news-bg-4.jpg";
import newsBg5 from "./img/news-bg-5.jpg";
import newsBg6 from "./img/news-bg-6.jpg";
import productImg1 from "./img/product-img-1.jpg";
import productImg2 from "./img/product-img-2.jpg";
import productImg3 from "./img/product-img-3.jpg";
import productImg4 from "./img/product-img-4.jpg";
import productImg5 from "./img/product-img-5.jpg";
import productImg6 from "./img/product-img-6.jpg";
import strawberrySmall from "./img/strawberrySmall.jpg";
import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import strawberry from "./img/strawberry.jpg";
import grain_image from "./img/grain_image.png"
import organic_vegitable_image from "./img/organic_vegitable_image.png"
import fresh_fruits_image from "./img/fresh_fruits_image.png"
import bottles_image from "./img/bottles_image.png"
import maggi_image from "./img/maggi_image.png"
import dairy_product_image from "./img/dairy_product_image.png"
import bakery_image from "./img/bakery_image.png"
import namkeen1 from "./img/namkeen1.png"
import bg_img1 from "./img/bg_img1.png"



export const images = {
  heroBg,
  abt,
  avatar1,
  avatar2,
  avatar3,
  breadCrumbBg,
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
  companyLogo5,
  pomegranate,
  favicon,
  featureBg,
  heroBg2,
  heroBg3,
  homePageBg,
  logo,
  newsBg1,
  newsBg2,
  newsBg3,
  newsBg4,
  newsBg5,
  newsBg6,
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
  strawberrySmall,
  team1,
  team2,
  team3,
  strawberry,
  grain_image,
  organic_vegitable_image,
  fresh_fruits_image,
  bottles_image,
  maggi_image,
  dairy_product_image,
  bakery_image,
  namkeen1,
  bg_img1
  
  




};


 export const featureData = [
    {
      icon: "fas fa-shipping-fast",
      title: "Free Shipping",
      desc: "When order over $75",
    },
    {
      icon: "fas fa-phone-volume",
      title: "24/7 Support",
      desc: "Get support all day",
    },
    {
      icon: "fas fa-sync",
      title: "Refund",
      desc: "Get refund within 3 days!",
    },
  ];

  export const categories = [
  {
    text: "Organic veggies",
    path: "Vegetables",
    image: organic_vegitable_image,
    bgColor: "#FEF6DA",
  },
  {
    text: "Fresh Fruits",
    path: "Fruits",
    image: fresh_fruits_image,
    bgColor: "#FEE0E0",
  },
  {
    text: "Cold Drinks",
    path: "Drinks",
    image: bottles_image,
    bgColor: "#F0F5DE",
  },
  {
    text: "Instant Food",
    path: "Instant",
    image: maggi_image,
    bgColor: "#E1F5EC",
  },
  {
    text: "Dairy Products",
    path: "Dairy",
    image: dairy_product_image,
    bgColor: "#FEE6CD",
  },
  {
    text: "Bakery & Breads",
    path: "Bakery",
    image: bakery_image,
    bgColor: "#E0F6FE",
  },
  {
    text: "Grains & Cereals",
    path: "Grains",
    image: grain_image,
    bgColor: "#F1E3F9",
  },
  {
    text: "Namkins & Snacks",
    path: "Snacks",
    image: namkeen1,
    bgColor: "#F0F5DE",
  }
];

export const dummyProducts = [
  {
    id: 1,
    name: "Apple",
    price: 120,
    unit: "1 kg",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6caa6"
  },
  {
    id: 2,
    name: "Banana",
    price: 40,
    unit: "1 dozen",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e43e"
  },
  {
    id: 3,
    name: "Mango",
    price: 150,
    unit: "1 kg",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078"
  },
  {
    id: 4,
    name: "Potato",
    price: 30,
    unit: "1 kg",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655"
  },
  {
    id: 5,
    name: "Tomato",
    price: 25,
    unit: "1 kg",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337"
  },
  {
    id: 6,
    name: "Milk",
    price: 60,
    unit: "1 litre",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
  },
  {
    id: 7,
    name: "Butter",
    price: 250,
    unit: "500 gm",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d"
  },
  {
    id: 8,
    name: "Bread",
    price: 35,
    unit: "1 pack",
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec"
  },
  {
    id: 9,
    name: "Biscuits",
    price: 20,
    unit: "1 pack",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707"
  },
  {
    id: 10,
    name: "Potato Chips",
    price: 50,
    unit: "1 pack",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b"
  }
];