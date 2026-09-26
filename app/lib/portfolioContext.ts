export const portfolioContext = {
  personalInfo: {
    name: "Omer Ebead",
    title: "AI Researcher & Multi-Agent Reinforcement Learning Specialist",
    email: "omer@aims.ac.za",
    location: "Cape Town, South Africa",
    linkedin: "https://www.linkedin.com/in/omer-ebead-a330a13a2/",
    github: "https://github.com/Mamoro98",
    portfolio: "https://morosama.vercel.app"
  },

  summary: "AI researcher focused on multi-agent reinforcement learning and AI safety. Research Fellow at the Cooperative AI Foundation, with previous research experience at InstaDeep. Author of a paper accepted at NeurIPS 2026 and co-first author of research on offline MARL generalisation.",

  education: [
    {
      degree: "Master's in Mathematical Sciences (AI for Science programme)",
      institution: "Stellenbosch University | AIMS South Africa",
      location: "Cape Town, South Africa",
      period: "Sep. 2024 to Jul. 2025",
      status: "Completed in July 2025",
      highlights: [
        "Google DeepMind Scholarship recipient",
        "Focus on Multi-Agent Reinforcement Learning",
        "Academic Excellence Award (Aug. 2025)"
      ]
    },
    {
      degree: "Bachelor of Science (Honours) in Electrical and Electronic Engineering",
      institution: "University of Khartoum",
      location: "Khartoum, Sudan",
      period: "Aug. 2016 - May 2021"
    }
  ],

  experience: [
    {
      position: "Research Fellow",
      company: "Cooperative AI Foundation",
      location: "Cape Town, South Africa",
      period: "Feb. 2026 to present",
      description: "Built a Python simulation pipeline with Concordia to study how social context shapes information sharing between LLM agents. Authored research on contextual integrity in multi-agent LLM systems, accepted at NeurIPS 2026 and the ICML 2026 AI for Good Workshop.",
      technologies: ["Python", "LLMs", "Concordia"]
    },
    {
      position: "Research Engineer Intern",
      company: "InstaDeep",
      location: "Cape Town, South Africa",
      period: "Aug. 2025 - Jan. 2026",
      description: "Extended multi-task sequence models in Python and JAX, prepared offline datasets, and evaluated generalisation to unseen multi-agent tasks. Co-first-authored research on offline multi-agent reinforcement learning, contributing theoretical analysis and manuscript writing.",
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

  publications: [
    {
      title: "A Generative Model of Contextual Integrity: Appropriate vs. Inappropriate Sharing",
      year: 2026,
      status: "Accepted at NeurIPS 2026 and the ICML 2026 AI for Good Workshop",
      neuripsUrl: "https://openreview.net/forum?id=tnB9Xtbfa6",
      workshopUrl: "https://openreview.net/forum?id=XtQuerhWYV"
    },
    {
      title: "Out-of-Distribution Generalisation with Sequence Models in Offline Multi-Agent Reinforcement Learning",
      year: 2026,
      status: "arXiv preprint; co-first author (equal contribution)",
      url: "https://arxiv.org/abs/2609.03667"
    }
  ],

  projects: [
    {
      title: "Multi-Task Multi-Agent Reinforcement Learning",
      period: "May 2025 to Jul. 2025",
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
    area: "Multi-agent AI safety and contextual integrity",
    description: "Studying how social context shapes information sharing between LLM agents using a Python simulation pipeline with Concordia",
    currentWork: "Research Fellow at the Cooperative AI Foundation since February 2026; previously Research Engineer Intern at InstaDeep from August 2025 to January 2026"
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
