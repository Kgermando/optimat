import { numberFourIcon, numberOneIcon, numberThreeIcon, numberTwoIcon } from '@public/assets/data/icons'
import type {
  FeatureType,
  MemberType,
  StepType,
  TestimonialType,
} from './types'

const team1 = 'assets/images/3d/hero1.jpg'
const team2 = 'assets/images/team/2.png'
const team3 = 'assets/images/team/3.png'
const team4 = 'assets/images/team/4.png'
const team5 = 'assets/images/team/4by4/05.jpg'
const team6 = 'assets/images/team/4by4/06.jpg'

const avatar4 = 'assets/images/avatar/04.jpg'
const avatar1 = 'assets/images/avatar/01.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'

export const features: FeatureType[] = [
  {
    title: 'Expertise locale',
    description:
      'Nous sommes ancrés dans le tissu culturel congolais et produisons des contenus qui résonnent auprès du public local.',
    icon: numberOneIcon,
  },
  {
    title: 'Qualité irréprochable',
    description:
      'Nous mettons un point d’honneur à livrer des productions de haute qualité, conformes aux standards internationaux.',
    icon: numberTwoIcon,
  },
  {
    title: 'Innovation',
    description:
      'Nous sommes constamment à la recherche de nouvelles techniques et de nouvelles formes d’expression pour offrir une expérience visuelle unique.',
    icon: numberThreeIcon,
  },
  {
    title: 'Engagement',
    description:
      'Nous nous engageons à soutenir le développement de l’industrie de l’animation 3D en République Démocratique du Congo.',
    icon: numberFourIcon,
  },
]

export const teamMembers: MemberType[] = [
  {
    firstName: 'Fernando',
    lastName: 'NYEMBWE',
    role: 'Directeur Général',
    image: team1,
  },
  {
    firstName: 'Laeticia',
    lastName: 'SHOMA',
    role: 'Directrice Chargée de L\’ Administratif & Financier',
    image: team2,
  },
  {
    firstName: 'Betty Stéphanie',
    lastName: 'MBUYI',
    role: 'Directrice Chargée D\’ Études & Projets',
    image: team4,
  },
  {
    firstName: 'Amina',
    lastName: 'SHABANI',
    role: 'Directrice Chargée Artistique & Design',
    image: team3,
  },
  {
    firstName: 'Samuel',
    lastName: 'Bishop',
    role: 'Product designer',
    image: team5,
  },
  {
    firstName: 'Amanda',
    lastName: 'Reed',
    role: 'Content writer',
    image: team6,
  },
]

export const installationSteps: StepType[] = [
  {
    stepNumber: '01',
    title: "AXES MÉTIERS",
    description: `Etre un partenaire actif et être reconnu comme un acteur majeur dans
 l’économie Congolaise
 Anticiper, réagir et s’adapter aux tendances lourdes du marché actuel et
futur
 Augmenter nos activités de Promotion Institutionnelle
 Accroître notre part de marché dans le domaine de l’animation 3D
 Développer des projets en Partenariat Public Privé
 Sensibiliser nos clients, nos partenaires et notre personnel aux nouvelles
 technologies de la production Durable et Responsable`
  },
  {
    stepNumber: '02',
    title: 'AXES ORGANISATIONNELS',
    description: `Gérer chaque projet comme un centre de profit autonome et rentable
 Développer et appliquer avec rigueur les procédures internes
 Anticiper et planifier toutes nos actions
 Favoriser la créativité des équipes pour optimiser nos projets`,
  },
  {
    stepNumber: '03',
    title: 'AXES HUMAINS',
    description: `Améliorer la communication interne
 Responsabiliser tout le personnel
 Recruter régulièrement pour faire évoluer nos métiers en gardant notre
savoir-faire
 Former en continu l’ensemble du personnel pour garantir la qualité de nos
productions`,
  },
  // {
  //   stepNumber: '04',
  //   title: 'Sign In and Start Using',
  // },
]

export const testimonials: TestimonialType[] = [
  {
    comment:
      'Mizzle is the perfect theme for businesses that want to create a stylish and functional website. Supposing so be resolving breakfast am or perfectly.',
    user: {
      firstName: 'Dennis',
      lastName: 'Barrett',
      avatar: avatar4,
      role: 'CEO and manager',
      companyName: 'Mizzle',
    },
    rating: 4.5,
  },
  {
    comment:
      'Stackbros helped us create a stunning website that reflects our brand perfectly. At weddings believed laughing',
    user: {
      firstName: 'Samuel',
      lastName: 'Bishop',
      avatar: avatar1,
      role: 'Manager',
      companyName: 'Mizzle',
    },
    rating: 4.5,
  },
  {
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need. Resolving breakfast am or perfectly.",
    user: {
      firstName: 'Amanda',
      lastName: 'Reed',
      avatar: avatar5,
      role: 'Content writer',
    },
    rating: 4.5,
  },
]
