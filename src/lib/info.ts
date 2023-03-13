import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBook, IconDefinition } from '@fortawesome/free-solid-svg-icons'
interface TechStack {
  title: string
  logo: string
  width: number
  height: number
  line: number
}
export const techStack: TechStack[] = [
  {
    title: 'JavaScript',
    logo: '/images/min-js.png',
    width: 20,
    height: 20,
    line: 98,
  },
  {
    title: 'TypeScript (Learning)',
    logo: '/images/min-ts.png',
    width: 20,
    height: 20,
    line: 30,
  },
]

export const FEtechStack: TechStack[] = [
  {
    title: 'ReactJS',
    logo: '/images/min-react.png',
    width: 20,
    height: 20,
    line: 92,
  },
  {
    title: 'React Native',
    logo: '/images/min-react.png',
    width: 20,
    height: 20,
    line: 90,
  },
  {
    title: 'NextJs',
    logo: '/images/min-next.png',
    width: 20,
    height: 20,
    line: 75,
  },
  {
    title: 'VueJs',
    logo: '/images/min-vuejs.png',
    width: 20,
    height: 20,
    line: 92,
  },
  {
    title: 'Graphql',
    logo: '/images/min-graphql.png',
    width: 20,
    height: 20,
    line: 85,
  },
]

export const BEtechStack: TechStack[] = [
  {
    title: 'PostgreSQL',
    logo: '/images/min-postgres.png',
    width: 25,
    height: 25,
    line: 95,
  },
  {
    title: 'Sequelize ORM',
    logo: '/images/min-sequelize.png',
    width: 25,
    height: 25,
    line: 95,
  },
  {
    title: 'MongoDB',
    logo: '/images/min-mongo.png',
    width: 10,
    height: 20,
    line: 95,
  },
  {
    title: 'NodeJs',
    logo: '/images/min-node2.png',
    width: 18,
    height: 20,
    line: 98,
  },
  {
    title: 'Socket.io',
    logo: '/images/min-socketio.png',
    width: 18,
    height: 20,
    line: 98,
  },
]

export const otherTechStack: TechStack[] = [
  {
    title: 'Docker',
    logo: '/images/min-docker.png',
    width: 30,
    height: 20,
    line: 95,
  },
  {
    title: 'Git',
    logo: '/images/min-git.png',
    width: 20,
    height: 20,
    line: 100,
  },
  {
    title: 'Googling',
    logo: '/images/min-google.png',
    width: 20,
    height: 20,
    line: 100,
  },
]

interface Project {
  font: IconDefinition
  title: string
  description: string
  url: string
  repo: string
  language: string
  color: string
}

export const project: Project[] = [
  {
    font: faBook,
    title: 'Hackbid',
    description: 'Realtime Auction Mobile Apps using react native',
    url: 'https://hackbid.com',
    repo: 'https://github.com/orgs/hackbid/repositories',
    language: 'React Native',
    color: '#00B2FF',
  },
  {
    font: faBook,
    title: 'Carikerja',
    description: 'Job Portal Sandbox created with ReactJs',
    url: 'https://carikerja.mashayyik.dev',
    repo: 'https://github.com/mashayyik/carikerja',
    language: 'React JS',
    color: '#1751E5',
  },
  {
    font: faBook,
    title: 'HLR-Auction',
    description: 'Realtime Bidding Web Apps using VueJS',
    url: 'https://hlr-auction.web.app/',
    repo: 'https://github.com/mashayyik/p2-iproject-server',
    language: 'Vue JS',
    color: '#85F672',
  },
  {
    font: faBook,
    title: 'GoSport',
    description: 'Sport Booking App with Express JS Server Side Rendering',
    url: 'https://gosport.mashayyik.dev',
    repo: 'https://github.com/mashayyik/goSport',
    language: 'Express JS',
    color: '#FFE600',
  },
]

interface Link {
  logo: IconDefinition
  url: string
}

export const link: Link[] = [
  {
    logo: faGithub,
    url: 'https://github.com/mashayyik',
  },
  {
    logo: faLinkedin,
    url: 'https://www.linkedin.com/in/hayyiklanaar',
  },
]
