import { v4 as uuidv4 } from "uuid";

import img1 from "../img/house/house_1.png";
import img2 from "../img/house/house_2.png";
import img3 from "../img/house/house_3.png";
import img4 from "../img/house/house_4.png";
import star from "../img/property_list/star.png";
import ledto from "../img/property_list/letdo.png";
import metro from "../img/property_list/metro.png";
import profileImg from "../img/property_list/profilemage.png";
import bigimg from "../img/property_list/bigImg.png";
import smallImg1 from "../img/property_list/smallImg1.png";
import smallImg2 from "../img/property_list/smallImg2.png";
import propertyCardImg1 from "../img/property_list/propertycardimg/img1.png";
import propertyCardImg2 from "../img/property_list/propertycardimg/img2.png";
import propertyCardImg3 from "../img/property_list/propertycardimg/img3.png";
import propertyCardImg4 from "../img/property_list/propertycardimg/img4.png";
import propertyCardImg5 from "../img/property_list/propertycardimg/img5.png";
import propertyCardImg6 from "../img/property_list/propertycardimg/img6.png";
import propertyCardImg7 from "../img/property_list/propertycardimg/img7.png";
import propertyCardImg8 from "../img/property_list/propertycardimg/img8.png";
import propertyCardImg9 from "../img/property_list/propertycardimg/img9.png";
import propertyCardImg10 from "../img/property_list/propertycardimg/img10.png";

export const Propertydata = {
  latestSales: [
    {
      id: 1,
      img: img1,
      title: "Metro Jayakar Apartment",
      description: "North Carolina, USA",
      price: "+$35",
    },
    {
      id: 2,
      img: img2,
      title: "Letdo Ji Hotel & Aportment",
      description: " Carolina North, UK",
      price: "+$40",
    },
    {
      id: 3,
      img: img3,
      title: "Star Sun Hotel & Apartment",
      description: "North Carolina, USA",
      price: "+$50",
    },
    {
      id: 4,
      img: img4,
      title: "Metro Jayakar Apartment",
      description: "North Carolina, USA",
      price: "+$35",
    },
  ],
  PropertyList: {
    popular: [
      {
        id: 1,
        img: star,
        title: "Star Sun Hotel & Apartment",
        price: "$500",
        location: "North Carolina, USA",
      },
      {
        id: 2,
        img: ledto,
        title: "Letdo Ji Hotel & Apartment",
        price: "$500",
        location: "New Yrk City, USA",
      },
      {
        id: 3,
        img: metro,
        title: "Metro Jayakar Apartment",
        price: "$500",
        location: "North Carolina, USA",
      },
    ],
    recommended: [
      {
        id: 4,
        img: metro,
        title: "Metro Jayakar Apartment",
        price: "$500",
        location: "North Carolina, USA",
      },
      {
        id: 5,
        img: ledto,
        title: "Letdo Ji Hotel & Apartment",
        price: "$500",
        location: "New Yrk City, USA",
      },
      {
        id: 6,
        img: star,
        title: "Star Sun Hotel & Apartment",
        price: "$500",
        location: "North Carolina, USA",
      },
    ],
    newest: [
      {
        id: 5,
        img: ledto,
        title: "Letdo Ji Hotel & Apartment",
        price: "$500",
        location: "New Yrk City, USA",
      },
      {
        id: 4,
        img: metro,
        title: "Metro Jayakar Apartment",
        price: "$500",
        location: "North Carolina, USA",
      },
      {
        id: 6,
        img: star,
        title: "Star Sun Hotel & Apartment",
        price: "$500",
        location: "North Carolina, USA",
      },
    ],
    mostRecent: [
      {
        id: 5,
        img: ledto,
        title: "Letdo Ji Hotel & Apartment",
        price: "$500",
        location: "New Yrk City, USA",
      },
      {
        id: 6,
        img: star,
        title: "Star Sun Hotel & Apartment",
        price: "$500",
        location: "North Carolina, USA",
      },
      {
        id: 4,
        img: metro,
        title: "Metro Jayakar Apartment",
        price: "$500",
        location: "North Carolina, USA",
      },
    ],
  },
  PropertyListMain: [
    {
      status: "Any Type",
      id: uuidv4(),
      type: "Apartment",
      img: propertyCardImg1,
      title: "Metro Jayakarta Hotel & Spa",
      location: "North Carolina, USA",
      price: 7400,
      beds: 4,
      area: 28,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
    {
      status: "Any Type",
      id: uuidv4(),
      type: "Apartment",
      img: propertyCardImg2,
      title: "Metro Jayakarta Hotel & Spa",
      location: "North Carolina, USA",
      price: 7400,
      beds: 4,
      area: 28,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },

        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
    {
      status: "Any Type",
      id: uuidv4(),
      type: "Apartment",
      img: propertyCardImg3,
      title: "Star Sun Hotel & Apartment",
      location: "Condong City, USA",
      price: 8500,
      beds: 6,
      area: 29,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },

        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
    {
      status: "For Sale",
      id: uuidv4(),
      type: "Houses",
      img: propertyCardImg4,
      title: "Lotus Apy Hotel & Apartment",
      location: "Mlrgoluwih Caloriya, USA",
      price: 7900,
      beds: 3,
      area: 25,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },

        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
    {
      status: "For Sale",
      id: uuidv4(),
      type: "Houses",
      img: propertyCardImg5,
      title: "Lavender Apartment",
      location: "North Carolina, USA",
      price: 9000,
      beds: 3,
      area: 26,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },

        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
    {
      status: "For Sale",
      id: uuidv4(),
      type: "Houses",
      img: propertyCardImg6,
      title: "Star Sun Hotel & Apartment",
      location: "North Carolina, USA",
      price: 4800,
      beds: 5,
      area: 28,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },

        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
    {
      status: "For rent",
      id: uuidv4(),
      type: "Commercial",
      img: propertyCardImg7,
      title: "Almander Hotel & Apartment",
      location: "Suryodiningratan, UK",
      price: 7400,
      beds: 2,
      area: 22,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },

        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
    {
      status: "For rent",
      id: uuidv4(),
      type: "Garages",
      img: propertyCardImg8,
      title: "Almander Hotel & Apartment",
      location: "Suryodiningratan, UK",
      price: 6500,
      beds: 5,
      area: 26,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },

        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
    {
      status: "For rent",
      id: uuidv4(),
      type: "Lots",
      img: propertyCardImg9,
      title: "Metro Jayakarta Hotel & Sp",
      location: "North Carolina, USA",
      price: 8100,
      beds: 4,
      area: 28,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
    {
      status: "For rent",
      id: uuidv4(),
      type: "Lots",
      img: propertyCardImg10,
      title: "Metro Jayakarta Hotel & Sp",
      location: "North Carolina, USA",
      price: 5800,
      beds: 4,
      area: 28,
      propertyDetail: {
        images: {
          bigImg: bigimg,
          smallImg: {
            img1: smallImg1,
            img2: smallImg2,
          },
        },
        rating: 5,
        priceOneDay: 80,
        facility: {
          beds: true,
          baths: true,
          area: true,
          smookingArea: true,
          kitchen: true,
          balcony: true,
          wifi: true,
          parkingArea: true,
        },
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        seller: {
          sellerImg: profileImg,
          name_lastname: "Hussain Ahmed",
          agent: "Agent",
          sellerLocation: "North Carolina, USA",
          propertis: 10,
          map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
      },
    },
  ],
};
