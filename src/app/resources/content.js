import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Nathan",
  lastName: "Soares de Melo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Engineering Student",
  avatar: "/images/avatar.jpg",
  location: "Paris, France",
  languages: ["French", "English"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about data science, engineering, and share thoughts on the intersection of
      technology and research.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nathsdm",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nathan-soares-de-melo",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:nathan.soaresdemelo@ensae.fr",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>Engineering Student specializing in Data Science</>,
  subline: (
    <>
      Second-year student at <InlineCode>ENSAE Paris</InlineCode>, specializing in data science and applied statistics.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a second-year student at ENSAE, specializing in data science and applied statistics.
        I have a strong background in mathematics, physics, and informatics from my preparatory classes.
        I am passionate about applying AI and statistical models to solve real-world problems,
        as demonstrated by my work in healthcare and identity verification.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "IBISC",
        timeframe: "2024",
        role: "Internship – Research in AI & Healthcare",
        achievements: [
          <>
            Researched explainable AI in healthcare, applying symbolic methods to improve model transparency.
          </>,
          <>
            Developed statistical models for data analysis in a laboratory setting (research paper written in English).
          </>,
        ],
        images: [],
      },
      {
        company: "DocuSign",
        timeframe: "2023",
        role: "Internship – Machine Learning Project",
        achievements: [
          <>
            Built and optimized ML models for identity verification, improving performance by 10%.
          </>,
          <>
            Processed and analysed large datasets using Python & KQL.
          </>,
          <>
            Collaborated in an international engineering team.
          </>,
        ],
        images: [],
      },
      {
        company: "PNGATE",
        timeframe: "2022 - 2023",
        role: "Client Relations Manager",
        achievements: [
          <>
            Managed client relations with Planète Mer.
          </>,
          <>
            Assisted in project coordination and communication strategies.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "NARA Institute of Science and Technology",
        description: <>Biological Data Science Laboratory (exchange student) – biology, data science, machine learning.</>,
      },
      {
        name: "ENSAE Paris",
        description: <>Engineering school specializing in statistics and economics – economics, statistics, data science.</>,
      },
      {
        name: "Télécom SudParis",
        description: <>Engineering school specializing in digital sciences – networking, artificial intelligence, programming.</>,
      },
      {
        name: "Lycée Gay-Lussac",
        description: <>Preparatory classes for the French Grandes Écoles (MPSI then MP track) – mathematics, physics, informatics.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming & Tools",
        description: <>Python (advanced), R, SQL, Matlab, Java, Git, Bash, Jira, Slack, Microsoft Office.</>,
        images: [],
      },
      {
        title: "Languages",
        description: <>French (Native), English (Upper intermediate), Japanese (Basic).</>,
        images: [],
      },
      {
        title: "Hobbies",
        description: <>Aviation (BIA), Music (Piano), Chess.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `I love photography and was part of the clubs from both Télécom SudParis (Déclic, as training manager) and ENSAE (Vision, as photograph). \nHere are some photos I took during that time ^^`,
  images: [
    {
      src: "/images/gallery/1.jpg",
      alt: "image 1",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2.jpg",
      alt: "image 2",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/3.jpg",
      alt: "image 3",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/4.jpg",
      alt: "image 4",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/5.jpg",
      alt: "image 5",
      orientation: "horizontal",
    },
  ],
};

const music = {
  label: "Music",
  title: "My Music",
  description: `Here you can listen to some of my music, from beats I've made to piano pieces I've played.`,
  social: [
    {
      name: "Instagram",
      icon: "instagram",
      link: "https://www.instagram.com/nathsdm_piano/?hl=en",
    },
    {
      name: "SoundCloud",
      icon: "soundcloud",
      link: "https://soundcloud.com/fukuzawarudo",
    },
    {
      name: "YouTube",
      icon: "youtube",
      link: "https://www.youtube.com/@polychordsradio",
    },
    {
      name: "Spotify",
      icon: "spotify",
      link: "https://open.spotify.com/user/zhet3xu50kaalbvwdlk1cv41z?si=8326018250834030",
    },
    {
      name: "Whosampled",
      icon: "whosampled",
      link: "https://www.whosampled.com/user/Nathsdm/",
    }
  ],
  audio: [
    {
      title: "Broken Heart",
      src: "/musics/BrokenHeart.mp3",
      cover: "/musics/BrokenHeartCover.jpeg",
    },
    {
      title: "Winter Soiree",
      src: "/musics/WinterSoiree.mp3",
      cover: "/musics/WinterSoireeCover.png",
    },
  ],
  embeds: [
    {
      type: "instagram",
      html: `<div style="display: flex; justify-content: center;">
    <div style="
        border-radius: 12px; 
        overflow: hidden; 
        width: 350px;">
        
        <iframe 
            src="https://www.instagram.com/reel/DN8P5HUkVIZ/embed" 
            width="100%" 
            height="550" 
            frameborder="0" 
            scrolling="no" 
            allowtransparency="true"
            style="
                filter: brightness(0.6) contrast(1.2); 
            ">
        </iframe>
    </div>
</div>`
    },
    {
      type: "instagram",
      html: `<div style="display: flex; justify-content: center;">
    <div style="
        border-radius: 12px; 
        overflow: hidden; 
        width: 350px;">
        
        <iframe 
            src="https://www.instagram.com/reel/CQBM8FhBl3Z/embed" 
            width="100%" 
            height="550" 
            frameborder="0" 
            scrolling="no" 
            allowtransparency="true"
            style="
                filter: brightness(0.6) contrast(1.2); 
            ">
        </iframe>
    </div>
</div>`
    }
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, music };
