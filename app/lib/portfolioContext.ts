export const portfolioContext = {
  personalInfo: {
    name: "Omer Ebead",
    title: "AI Researcher & Multi-Agent Reinforcement Learning Specialist",
    email: "omer@aims.ac.za",
    location: "Cape Town, South Africa",
    linkedin: "https://www.linkedin.com/in/omer-kamal-40417512b/",
    github: "https://github.com/Mamoro98",
    portfolio: "https://morosama.vercel.app"
  },

  summary: "A researcher specializing in Multi-Agent Reinforcement Learning (MARL), leveraging a background in Electrical Engineering and full-stack development to advance AI for Science. Through my Master's at Stellenbosch University, I investigate complex decision-making in multi-agent systems, combining theoretical principles with hands-on implementation.",

  education: [
    {
      degree: "Master's in AI for Science",
      institution: "Stellenbosch University | AIMS South Africa",
      location: "Cape Town, South Africa",
      period: "Sep. 2024 - Sep. 2025",
      status: "Recently graduated",
      highlights: [
        "Google DeepMind Scholarship recipient",
        "Focus on Multi-Agent Reinforcement Learning",
        "Academic Excellence Award (Aug. 2025)"
      ]
    },
    {
      degree: "Bachelor's in Electrical and Electronic Engineering",
      institution: "University of Khartoum",
      location: "Khartoum, Sudan",
      period: "Aug. 2016 - May 2021"
    }
  ],

  experience: [
    {
      position: "Research Engineer Intern",
      company: "InstaDeep",
      location: "Cape Town, South Africa",
      period: "Aug. 2025 - Jan. 2026",
      description: "Contributing to cutting-edge research project by developing and optimizing components of a large-scale framework for multi-agent reinforcement learning using JAX and Python.",
      technologies: ["JAX", "Python", "MARL Research"]
    },
    {
      position: "Software Engineer",
      company: "Freelancer",
      location: "Riyadh, Saudi Arabia",
      period: "Apr. 2023 - Sep. 2024",
      description: "Designed and developed user interface, server and database for Customer's Ideas",
      technologies: ["Flask", "Django", "Next.js"]
    },
    {
      position: "Software Engineer",
      company: "AmunData",
      location: "Khartoum, Sudan",
      period: "Apr. 2022 - Apr. 2023",
      description: "Designed and developed user interface, server, database, data preparation, data processing, and data predictions. Built systems to extract vegetation indexes from Satellite images and built models for predictions. Collaborated with data analysis team for data visualization tasks using PowerBI.",
      technologies: ["React.js", "Flask", "Power BI", "Satellite Data Analysis"]
    },
    {
      position: "Software Engineer",
      company: "OROOMA",
      location: "Khartoum, Sudan",
      period: "Jan. 2021 - Apr. 2022",
      description: "Designed and developed user interface and server for multiple websites.",
      technologies: ["React.js", "Kotlin"]
    }
  ],

  projects: [
    {
      title: "Multi-Task Multi-Agent Reinforcement Learning",
      period: "May 2025 - Sep. 2025",
      description: "Master's research on advancing Multi-Agent Reinforcement Learning (MARL) by extending the Sable network architecture to handle multi-task multi-env settings.",
      technologies: ["Python", "JAX", "Flax", "MARL", "Deep Learning"],
      category: "Research"
    },
    {
      title: "Movie Recommender System",
      period: "Nov. 2024",
      description: "Built and developed a movie recommender system using the ALS (Alternating Least Squares) algorithm.",
      technologies: ["Python", "Machine Learning", "Collaborative Filtering"],
      category: "AI/ML"
    },
    {
      title: "Temporal Analysis of Regional Sustainability Using CNNs and Satellite Data",
      period: "May 2020",
      description: "Developed a system to calculate a region's biocapacity from satellite images using convolutional neural networks (CNNs).",
      technologies: ["Python", "PyTorch", "Computer Vision", "Satellite Data"],
      category: "Research"
    },
    {
      title: "SunSeek EV Solar Car",
      period: "Apr. 2018",
      description: "Built a self-charging solar car that tracks sunlight to charge its battery and moves to shade to protect its components.",
      technologies: ["Arduino", "C++", "Solar Technology", "Embedded Systems"],
      category: "Hardware"
    },
    {
      title: "GloveControl System",
      period: "Apr. 2017",
      description: "Built a sensor-equipped glove allowing users to control a computer through hand movements and gestures.",
      technologies: ["Arduino", "C++", "Gesture Recognition", "HCI"],
      category: "Hardware"
    }
  ],

  skills: {
    "Programming Languages": ["Python", "JavaScript", "Java", "C++", "C", "SQL", "HTML/CSS"],
    "AI/ML Frameworks": ["JAX", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV"],
    "Web Technologies": ["React", "Next.js", "Node.js", "Flask", "Django", "FastAPI"],
    "Tools & Platforms": ["Git", "Docker", "Azure", "Google Cloud", "VS Code", "Power BI"],
    "Research Areas": ["Multi-Agent Reinforcement Learning", "Computer Vision", "Satellite Data Analysis", "Deep Learning"]
  },

  awards: [
    {
      title: "Google DeepMind Scholarship",
      date: "Sep. 2024",
      description: "Prestigious scholarship awarded to fully fund Master's studies at AIMS South Africa"
    },
    {
      title: "Academic Excellence Award, AI for Science Master's",
      date: "Aug. 2025",
      description: "Awarded for outstanding academic performance in the AIMS Master's program"
    }
  ],

  researchFocus: {
    area: "Multi-Agent Reinforcement Learning (MARL)",
    description: "Investigating complex decision-making in multi-agent systems, with focus on extending network architectures for multi-task multi-environment settings",
    currentWork: "Research Engineer Intern at InstaDeep, working on large-scale MARL frameworks using JAX"
  },

  languages: [
    { language: "English", proficiency: "IELTS 7.0" },
    { language: "Arabic", proficiency: "Native" }
  ],

  certifications: [
    "Hasso Plattner d-school Afrika - Design Thinking",
    "McKinsey Forward Program - Leadership"
  ]
};

export type PortfolioContext = typeof portfolioContext;
