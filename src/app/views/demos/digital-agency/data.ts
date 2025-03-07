import {
  BlogType,
  ProjectType,
  ServiceType,
  StatisticType,
  StepType,
  TestimonialType,
} from './types'

const serviceImg1 = 'assets/images/3d/Image_VLC_00003.jpg' 
const serviceImg2 = 'assets/images/3d/Image_VLC_00009.jpg'
const serviceImg3 = 'assets/images/3d/Image_VLC_00058.jpg'
const serviceImg4 = 'assets/images/3d/Image_VLC_00075.jpg'
const serviceImg5 = 'assets/images/services/05.jpg'
const serviceImg6 = 'assets/images/services/06.jpg' 

const project1 = 'assets/images/3d/Image_VLC_00073.jpg'
const project2 = 'assets/images/3d/Image_VLC_00017.jpg'  


const avatar2 = 'assets/images/avatar/02.jpg'
const avatar4 = 'assets/images/avatar/04.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'
const avatar6 = 'assets/images/avatar/06.jpg'
const avatar9 = 'assets/images/avatar/09.jpg'

const blogImg3 = 'assets/images/blog/4by3/03.jpg'
const blogImg7 = 'assets/images/blog/4by3/07.jpg'
const blogImg8 = 'assets/images/blog/4by3/08.jpg'

export const services: ServiceType[] = [
  {
    title: 'Production des films d’animation 3D',
    description:
      `OPTIMAT crée des films d’animation 3D entièrement conçus en RDC. Il est capable de développer des
histoires originales et de les mettre en scène dans un univers virtuel.`,
    image: serviceImg1,
    url: '/services/single',
  },
  {
    title: 'Spots publicitaires en 3D',
    description: `Le studio réalise des publicités animées
en 3D pour promouvoir des produits ou des services. Ces spots peuvent
être utilisés sur différents supports (télévision, réseaux sociaux, etc.).`,
    image: serviceImg2,
    url: '/services/single',
  },
  {
    title: 'Cours et longs métrages d’animation 3D',
    description:
     `OPTIMAT travaille également
sur des projets plus ambitieux tels que des courts et longs métrages d’animation. 
  Il peut ainsi développer des histoires plus complexes et plus narratives`,
    image: serviceImg3,
    url: '/services/single',
  },
  {
    title: 'Création et modélisation de concepts en 3D',
    description:
      ` Le studio est capable de créer des modèles 3D à partir de zéro, 
      que ce soit pour des personnages, des décors ou des objets.
Services de création et de conception: OPTIMAT offre une gamme complète
de services créatifs, allant de la conception visuelle à la réalisation technique.`,
    image: serviceImg4,
    url: '/services/single',
  },
  // {
  //   title: 'IT Consulting and Support',
  //   description:
  //     'Leverage our expertise to optimize your IT infrastructure and operations.',
  //   image: serviceImg5,
  //   url: '/services/single',
  // },
  // {
  //   title: 'UI/UX Design Services',
  //   description: 'Enhance user satisfaction and engagement with our services.',
  //   image: serviceImg6,
  //   url: '/services/single',
  // },
]
 
export const steps: StepType[] = [
  {
    title: 'Motion',
    description:
      `Traduit littéralement par « conception de
      mouvement », le motion design, également
      appelé motion graphic design, correspond à
      l’art de donner vie aux images. À la croisée
      de l’art et de la communication, cette discipline consiste à donner du mouvement au
      graphisme afin de faire passer un message
      de manière dynamique.`,
    icon: 'bi-1-circle',
  },
  {
    title: 'Modélisation',
    description:
      `La modélisation tridimensionnelle est
        l’étape en infographie tridimensionnelle
        qui consiste à créer, dans un logiciel de
        modélisation tridimensionnelle, un objet
        en trois dimensions, par ajout, soustraction
        et modifications de ses constituants. `,
    icon: 'bi-2-circle',
  },
  {
    title: 'Animation 3D',
    description:
      `L’animation par ordinateur ou animation
      en images de synthèse est toute animation
      dont chaque photogramme est une image
      de synthèse entièrement créée avec un ordinateur. Certaines animations par ordinateur sont intégrées au sein de prise de
      vues réelles ou d’animations obtenues par
      d’autres procédés.`,
    icon: 'bi-3-circle',
  },
]

export const projects: ProjectType[] = [
  {
    name: 'Koffi Raymet: le génie oublié',
    category: 'Long metrage', 
    image: project1,
    url: '/services/global', 
  },
  {
    name: 'Mayika: la blonde noire',
    category: 'Long metrage',
    image: project2,
    url: '/services/global',
  },
]

export const statData: StatisticType[] = [
  {
    title: 'Worldwide client',
    stat: 30,
    prefix: '>',
    suffix: 'K',
  },
  {
    title: 'Analyze business reports',
    stat: 99,
    suffix: '%',
  },
  {
    title: 'Worldwide projects',
    stat: 350,
    suffix: '+',
  },
]

export const testimonials: TestimonialType[] = [
  {
    title: "Transformed My Agency's Results",
    comment:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
    rating: 5,
    user: {
      firstName: 'Louis',
      lastName: 'Ferguson',
      role: 'Web Developer',
      avatar: avatar4,
    },
  },
  {
    title: "Transformed My Agency's Results",
    comment:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
    rating: 4.5,
    user: {
      firstName: 'Emma',
      lastName: 'Watson',
      role: 'Co-Founder',
      avatar: avatar5,
    },
  },
  {
    title: "Transformed My Agency's Results",
    comment:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
    rating: 4.5,
    user: {
      firstName: 'Samuel',
      lastName: 'Bishop',
      role: 'Product designer',
      avatar: avatar6,
    },
  },
]

export const blogs: BlogType[] = [
  {
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    category: 'Technology',
    publishedAt: {
      date: 15,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar2,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    image: blogImg3,
    url: '/blog/single/v2',
  },
  {
    title:
      'Mastering HTML Website Templates - Unleash Your Creativity with Bootstrap',
    category: 'Research',
    publishedAt: {
      date: 12,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    image: blogImg8,
    url: '/blog/single/v2',
  },
  {
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    category: 'Design',
    publishedAt: {
      date: 8,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar9,
      firstName: 'Allen',
      lastName: 'Smith',
    },
    image: blogImg7,
    url: '/blog/single/v2',
  },
]
