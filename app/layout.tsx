import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omer Ebead - AI Researcher & MARL Specialist | Google DeepMind Scholar",
  description: "AI Researcher specializing in Multi-Agent Reinforcement Learning (MARL) at AIMS South Africa & InstaDeep. Google DeepMind Scholar pursuing Master's in AI for Science. Expert in JAX, PyTorch, full-stack development, and satellite data analysis.",
  keywords: [
    "Omer Ebead",
    "AI Researcher",
    "Multi-Agent Reinforcement Learning",
    "MARL Specialist", 
    "Google DeepMind Scholar",
    "JAX Developer",
    "PyTorch Expert",
    "InstaDeep Intern",
    "AIMS South Africa",
    "Stellenbosch University",
    "Machine Learning Researcher",
    "Full-Stack Developer",
    "Python Developer", 
    "Computer Vision",
    "Satellite Data Analysis",
    "Next.js Developer",
    "React Developer",
    "AI for Science",
    "South Africa Researcher",
    "Remote Collaboration"
  ],
  authors: [{ name: "Omer Ebead", url: "https://linkedin.com/in/omer-kamal-40417512b/" }],
  creator: "Omer Ebead",
  publisher: "Omer Ebead",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://morosama.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://morosama.vercel.app',
    title: 'Omer Ebead - AI Researcher & MARL Specialist',
    description: 'AI Researcher specializing in Multi-Agent Reinforcement Learning at AIMS South Africa & InstaDeep. Google DeepMind Scholar with expertise in JAX, PyTorch, and full-stack development.',
    siteName: 'Omer Ebead Portfolio',
    images: [
      {
        url: '/omer.jpg',
        width: 1200,
        height: 630,
        alt: 'Omer Ebead - AI Researcher & MARL Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omer Ebead - AI Researcher & MARL Specialist',
    description: 'AI Researcher specializing in Multi-Agent Reinforcement Learning at AIMS South Africa & InstaDeep. Google DeepMind Scholar.',
    images: ['/omer.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Omer Ebead',
  jobTitle: 'AI Researcher & Multi-Agent Reinforcement Learning Specialist',
  description: 'AI Researcher specializing in Multi-Agent Reinforcement Learning (MARL) at AIMS South Africa and InstaDeep. Google DeepMind Scholar pursuing Master\'s in AI for Science.',
  url: 'https://morosama.vercel.app',
  image: 'https://morosama.vercel.app/omer.jpg',
  email: 'omer@aims.ac.za',
  sameAs: [
    'https://linkedin.com/in/omer-kamal-40417512b/',
    'https://github.com/Mamoro98',
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Stellenbosch University',
      description: 'Master\'s in AI for Science (2024-2025)'
    },
    {
      '@type': 'EducationalOrganization', 
      name: 'University of Khartoum',
      description: 'Bachelor\'s in Electrical and Electronic Engineering (2016-2021)'
    }
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'AI Researcher & Research Engineer Intern',
    occupationLocation: {
      '@type': 'Place',
      name: 'Cape Town, South Africa'
    },
    skills: [
      'Multi-Agent Reinforcement Learning',
      'JAX',
      'PyTorch',
      'TensorFlow',
      'Python',
      'Machine Learning Research',
      'Computer Vision',
      'Satellite Data Analysis',
      'Full-Stack Development',
      'React',
      'Next.js',
      'Flask',
      'Django'
    ]
  },
  award: [
    'Google DeepMind Scholarship (2024)',
    'Academic Excellence Award - AI for Science Master\'s (2025)'
  ],
  offers: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'AI Research Collaboration & Software Development Services',
      description: 'Multi-Agent Reinforcement Learning research, AI/ML solutions, and full-stack development services'
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/omer.jpg" />
        <meta name="theme-color" content="#121212" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
