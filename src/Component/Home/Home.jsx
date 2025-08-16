import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Zap, Users } from 'lucide-react';
import './Home.css'
import myImage from '../../../public/img.png'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [customization, setCustomization] = useState({
    primaryColor: '#007AFF',
    accentColor: '#34C759',
    name: 'Abdul Majid Hashmi',
    role: 'Software Engineer',
    heroSubtitle: 'Building robust web applications with cutting-edge technologies and seamless user experiences'
  });

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    work: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };


  // Scroll observer for active section - FIXED VERSION
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Lowered threshold
      rootMargin: '-20% 0px -20% 0px' // Adjusted margins
    };

    const observer = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let activeEntry = null;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeEntry = entry;
        }
      });

      if (activeEntry && activeEntry.intersectionRatio > 0.3) {
        setActiveSection(activeEntry.target.id);
      }
    }, observerOptions);

    // Observe all sections
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId]?.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack Web App',
      description: 'Complete e-commerce solution with React frontend, Node.js backend, MongoDB database, and payment integration',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQxKSIvPgo8cmVjdCB4PSI3MCIgeT0iODAiIHdpZHRoPSIyNjAiIGhlaWdodD0iMTQwIiByeD0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC44Ii8+CjxyZWN0IHg9IjkwIiB5PSIxMDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgcng9IjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjciLz4KPHJlY3QgeD0iMTcwIiB5PSIxMDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgcng9IjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjciLz4KPHJlY3QgeD0iMjUwIiB5PSIxMDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgcng9IjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjciLz4KPGNpcmNsZSBjeD0iMzUwIiBjeT0iNjAiIHI9IjIwIiBmaWxsPSIjMzRDNzU5IiBvcGFjaXR5PSIwLjkiLz4KPHRleHQgeD0iMzQ1IiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSI+JDwvdGV4dD4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkY2QjM1O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjI0OEE7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
      year: '2024',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      id: 2,
      title: 'Doctor Appointment System',
      category: 'Healthcare Web App',
      description: 'Comprehensive healthcare platform for booking appointments, patient management, and medical records',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQyKSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjAiIHI9IjQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuOCIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMDAiIHI9IjE1IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjE4NSIgeT0iMTMwIiB3aWR0aD0iMzAiIGhlaWdodD0iNDAiIHJ4PSI1IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC43Ii8+CjxwYXRoIGQ9Ik0xNzAgMTkwIEwyMzAgMTkwIE0xNzAgMjEwIEwyMzAgMjEwIE0xNzAgMjMwIEwyMTAgMjMwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuNiIvPgo8Y2lyY2xlIGN4PSIzNDAiIGN5PSI2MCIgcj0iMjAiIGZpbGw9IiMzNEM3NTkiIG9wYWNpdHk9IjAuOSIvPgo8cGF0aCBkPSJNMzMwIDYwIEwzNTAgNjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8cGF0aCBkPSJNMzQwIDUwIEwzNDAgNzAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDdBRkY7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM0Qzc1OTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=',
      year: '2024',
      tech: ['React', 'Node.js', 'MySQL', 'Express.js']
    },
    {
      id: 3,
      title: 'Hexagon Block Game',
      category: 'Interactive Game',
      description: 'Addictive puzzle game with hexagonal blocks, built with vanilla JavaScript and Canvas API',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQzKSIvPgo8cG9seWdvbiBwb2ludHM9IjE1MCwxMDAgMTIwLDEyNSAxMjAsMTc1IDE1MCwyMDAgMTgwLDE3NSAxODAsMTI1IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuOCIvPgo8cG9seWdvbiBwb2ludHM9IjI1MCwxMDAgMjIwLDEyNSAyMjAsMTc1IDI1MCwyMDAgMjgwLDE3NSAyODAsMTI1IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuNiIvPgo8cG9seWdvbiBwb2ludHM9IjIwMCw2MCAxNzAsODUgMTcwLDEzNSAyMDAsMTYwIDIzMCwxMzUgMjMwLDg1IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC43Ii8+CjxjaXJjbGUgY3g9IjM1MCIgY3k9IjUwIiByPSIxNSIgZmlsbD0iIzM0Qzc1OSIgb3BhY2l0eT0iMC45Ii8+Cjx0ZXh0IHg9IjM0NSIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPjE8L3RleHQ+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzlDNENCRjtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkY2QjM1O3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==',
      year: '2024',
      tech: ['JavaScript', 'HTML5 Canvas', 'CSS3']
    },
    {
      id: 4,
      title: 'Task Management Dashboard',
      category: 'Productivity App',
      description: 'Full-featured project management tool with team collaboration, real-time updates, and analytics',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQ0KSIvPgo8cmVjdCB4PSI2MCIgeT0iNzAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxNjAiIHJ4PSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjciLz4KPHJlY3QgeD0iMTYwIiB5PSI3MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE2MCIgcng9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPgo8cmVjdCB4PSIyNjAiIHk9IjcwIiB3aWR0aD0iODAiIGhlaWdodD0iMTYwIiByeD0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjcwIiB5PSI5MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzM0Qzc1OSIgb3BhY2l0eT0iMC44Ii8+CjxyZWN0IHg9IjcwIiB5PSIxMTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgcng9IjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjYiLz4KPHJlY3QgeD0iMTcwIiB5PSI5MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iI0ZGNkIzNSIgb3BhY2l0eT0iMC44Ii8+CjxyZWN0IHg9IjI3MCIgeT0iOTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgcng9IjUiIGZpbGw9IiMwMDdBRkYiIG9wYWNpdHk9IjAuOCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkNCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyQTJBMkE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzU3NTc1NztzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=',
      year: '2024',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB']
    },
    {
      id: 5,
      title: 'Social Media API',
      category: 'Backend System',
      description: 'RESTful API with user authentication, post management, and real-time chat functionality',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQ1KSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNiIvPgo8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxMjAiIHI9IjIwIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC43Ii8+CjxjaXJjbGUgY3g9IjI2MCIgY3k9IjEyMCIgcj0iMjAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjciLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMjEwIiByPSIyMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNyIvPgo8cGF0aCBkPSJNMTQwIDEyMCBMMjAwIDE1MCBNMjAwIDE1MCBMMjYwIDEyMCBNMjAwIDE1MCBMMjAwIDIxMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjgiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkYyNDhBO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5QzRDQkY7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
      year: '2024',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io']
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Personal Brand',
      description: 'Responsive portfolio website showcasing full-stack development skills with modern design',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQ2KSIvPgo8cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiByeD0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC44Ii8+CjxyZWN0IHg9IjcwIiB5PSI4MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNyIvPgo8cmVjdCB4PSIxNzAiIHk9IjgwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE1IiByeD0iNyIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNiIvPgo8cmVjdCB4PSIxNzAiIHk9IjEwNSIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNSIgcng9IjciIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjQiLz4KPHJlY3QgeD0iMTcwIiB5PSIxMzAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTUiIHJ4PSI3IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC40Ii8+CjxjaXJjbGUgY3g9IjMwMCIgY3k9IjIwMCIgcj0iMjAiIGZpbGw9IiMzNEM3NTkiIG9wYWNpdHk9IjAuOSIvPgo8cGF0aCBkPSJNMjkwIDIwMCBMMzEwIDIwMCBNMzAwIDE5MCBMMzAwIDIxMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQ2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwN0FGRjtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzRDNzU5O3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==',
      year: '2024',
      tech: ['React', 'CSS3', 'JavaScript', 'Responsive Design']
    }
  ];

  const education = [
    {
      type: 'Course',
      degree: 'DSA , LLD & HLD',
      field: 'Software Development Engineering',
      institution: 'Scaler Academy',
      duration: '2022 - 2024',
      description: 'Specialization in Software Development and Problem Solving, with a strong foundation in algorithms, data structures, software engineering, and web development.'
    },
    {
      type: 'Bachelor\'s Degree',
      degree: 'Bachelor of Technology',
      field: 'Mechanical Engineering',
      institution: 'Marathwada Institute Of Technology, Aurangabad',
      duration: '2018 - 2022',
      description: 'Comprehensive study of Mechanical Engineering with a strong foundation in core engineering principles, problem-solving, and analytical thinking.'
    }

  ];
  const workExperience = [
    {
      type: 'Internship',
      position: 'React Developer Intern',
      company: 'Lexon IT Solution Pvt Ltd.',
      duration: '4 Months (Jan 2025 - April 2025)',
      location: 'Bengaluru, Karnataka, India · Remote',
      description: 'Gained hands-on experience in full-stack development, working with modern web technologies and contributing to real-world projects. Collaborated with senior developers and learned industry best practices.',
      responsibilities: [
        'Developed responsive web applications using React.js and modern JavaScript',
        'Built RESTful APIs using Node.js and Express.js',
        'Worked with databases including MongoDB and MySQL',
        'Collaborated with cross-functional teams using Git for version control',
        'Participated in code reviews and followed agile development practices',
        'Debugged and optimized existing codebase for better performance'
      ],
      technologies: ['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JavaScript', 'Git']
    }
  ];
  const skills = [
    { icon: Code, name: 'HTML5', level: 95, category: 'Frontend' },
    { icon: Code, name: 'CSS3', level: 92, category: 'Frontend' },
    { icon: Code, name: 'JavaScript', level: 90, category: 'Frontend' },
    { icon: Code, name: 'React.js', level: 88, category: 'Frontend' },
    { icon: Zap, name: 'Redux', level: 85, category: 'State Management' },
    { icon: Code, name: 'Node.js', level: 87, category: 'Backend' },
    { icon: Code, name: 'Express.js', level: 89, category: 'Backend' },
    { icon: Code, name: 'MongoDB', level: 84, category: 'Database' },
    { icon: Code, name: 'MySQL', level: 82, category: 'Database' },
    { icon: Code, name: 'DSA', level: 78, category: 'Problem Solving' },
    { icon: Palette, name: 'UI/UX Design', level: 85, category: 'Design' },
    { icon: Users, name: 'API Development', level: 87, category: 'Backend' }
  ];


  return (

    <div className="portfolio" style={{
      '--primary-color': customization.primaryColor,
      '--accent-color': customization.accentColor
    }}>

      {/* Floating Navigation */}
      <nav className="nav-floating">
        <div className="nav-items">
          {['hero', 'about', 'education', 'experience', 'work', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <button className="mobile-menu" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
          {['hero', 'about', 'education', 'experience', 'work', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              className="mobile-nav-item"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" ref={sectionRefs.hero} className="hero section">
        <div className="floating-orbs">
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">{customization.name}</h1>
          <p className="hero-role">{customization.role}</p>
          <p className="hero-subtitle">{customization.heroSubtitle}</p>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Let's Connect
          </button>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img className="about-img" src={myImage} />

            </div>
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with expertise in building scalable web applications
                from conception to deployment. With strong proficiency in modern JavaScript frameworks and
                backend technologies, I create end-to-end solutions that deliver exceptional user experiences.
              </p>
              <br />
              <p>
                My technical arsenal includes React.js and Redux for dynamic frontends, Node.js and Express.js
                for robust backends, and both SQL (MySQL) and NoSQL (MongoDB) databases. I also have a solid
                foundation in Data Structures and Algorithms using Java, which helps me write efficient,
                optimized code.
              </p>
              <br />
              <p>
                I've developed various projects ranging from e-commerce platforms to healthcare management
                systems, always focusing on clean code, responsive design, and seamless user interactions.
                I'm constantly learning new technologies and best practices to stay at the forefront of
                web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" ref={sectionRefs.education} className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-dot"></div>
                <div className="education-content">
                  <div className="education-type">{edu.type}</div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-field">{edu.field}</div>
                  <div className="education-institution">{edu.institution}</div>
                  <div className="education-duration">{edu.duration}</div>
                  <p className="education-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" ref={sectionRefs.experience} className="section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-timeline">
            {workExperience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <div className="experience-type">{exp.type}</div>
                  <h3 className="experience-position">{exp.position}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-location">{exp.location}</div>
                  <div className="experience-duration">{exp.duration}</div>
                  <p className="experience-description">{exp.description}</p>

                  {/* Responsibilities List */}
                  <div className="experience-responsibilities">
                    <h4 className="responsibilities-title">Key Responsibilities:</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="responsibility-item">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="experience-tech">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="experience-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" ref={sectionRefs.work} className="section">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="work-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <div className="project-category">{project.category} • {project.year}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.tech && (
                    <div className="project-tech">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={sectionRefs.skills} className="section">
        <div className="container">
          <h2 className="section-title">Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="skill-card">
                  <div className="skill-category">{skill.category}</div>
                  <Icon size={40} className="skill-icon" />
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="skill-percentage">{skill.level}%</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="section">
        <div className="container">
          <h2 className="section-title">Let's Create Together</h2>
          <div className="contact-content">
            <p className="contact-text">
              Ready to bring your next big idea to life? I'm always excited to collaborate
              on innovative projects that push the boundaries of what's possible in digital design and development.
            </p>
            <div className="contact-links">
              <a href="mailto:hashmiabdulmajid@gmail.com" className="contact-link">
                <Mail size={20} />
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/abdul-majid-hashmi" className="contact-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://github.com/abdulmajidhashmi" className="contact-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                GitHub
              </a>
              <a href="#" className="contact-link">
                <ExternalLink size={20} />
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;