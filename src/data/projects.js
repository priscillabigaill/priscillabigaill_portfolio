const data = [
  {
    title: 'Artwork Realness Analyzer (ARA)',
    subtitle: 'AI-Generated vs Human-Created Artwork Classifier',
    image: '/images/projects/ara_artwork_realness_analyzer.png',
    date: '2024-12-24',
    desc:
      'ARA is a web application that classifies artwork into five categories: Real, DALL-E, Flux, MidJourney, and Stable Diffusion.'
      + 'It uses deep learning models like ResNet-50, MobileNetV3, EfficientNetV2-B0, VGG-9, and VGG-16 to differentiate between AI-generated and human-created artwork.'
      + 'The app provides image verification through a UID system and stores verified artworks in a database for future authentication.',
    technologies: ['React', 'FastAPI', 'Docker', 'Supabase', 'Deep Learning', 'CNN'],
    repo: 'https://github.com/priscillabigaill/ARA_artwork_realness_analyzer',
  },
  {
    title: 'Multi-Level Security Locker System',
    subtitle: 'Arduino-Based Security System with Biometric Authentication',
    image: '/images/projects/multilevel_security_locker.png',
    date: '2024-12-24',
    desc:
      'An Arduino-powered locker system with multi-level security features, combining fingerprint and face recognition for authentication. '
      + 'Includes an override code for emergencies and an alarm system for unauthorized access attempts. '
      + 'Designed for school environments to ensure safe and controlled locker access.',
    technologies: ['Arduino', 'C++', 'Biometrics', 'Face Recognition', 'IoT'],
    repo: 'https://github.com/priscillabigaill/multilevel_security_locker',
  },
  {
    title: 'Mori: Supply Chain System',
    subtitle: 'Web Application Development and Security Final Project',
    image: '/images/projects/mori_frontend.png',
    date: '2023-08-01',
    desc:
      'Mori is an application designed to streamline the supply chain of moringa leaves production. '
      + 'Features role-based functionalities for Centra, Harbor Guard, XYZ, and Admin to manage collection, processing, shipping, and tracking efficiently. '
      + 'Built using modern web technologies with support for real-time monitoring and user management.',
    technologies: ['JavaScript', 'React', 'Frontend Development', 'NPM'],
    repo: 'https://github.com/WADSFinalProject/Mori_frontend',
  },
  {
    title: 'Customer Relationship Management (CRM) and Upselling Strategies for Revenue Maximization in Telecommunications',
    subtitle: 'Utilizing Predictive Models and Machine Learning for Optimizing Upsell Opportunities',
    image: '/images/projects/crm_upselling_strategies.png',
    date: '2024-12-24',
    desc: 'This study looks at using CRM and upselling strategies to increase revenue in telecom. It uses machine learning models like XGBoost, Random Forest, and Decision Trees to predict upsell opportunities and improve customer retention. Key elements include predicting outcomes, analyzing important factors, and using data to boost revenue.',
    technologies: ['Machine Learning', 'XGBoost', 'Random Forest', 'Decision Trees', 'Data Analytics'],
    repo: 'https://drive.google.com/file/d/1ZBiyc0XkXs0WR3StCXBsQxc082s_TQe3/view?usp=sharing',
  },
  {
    title: 'Course Management System',
    subtitle: 'Data Structures and Algorithms Final Project',
    image: '/images/projects/course_management_system.png',
    date: '2023-01-15',
    desc:
      'A course management system designed to help educational institutions efficiently manage courses and student enrollments. '
      + 'Developed as a final project for a Data Structures and Algorithms course, it features functionalities such as adding, removing, and modifying courses, '
      + 'viewing course details, and managing student enrollments. Includes benchmarking and demos using data structures like ArrayList, LinkedList, HashMap, and Binary Search Tree.',
    technologies: ['Java', 'Data Structures', 'Algorithms'],
    repo: 'https://github.com/priscillabigaill/course_management_system',
  },
  {
    title: 'Particle Simulator',
    subtitle: 'Interactive Particle Simulation with Real-Time GUI',
    image: '/images/projects/particle_simulator.png',
    date: '2024-12-24',
    desc:
      'This Python-based particle simulator features a real-time graphical user interface for creating and editing particle scenes. '
      + 'Users can interact with particles by selecting, moving, and adding them through different mouse modes, with customizable properties like radius, mass, and velocity. '
      + 'The simulation includes settings for gravity, air resistance, temperature, and simulation speed, allowing for a wide range of interactive scenarios.',
    technologies: ['Python', 'Pynput', 'NumPy', 'OpenCV', 'PIL'],
    repo: 'https://github.com/priscillabigaill/particle_simulator',
  },
  {
    title: 'Sentiment Analysis Algorithm Benchmarking',
    subtitle: 'Advanced Data Analytics Final Project',
    image: '/images/projects/sentiment_analysis.png',
    date: '2023-03-15',
    desc:
      'A project exploring the performance of TF-IDF and Word2Vec algorithms for sentiment analysis on e-commerce datasets. '
      + 'Features algorithm benchmarking on metrics like accuracy, precision, recall, F1-score, and resource usage. '
      + 'Includes implementations of LinearSVC and Gaussian Naive Bayes classifiers, and comprehensive visualizations for insights.',
    technologies: ['Python', 'NLP', 'TF-IDF', 'Word2Vec', 'LinearSVC', 'Naive Bayes'],
    repo: 'https://github.com/priscillabigaill/sentiment_analysis',
  },
  {
    title: 'Literarium Database',
    subtitle: 'Java Swing-Based Digital Bookstore Simulation',
    image: '/images/projects/literarium_database.png',
    date: '2024-12-24',
    desc:
      'Literarium is a Java Swing-based desktop application simulating a digital bookstore with two user roles: Admin and Customer. '
      + 'Admins can manage book and customer inventories, while Customers can browse books, add them to their bill, and print receipts. '
      + 'The application features a user-friendly graphical interface, providing an immersive experience of a virtual bookstore.',
    technologies: ['Java', 'Swing', 'SQL'],
    repo: 'https://github.com/priscillabigaill/DB_Literarium',
  },
  {
    title: 'Angry Timmy',
    subtitle: 'Algorithm and Programming Final Project',
    image: '/images/projects/angryTimmy.png',
    date: '2023-01-15',
    desc:
    'An interactive Discord bot featuring a Battleship game, Magic 8-ball, and Akinator functionality. '
    + 'Built as a final project for an algorithm and programming course, it is designed to bring fun and engagement to Discord servers. '
    + 'Developed using Python and libraries like Nextcord, Asyncio, and Akinator, it includes a demonstration video and setup instructions.',
    technologies: ['Python', 'Discord API', 'JSON'],
    repo: 'https://github.com/priscillabigaill/angry_timmy',
  },
  {
    title: 'MOM+',
    subtitle: 'Pregnancy Journey Website for Moms',
    image: '/images/projects/momplus.png',
    date: '2024-12-24',
    desc:
      'mom+ is a website designed to support moms and their loved ones throughout the pregnancy journey. '
      + 'It offers features like month-by-month articles, a due-date calculator, and a BMI calculator to assist during pregnancy. '
      + 'The website includes various pages such as a home page, article pages, and the calculators, all designed with a user-friendly interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/priscillabigaill/AJA_momplus',
  },
  {
    title: 'Budget Buddy',
    subtitle: 'Object-Oriented Programming Final Project',
    image: '/images/projects/budgetbuddy.png',
    date: '2023-06-01',
    desc:
      'A user-friendly expense tracker system developed as a final project for an Object-Oriented Programming (OOP) course. '
      + 'Includes features such as account creation, transaction management, detailed transaction views, and expense visualization with PieChart. '
      + 'Accompanied by a demonstration video, UML diagram, and report.',
    technologies: ['Java', 'JavaFX', 'OOP'],
    repo: 'https://github.com/priscillabigaill/budget_buddy',
  },
  {
    title: 'Parking Meter with Finite State Machine',
    subtitle: 'A Parking Meter System Built with FSM in C',
    image: '/images/projects/parking-meter.png',
    date: '2024-12-24',
    desc:
      'This repository contains the implementation of a parking meter system using Finite State Machine (FSM) in C. '
      + 'The system reads a car’s identity and license plate, records parking time, and processes user input for parking duration. '
      + 'It uses buttons and a card reader to control the parking meter states (Idle, 1 Hr, 2 Hrs, 3 Hrs, Print) and outputs to a display and receipt printer.',
    technologies: ['C', 'Finite State Machine'],
    repo: 'https://github.com/priscillabigaill/FSM_parking_meter_machine',
  },
];

export default data;
