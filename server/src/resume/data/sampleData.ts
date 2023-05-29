import { Resume } from '../entities/resume.entity';

const sampleData: Partial<Resume> = {
  basics: {
    name: 'Alexis Jones',
    email: 'alexis.jones@gmail.com',
    phone: '+1 800 1200 3820',
    birthdate: '1995-08-06',
    photo: {
      url: `https://i.imgur.com/O7iT9ke.jpg`,
      filters: {
        size: 128,
        shape: 'rounded-square',
        grayscale: false,
        border: false,
      },
      visible: true,
    },
    location: 'B 402,KONARK INDRAYU ENCLAVE PHASE 2  NIBM, PUNE L PIN: 411048 ,MAKARASHTRA, INDIA',
    placeofbirth: 'Austria',
    genderandnationality: 'Male & Indian',

  },
  sections: {
    work: {
      id: 'work',
      name: 'Work Experience',
      type: 'basic',
      items: [
        {
          id: 'fe280c61-9d92-4dba-8a08-274866470096',
          url: 'https://www.espritcam.com',
          date: '2015-09-01',
          name: 'DP Technology Corp.',
          summary:
            '  **Responsibilities** \n - Manage website development projects from initial design through completion, optimizing all cross-browser and multi-platform compatibility.\n- Work closely with programmers and clients to meet project requirements, goals, and desired functionality.\n- Develop and integrate customized themes into WordPress, PHP-Fusion, and Concrete5.\nConduct training for clients on handling website content management systems.\n- Enable site-wide promotions by programming HTML5 canvases to animate particles on web backgrounds.',
          about:
            ' ACI Worldwide — the leader in real-time payments — delivers the mission-critical real-time payments software solutions that enable corporations to process and manage digital payments, power omni-commerce payments, present and process bill payments, and manage fraud and risk.',  
          position: 'Frontend Developer, Stuttgart DE',
        },
        {
          id: '285d78f8-df56-4569-ba6b-cff5ebe5381e',
          url: 'https://www.vokophone.com',
          date: '2015-09-01',
          name: 'Voko Communications',
          summary:
            '  **Responsibilities** \n - Developed websites from front to backend using PHP, JavaScript, and HTML.\n- Enhanced user experience and accomplish webpage objectives by creating site structure, navigation, page optimization, and graphics integration.\n- Implemented enhancements that improved web functionality and responsiveness.\n- Designed and maintained both corporate and client websites, using scripting languages and content management systems including WordPress.',
          about:
            ' VTU is one of the largest Technological Universities in India with 24 years of Tradition of excellence in Engineering & Technical Education, Research and Innovations. It came into existence in the year 1998 to cater the needs of Indian industries for trained technical manpower with practical experience and sound theoretical knowledge.',  
          position: 'Frontend Developer',
        },
      ],
      columns: 1,
      visible: true,
    },
   
    skills: {
      id: 'skills',
      name: 'Technical/Soft Skills',
      type: 'basic',
      items: [
        {
          id: 'e27660b2-2b0f-48b0-9b04-3597f0282d06',
          summary: 'Frontend Web Development, Backend Development, Adobe Creative Cloud, Content Management Systems',
        },
      ],
      columns: 1,
      visible: true,
    },
    projects: {
      id: 'projects',
      name: 'Projects',
      type: 'basic',
      items: [
        {
          summary:
            ' - Performed an average of 90+ cold calls daily creating three new qualified prospects exceeding company average by 10%.\n- Managed a $1 million pipeline that supported the creation of 50 new accounts.\n- Sold SaaS and Cloud offering to key accounts including California State University, Ace Athetics and BMI, succeeding in reducing back-up time by 50%.\n\n**Key Projects:** Worked with IT team to create a new web-based leads-generating system, resulting in closed sales increasing by 18% contributing to a $1.5 million increase in profits.',
          id: '8c12add5-605a-449f-a8a6-e7625c702e60',
        },
        
      ],
      columns: 1,
      visible: true,
    },
    education: {
      id: 'education',
      name: 'Education',
      type: 'basic',
      items: [
        {
          id: '3f0eded8-ee1f-4c0e-b4a7-7a0811c150db',
          url: 'https://www.greenriver.edu',
          date: '2015-09-01',
          score: '**Score:** Honors: cum laude (GPA: 3.6/4.0)',
          degree: 'Bachelor of Science',
          affiliation: '**Affiliation:** Harvard University',
          courses: '**Subjects:** Data Structures and Algorithms, Logic Design',
          summary: 'VTU is one of the largest Technological Universities in India with 24 years of Tradition of excellence in Engineering & Technical Education, Research and Innovations. It came into existence in the year 1998 to cater the needs of Indian industries for trained technical manpower with practical experience and sound theoretical knowledge.',
          institution: 'Green River College',
          dop: '**Date of Passing:** 12-05-2016'
        },
        {
          id: 'e4977e01-25bf-4524-95c4-20c77c3cf700',
          url: 'https://www.lsu.edu',
          date: '2015-09-01',
          score: '**Score:** CGPA 8.97',
          degree: 'Bachelor of Arts',
          affiliation: '**Affiliation:** Harvard University',
          courses: '**Subjects:** Copywriting, Product Analysis',
          summary: 'VTU is one of the largest Technological Universities in India with 24 years of Tradition of excellence in Engineering & Technical Education, Research and Innovations. It came into existence in the year 1998 to cater the needs of Indian industries for trained technical manpower with practical experience and sound theoretical knowledge.',
          institution: 'Louisiana State University',
          dop: '**Date of Passing:** 05-05-2016'
        },
      ],
      columns: 1,
      visible: true,
    },

    professionaltrainings: {
      id: 'professionaltrainings',
      name: 'Professional Training',
      type: 'basic',
      items: [
        {
          id: '3f0frt68-e12f-4c8e-de47-6yh7i1c150db',
          summary: 'Good college, Lorem ipsum dolor sit amet, **consectetur adipiscing elit.** Nam scelerisque ac metus sit amet tempor. Sed luctus dui fermentum aliquet dapibus.',    
        },
      ],
      columns: 1,
      visible: true,
    },

    extracurriculars: {
      id: 'extracurriculars',
      name: 'Extra Curricular Achievements',
      type: 'basic',
      items: [
        {
          id: '1f5rst68-e12f-4c8e-de47-6yh7i1c150db',
          summary: 'Extra Good college, Lorem ipsum dolor sit amet, **consectetur adipiscing elit.** Nam scelerisque ac metus sit amet tempor. Sed luctus dui fermentum aliquet dapibus.',    
        },
      ],
      columns: 1,
      visible: true,
    },

    vocationaltrainings: {
      id: 'vocationaltrainings',
      name: 'Vocational Training',
      type: 'basic',
      items: [
        {
          id: 'vfgr5t68-e12f-b65e-b147-uhn6i1c150db',
          date: '12-03-2018',
          name: 'HAL pvt ltd',
          summary: 'Good college, Lorem ipsum dolor sit amet, **consectetur adipiscing elit.** Nam scelerisque ac metus sit amet tempor. Sed luctus dui fermentum aliquet dapibus.',    
        },
        {
          id: '98t4gt68-a12f-g55e-hg57-ac7li1c150db',
          date: '13-04-2019',
          name: 'IBM pvt ltd',
          summary: 'Good college, Lorem ipsum dolor sit amet, **consectetur adipiscing elit.** Nam scelerisque ac metus sit amet tempor. Sed luctus dui fermentum aliquet dapibus.',    
        },
      ],
      columns: 1,
      visible: true,
    },

    entranceexams: {
      id: 'entranceexams',
      name: 'Entrance Exams',
      type: 'basic',
      items: [
        {
          id: 'vfgr5t68-e12f-b65e-b147-uhn6i1c150db',
          name: 'GRE',
          summary: 'August 7, 2018: SCORE 308.0\n\n(V 145, Q 160, AWA 3.0)',    
        },
        {
          id: '98t4gt68-a12f-g55e-hg57-ac7li1c150db',
          name: 'GATE',
          summary: '25/01/2020: SCORE 25.63/100',    
        },
      ],
      columns: 2,
      visible: true,
    },


    interests: {
      id: 'interests',
      name: 'Interests',
      type: 'basic',
      items: [
        {
          summary: 'Video Games, Football, Mindfulness, Artificial Intelligence',
          id: 'ddebb0e1-0a49-4ca6-be8a-956f10f62307',
        },
      ],
      columns: 1,
      visible: true,
    },
    languages: {
      id: 'languages',
      name: 'Languages',
      type: 'basic',
      items: [
        {
          name: 'TOELF',
          level: 'ENGLISH: Proficient \n\n Test Date: June 02, 2021: TOEFL(SCORE 101) \n\n Reading: 21, Listening: 26, Speaking: 26, Writing: 28',
          id: 'dd9eb2b8-2956-463b-b0b1-0ffef84f9fc2',
        },
        {
          name: 'German',
          level: 'GERMAN: Average \n\n 01.10.2019: GERMAN(SCORE 69) \n\n Listening 14.94, Reading 16.6, Writing 17.43, Speaking 19.92',
          id: '6cf99d85-4efc-4ff8-9a7f-e76abd2d2857',
        },
        {
          name: 'IELTS',
          level: 'ENGLISH: Proficient \n\n 19/03/2020: IELTS(SCORE 7.5) \n\n Listening 8.5, Reading 7.0, Writing 6.5, Speaking 7.0 ',
          id: '6cf99d85-4efc-4ff8-9a7f-e76abd2d2857',
        },
      ],
      columns: 1,
      visible: true,
    },
  },
  metadata: {
    css: {
      value: 'padding: 50px',
      visible: false,
    },
    locale: 'en',
    date: {
      format: 'MMMM DD, YYYY',
    },
    theme: {
      text: '#000000',
      primary: '#979594',
      background: '#ffffff',
    },
    layout: [
      [
        ['work', 'education'],
        [],
      ],
      [
        ['skills', 'languages','entranceexams'],
        [ 'interests','vocationaltrainings'],
      ],
      [['projects','professionaltrainings'],['extracurriculars']],
    ],
    template: 'castform',
    typography: {
      size: {
        body: 10,
        heading: 32,
      },
      family: {
        body: 'Open Sans',
        heading: 'Open Sans',
      },
    },
  },
  public: true,
};

export default sampleData;
