
const flagUK = 'assets/images/flags/uk.svg'
const flagGR = 'assets/images/flags/gr.svg'
const flagSP = 'assets/images/flags/sp.svg'

type FooterLinkType = {
  name: string
  link?: string
  badge?: string
  icon?: string
}

type SocialMediaLink = {
  icon: string
  iconClassName: string
}

type LanguageType = {
  flag: string
  name: string
}

type ContactType = {
  title: string
  icon: string
  description: string
}

export const quickLinks: FooterLinkType[] = [
  {
    name: "About us",
    link: "/about/optimat-incorporation", 
  },
  {
    name: "Contact us",
    link: "/contact",
  },
  {
    name: "Services",
    link: "/services/global", 
  },
  // {
  //   name: "Sign in",
  //   link: "/auth/sign-in",
  // },
  // {
  //   name: "Sign up",
  //   link: "/auth/sign-up",
  // }
]

export const quickLinks2: FooterLinkType[] = [
  {
    name: "About us",
    link: "/about/optimat-incorporation", 
  },
  {
    name: "Contact us",
    link: "/contact",
  },
  {
    name: "Services",
    link: "/services/global", 
  },
  // {
  //   name: "Team",
  //   link: "/team",
  // },
]

export const quickLinks3: FooterLinkType[] = [
  {
    name: "About us",
    link: "/about/v1",
  },
  {
    name: "Contact us",
    link: "/contact/v1",
  },
  {
    name: "Career",
    link: "/career",
  },
  {
    name: "Career detail",
    link: "/career/single",
  },
  {
    name: "Become a partner",
    link: "/contact/v1",
  },
  {
    name: "Sign up",
    link: "/auth/sign-up",
  },
  {
    name: "Cookie",
  }
]

export const quickLinks4: FooterLinkType[] = [
  {
    name: 'Become a partner',
    link: '/contact/v1',
  },
  {
    name: 'Customer stories',
    link: '/customer/stories',
  },
  {
    name: 'Sign in',
    link: '/auth/sign-in'
  },
  {
    name: 'Sign up',
    link: '/auth/sign-up',
  },
]

export const communityLinks: FooterLinkType[] = [
  {
    name: "Documents",
  },
  {
    name: "Supports",
    icon: 'bi-box-arrow-up-right'
  },
  // {
  //   name: "Faqs",
  //   link: "/faq"
  // },
  {
    name: "Privacy Policy",
  },
  // {
  //   name: "News and blogs",
  //   link: "/blog/grid"
  // },
  // {
  //   name: "Terms & condition",
  //   link: "/terms-conditions"
  // },
]

export const communityLinks2 = [
  {
    title: "Documentation",
    icon: 'bi-file-earmark-text-fill',
    variant: "bg-warning",
  },
  {
    title: "Snippets",
    icon: 'bi-stickies-fill',
    variant: "bg-success",
  },
  {
    title: "Components",
    icon: 'bi-puzzle-fill',
    variant: "bg-info",
  }
]

export const socialMediaLinks: SocialMediaLink[] = [
  { icon: 'fa-facebook-f', iconClassName: "bg-facebook" },
  { icon: 'fa-instagram', iconClassName: "bg-instagram" },
  { icon: 'fa-twitter', iconClassName: "bg-twitter" },
  { icon: 'fa-linkedin-in', iconClassName: "bg-linkedin" },
  { icon: 'fa-youtube', iconClassName: "bg-youtube" },
]

export const contactDetail = {
  address: "01, Wagenia, Immeuble Baobab 4è Étage/4C Kinshasa - Gombe - RDC",
  contact: " (+243) 821 822 722 | (+243) 844 703 772",
  email: "contact@optimatincorporation.com",
  weekDays: "Lun - Ven: 09:00 - 17:00",
  weekEnds: "Sam - Dim: Fermé",
}

export const contactDetails2: ContactType[] = [
  {
    title: 'Give us a call',
    icon: 'bi-telephone',
    description: contactDetail.contact
  },
  {
    title: 'Send us an email',
    icon: 'bi-envelope',
    description: contactDetail.email,
  },
  {
    title: 'Visit us in',
    icon: 'bi-geo-alt',
    description: contactDetail.address
  }
]

export const translationLanguages: LanguageType[] = [
  { name: 'English', flag: flagUK },
  { name: 'German', flag: flagGR },
  { name: 'French', flag: flagSP },
]