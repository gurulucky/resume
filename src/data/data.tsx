import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
// import porfolioImage8 from '../images/portfolio/portfolio-8.png';
// import porfolioImage9 from '../images/portfolio/portfolio-9.png';
// import porfolioImage10 from '../images/portfolio/portfolio-10.png';
// import porfolioImage11 from '../images/portfolio/portfolio-11.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Owen Thompson.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Toronto based <strong className="text-stone-100">Blockchain & Full Stack Software Engineer</strong>, currently working
        as <strong className="text-stone-100">Remote developer</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Experienced Developer professional</strong> with strong leadership and relationship building skills.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Certified Blockchain Developer</strong>, developing the dapp in React, Vue and Node.js. Experience in developing Decentralized Blockchain applications using Ethereum and Hyper ledger.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Highly professional blockchain developer with comprehensive accomplishments applying high-security smart contracts to ensure success and achieve goals. Strong experience in EVM-compatible smart contracts development. Demonstrated success developing and seamlessly executing smart contracts in complex DeFi and DEX structures. Recognized for maximizing performance by implementing appropriate project management through analysis of details to ensure quality control and an understanding of emerging technology. Expertise includes developing and auditing blockchain smart contracts with various Blockchain networks includingEthereum, Binance Smart Chain and Polygon.`,
  aboutItems: [
    { label: 'Location', text: 'Toronto, ON', Icon: MapIcon },
    { label: 'Age', text: '32', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Canadian / Chinese', Icon: FlagIcon },
    { label: 'Interests', text: 'Motorcycles, Soccer, Tennis', Icon: SparklesIcon },
    { label: 'Study', text: 'University of Toronto', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Remote', Icon: OfficeBuildingIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 9.5,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Vue',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 10,
      },
      {
        name: 'GraphQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9.5,
      },
      {
        name: 'python',
        level: 9,
      },
      {
        name: 'Solidity',
        level: 9,
      },
      {
        name: 'Golang',
        level: 8.5,
      },
      {
        name: 'Rust',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 7,
      },
      {
        name: 'Swift',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Treedefi',
    description: 'Defi for staking, farming, trading on Binance, fork of Pancakeswap',
    url: 'https://treedefi.com/',
    image: porfolioImage1,
  },
  {
    title: 'Clubvirtual',
    description: 'NFT marketplace creating, trading NFTs on Ethereum, Binance, Polygon',
    url: 'https://clubvirtual.io/',
    image: porfolioImage2,
  },
  {
    title: 'Destiny war',
    description: 'Destinywar NFT game site for token presale',
    url: 'https://destinywar.io/',
    image: porfolioImage3,
  },
  {
    title: 'NFTroi',
    description: 'NFT analyse platform for NFT traders',
    url: 'https://nftroi.io',
    image: porfolioImage4,
  },
  {
    title: 'Snowpoly',
    description: 'Play2Earn game with NFT on Avalanche, similar logic with monopoly',
    url: 'https://snowpoly.netlify.app',
    image: porfolioImage5,
  },
  {
    title: 'Polycat',
    description: 'Defi for staking, farming, trading on Polygon, fork of Pancakeswap',
    url: 'https://polycat.finance/',
    image: porfolioImage6,
  },
  {
    title: 'AussieBoganClub',
    description: 'NFT minting site on Ethereum',
    url: 'https://aussiebogan.club/',
    image: porfolioImage7,
  },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2009 - Mar 2012',
    location: 'University Of Toronto',
    title: `Master's Degree Information Technology`,
    content: <p></p>
  },
  {
    date: 'Sep 2007 - Mar 2009',
    location: 'McGill University',
    title: 'Bachelor Information Technology',
    content: <p></p>
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Nov 2016 - February 2021',
    location: 'Quest Global Technologies',
    title: 'Blockchain developer',
    content: (
      <p>
        - Development of vault smart contracts and unit tests, deployment scripts using Hardhat, Solidity, Ethers.js, Web3.js Chai, and Typescript.<br/>
        - Defi contract implementation using Pancakeswap DEX protocol on Binance Smart Chain.<br/>
        - ERC721, ERC1155 NFT contracts development with on-chain metadata<br/>
        - Development of Solidity smart contracts for NFT lending and renting<br/>
        - NFT Game contract development based on Metaverse
      </p>
    ),
  },
  {
    date: 'May 2012 - Sep 2016',
    location: 'Cyber Infrastructure Inc',
    title: 'Frontend & Backend developer',
    content: (
      <p>
        - Monitored social media and Google SEO analytics to adjust post time, location, and various media to grow target platform by 20,000+ followers in less than a year.<br />
        - Created a Mobile Responsive User Experience with CSS Flexbox that allowed cross-platform accessibility to the website on any device with primary use on mobile. This increased the number of 5 star User Experience/User Interface reviews by 360%<br />
        - Built API following RESTful standards to allow users to submit information by storing data in MongoDB.
        Partnered with data scientists to develop the front end for a product recommendation engine that increased user engagement on page by over 200%.<br />
        - Curated over 50 website changes to increase the user flow and understanding of all platform capabilities and features.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.png',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.png',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://t.me/guruman0606' },
  // { label: 'Twitter', Icon: TwitterIcon, href: 'https://t.me/guruman0606' },
  // { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/gurulucky' },
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/gurulucky' },
];
