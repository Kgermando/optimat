import type { FollowUsType, LocationType, WorkType } from './types'
const webflowImg = 'assets/images/elements/webflow.svg'
const bootstrapImg = 'assets/images/elements/bootstrap.svg'
const githubImg = 'assets/images/elements/github.svg'
const usflagImg = 'assets/images/rdc.jpg'
const indianflagImg = 'assets/images/flags/in.svg'

export const followUsIcons: FollowUsType[] = [
  {
    icon: 'bi-facebook',
    variant: 'text-facebook',
  },
  {
    icon: 'bi-instagram',
    variant: 'text-instagram',
  },
  {
    icon: 'bi-dribbble',
    variant: 'text-dribbble',
  },
  {
    icon: 'bi-twitter',
    variant: 'text-twitter',
  },
  {
    icon: 'bi-youtube',
    variant: 'text-youtube',
  },
]

export const works: WorkType[] = [
  {
    image: webflowImg,
    title: 'Webflow templates',
    description: 'The combination of my passion for design',
  },
  {
    image: bootstrapImg,
    title: 'Bootstrap templates',
    description: 'It drew a hill from my the passion for design',
  },
  {
    image: githubImg,
    title: 'Contribute on Github',
    description: 'Supposing so be resolving breakfast am or perfectly.',
  },
]

export const locations: LocationType[] = [
  {
    countryName: 'République Démoncratique du Congo',
    address: '01, Wagenia, Immeuble Baobab 4è Étage/4C Kinshasa - Gombe - RDC',
    number: '(+243) 821 822 722 | (+243) 844 703 772',
    image: usflagImg,
  },
  // {
  //   countryName: 'India',
  //   address: '55/123 Norman street, Banking road, Sydney NSW 5000',
  //   number: '469-537-2410 (Toll-free)',
  //   image: indianflagImg,
  // },
]
