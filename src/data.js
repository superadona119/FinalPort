const skillsList = [
  { title: "HTML", value: 75 },
  { title: "CSS/SCSS", value: 80 },
  { title: "JavaScript", value: 80 },
  { title: "TypeScript", value: 60 },
  { title: "PHP", value: 70 },
  { title: "WordPress", value: 70 },
  { title: "React.JS", value: 70 },
  { title: "Next.js", value: 70 },
  { title: "Vue.js", value: 80 },
  { title: "Gatsby", value: 80 },
  { title: "MySQL", value: 80 },
  { title: "AWS", value: 80 },
  { title: "jQuery", value: 80 },
  { title: "GraphQL", value: 80 },
  { title: "Node.js", value: 80 },
  { title: "Express.js", value: 80 },
];
const projectList = [
  {
    id: 1,
    title: "Marmalade",
    technologies: ["WordPress", "GSAP", "Yoast SEO", "SlickCSS"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: "projects/01.png",
    url: "https://marmaladelondon.co.uk/"
  },
  {
    id: 2,
    title: "STELLAR FLAVOURS",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Styled-components",
      "GSAP",
      "jQuery",
    ],
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    frontImage: "projects/02.png",
    ur: "https://www.lamarmotta.cloud/"
  },
  {
    id: 3,
    title: "GAMEDAY",
    technologies: ["WordPress", "Swiper", "Slick"],
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    frontImage: "projects/03.png",
    url: "https://www.gamedayvodka.com/"
  },
  {
    id: 4,
    title: "Olympic Hot Tub",
    technologies: ["WordPress", "Woocommerce", "Thrive Architect",  "Contact Form 7", "Thrive Leads", "Yoast SEO"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage: "projects/04.png",
    url: "https://olympichotstag.wpengine.com/"
  },
  {
    id: 5,
    title: "WorldWonderToy",
    technologies: ["WordPress", "Woocommerce", "Elementor", "Complianz", "MailChimp"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: "projects/05.png",
    url: "https://worldofwondertoys.ie/"
  },
  {
    id: 6,
    title: "The LEGACY",
    technologies: ["WordPress", "GSAP", "Swiper", "Slick", "WP Rocket", "Yoast SEO"],
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    frontImage: "projects/06.png",
    url: "https://thelegacyseniorcommunities.org/"
  },
  {
    id: 7,
    title: "HEALTH CONCIERGE LONDON",
    technologies: ["WordPress", "Woocommerce", "Elementor", "WhatsApp Business Chat", "Swiper", "BootStrap", "Contact Form 7"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage: "projects/07.png",
    url: "https://www.londonhealthconcierge.co.uk/"
  },
  {
    id: 8,
    title: "Smiley",
    technologies: ["WordPress", "Elementor", "WP Rocket", "Yoast SEO"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: "projects/08.png",
    url: "https://www.smileydental.net/"
  },
  {
    id: 9,
    title: "SAVUM",
    technologies: ["WordPres", "Woocommerce", "Elementor", "SEO", "Redirect Plugin"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage: "projects/09.png",
  },
  // {
  //   id: 10,
  //   title: "KUVIRA",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   backgroundImage:
  //     "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
  //   frontImage: "projects/10.png",
  // },
  // {
  //   id: 11,
  //   title: "UBOOZE",
  //   technologies: ["React JS", "Bootstrap", "MongoDB", "Express"],
  //   backgroundImage:
  //     "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
  //   frontImage: "projects/11.png",
  // },
  // {
  //   id: 12,
  //   title: "DESIGNIOUS",
  //   technologies: ["Next.js", "Tailwind UI", "Docker", "Node.js", "AWS"],
  //   backgroundImage:
  //     "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
  //   frontImage: "projects/12.png",
  // },
];

const experienceList = [
  {
    id: 0,
    company: "Upwork",
    links: {
      website: "https://www.materiagris.com.py/",
      facebook: "https://www.facebook.com/codehubtn/",
      instagram: "https://www.instagram.com/codehub.coworking/",
    },
  },
  {
    id: 1,
    company: "Joker IT",
    links: {
      website: "https://light-it.net/",
      facebook: "https://www.facebook.com/codehubtn/",
      instagram: "https://www.instagram.com/codehub.coworking/",
    },
  },
  {
    id: 2,
    company: "Lattelecom & MEMS",
    links: {
      website: "https://techbehemoths.com/",
      facebook: "https://www.facebook.com/codehubtn/",
      instagram: "https://www.instagram.com/codehub.coworking/",
    },
  },
];

export { skillsList, projectList, experienceList };
