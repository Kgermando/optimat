export type ServiceType = {
  icon?: string
  image?: string
  title: string
  description?: string
  url?: string
}

export type User = {
  id?: string
  avatar?: string
  email?: string
  username?: string
  password?: string
  firstName?: string
  lastName?: string
  role?: string
  token?: string
}

export type DateType = {
  date?: number
  month?: string | number
  year?: number
  hour?: number
  minute?: number
}

export type ProjectType = {
  image: string
  name: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  createdBy?: {
    user?: User
    team?: User[]
  }
  createdAt?: DateType
  status?: 'published' | 'private'
}

export type TestimonialType = {
  userId?: User['id']
  user: User
  title?: string
  comment: string
  rating?: number
}

export type StatisticType = {
  title: string
  stat: number
  description: string
  prefix?: string
  suffix?: string
}

export type BlogType = {
  image?: string
  title: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  publishedBy?: User
  publishedAt?: DateType
}
