import { reactive } from 'vue';


export const store = reactive({

    // ************ DATA ************

    // *** UTILITIES ***

    // * BUTTONS *

    viewCourses: [
        {
            icon: '',
            text: 'View Courses'
        }
    ],
    searchCourses: [
        {
            icon: 'src/assets/icons/search.svg',
            text: 'Search Courses'
        }
    ],
    searchText: [
        {
            icon: 'src/assets/icons/search.svg',
            text: ''
        }
    ],
    applyUniversity: [
        {
            icon: 'src/assets/icons/person-fill-add.svg',
            text: 'Apply for university'
        }
    ],
    browseCourses: [
        {
            icon: '',
            text: 'Browse through courses'
        }
    ],
    readMore: [
        {
            icon: '',
            text: 'Read More'
        }
    ],
    findMore: [
        {
            icon: 'src/assets/icons/plus.svg',
            text: 'Find More'
        }
    ],
    viewEvents: [
        {
            icon: '',
            text: 'View All Events'
        }
    ],
    viewLatestCourse: [
        {
            icon: 'src/assets/icons/eye-regular.svg',
            text: 'View Course'
        }
    ],
    discoverMethod: [
        {
            icon: '',
            text: 'Discover the Method'
        }
    ],
    feesList: [
        {
            icon: '',
            text: 'List of Fees'
        }
    ],
    paperPlane: [
        {
            icon: 'src/assets/icons/paper-plane-solid.svg',
            text: ''
        }
    ],
    angleLeft: [
        {
            icon: 'src/assets/icons/angle-left-solid.svg',
            text: ''
        }
    ],
    angleUp: [
        {
            icon: 'src/assets/icons/angle-up-solid.svg',
            text: ''
        }
    ],
    angleRight: [
        {
            icon: 'src/assets/icons/angle-right-solid.svg',
            text: ''
        }
    ],
    viewTeam: [
        {
            icon: '',
            text: 'View All Team'
        }
    ],
    facebook: [
        {
            icon: 'src/assets/icons/facebook-f-brands-solid.svg',
            text: ''
        }
    ],
    twitter: [
        {
            icon: 'src/assets/icons/twitter-brands-solid.svg',
            text: ''
        }
    ],
    instagram: [
        {
            icon: 'src/assets/icons/instagram-brands-solid.svg',
            text: ''
        }
    ],

    // ******** HEADER ********

    // * NAVBAR *
    navbarLinks: [
        {
          label: 'Home',
          dropdownLinks: [
            'Driving School',
            'High School', 
            'Kinder Garten', 
            'Header Video'
            ],
        },
        {
          label: 'Courses',
          dropdownLinks: [
            'Our Courses', 
            'Single Course', 
            'Instructor Profile', 
            'Become a Teacher'
            ],
        },
        {
          label: 'About Us',
          dropdownLinks: [],
        },
        {
          label: 'News',
          dropdownLinks: [
            'EduPrime Blog', 
            'Single Post', 
            'Category Post'
            ],
        },
        {
          label: 'Pages',
          dropdownLinks: [
            'How It Works', 
            'Single Event', 
            'University Shop', 
            'Single Product'
            ],
        },
        {
          label: 'Contact',
          dropdownLinks: [],
        },
        {
          label: 'Purchase',
          dropdownLinks: [],
        }
      ],

    // * MAIN *
    showcaseYourCourses: [
        {
            title: 'Showcase your courses',
            text: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.'
        }
    ],

    // ******** MAIN ********

    // **** FIRST SECTION ***

    // * Header *
    thousandsCourses: [
        {
            title: 'Thousands of courses for any type of student',
            text: "At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides."
        }
    ],

    // * Main *
    availableFaculties: [
        {
            title: 'Faculties available at EduPrime',
            text: "A single university with a load of courses, tailored to satisfy any student's needs."
        }
    ],

    // --- Faculty-boxes ---

    facultyBoxes: [
        {
            image: 'src/assets/edu/img/Gavel-v2.png',
            title: 'Law Faculty'
        },
        {
            image: 'src/assets/edu/img/Coins-tabs-v2.png',
            title: 'Economy'
        },
        {
            image: 'src/assets/edu/img/Medicine-tabs-v2.png',
            title: 'Medicine'
        },
        {
            image: 'src/assets/edu/img/Computer-tabs-v2.png',
            title: 'Computer Science'
        },
        {
            image: 'src/assets/edu/img/Palette-tabs-v2.png',
            title: 'Graphic Design'
        },
    ],

    // * Footer *

    lawFaculty: [
        {
            title: 'Law Faculty',
            text: "Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions."
        }
    ],

    // **** SECOND SECTION ***

    universityYear: [
        {
            title: 'Orientation',
            text: "First day of the university year, all students gather for the opening ceremony and then network with others."
        },
        {
            title: 'Demo Classes',
            text: "In the first week, students try to accommodate with the teaching style and choose their optional courses."
        },
        {
            title: 'Evaluation',
            text: "At the end of a semester, students take a general evaluation test for every subject they’re learning."
        },
        {
            title: 'Graduation Day',
            text: "On the day of graduation, all students gather for the ceremony and then network and party among others."
        }
    ],

    // **** THIRD SECTION ***

    // * Header *

    latestCourses: [
        {
            image: 'src/assets/edu/img/Decisions-icon.png',
            title: 'Make Better Decisions',
            teacher: 'James Colins',
            price: '$21.00',
        },
        {
            image: 'src/assets/edu/img/Speaker-icon.png',
            title: 'How to be a speaker',
            teacher: 'James Colins',
            price: '$Free',
        },
        {
            image: 'src/assets/edu/img/Network-icon.png',
            title: 'Network Introductions',
            teacher: 'James Colins',
            price: '$Free',
        },
        {
            image: 'src/assets/edu/img/Brand-icon.png',
            title: 'Brand Management',
            teacher: 'James Colins',
            price: '$Free',
        },
    ],

    // * Main *

    // --- Header ---

    examinationMethod: [
        {
            title: 'The most efficient examination method',
            text: "EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject."
        }
    ],

    // --- Footer ---

    variableFees: [
        {
            title: 'Variable fees for international students',
            text: "EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject."
        }
    ],

    // * Footer *

    latestBlog: [
        {
            image: 'https://eduprime.modeltheme.com/wp-content/uploads/2015/02/agreement-business-businessman-872957-1000x580.jpg',
            title: 'Winning Your Business',
            text: 'Never settle for less! You can have everything you want and need. Use the most powerful',
            date: 'February 17, 2019',
        },
        {
            image: 'https://eduprime.modeltheme.com/wp-content/uploads/2015/02/apps-cellphone-communication-340103-1000x580.jpg',
            title: 'Selling Strategies',
            text: 'Never settle for less! You can have everything you want and need. Use the most powerful',
            date: 'February 16, 2019',
        },
        {
            image: 'https://eduprime.modeltheme.com/wp-content/uploads/2015/02/bags-best-friends-daylight-1516440-1000x580.jpg',
            title: 'Good Grades',
            text: 'Never settle for less! You can have everything you want and need. Use the most powerful',
            date: 'February 16, 2019',
        },
    ],

    // ******** FOOTER ********

    // ***** MAIN ******

    // *** HEADER ***
    management: [
        {
            title: 'Management',
            text: "A team of expert teachers that are leading our university! Meet our staff and become a student at EduPrime this year!"
        }
    ],

    managementTeam: [
        {
            image: 'https://eduprime.modeltheme.com/wp-content/uploads/2019/04/member-mentors-5-500x500.jpg',
            name: 'Bruno Dias',
            role: 'Assistant Manager',
        },
        {
            image: 'https://eduprime.modeltheme.com/wp-content/uploads/2019/04/member-mentors-2-500x500.jpg',
            name: 'Laura Zola',
            role: 'Assistant Manager',
        },
        {
            image: 'https://eduprime.modeltheme.com/wp-content/uploads/2019/04/member-mentors-3-500x500.jpg',
            name: 'Thomas Moriz',
            role: 'Regional Manager',
        },
        {
            image: 'https://eduprime.modeltheme.com/wp-content/uploads/2019/04/member-mentors-4-500x500.jpg',
            name: 'Emma Ava',
            role: 'General Director',
        },
        {
            image: 'https://eduprime.modeltheme.com/wp-content/uploads/2019/04/member-mentors-1-500x500.jpg',
            name: 'Sophia Doe',
            role: 'Assistant Manager',
        },
    ],

    // *** MAIN ***

    partners: [
        {
            title: 'Partners',
            text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy."
        }
    ],
    partnersLogos: [
        {
            image: 'src/assets/edu/img/partner-2.png',
            title: 'Medals'
        },
        {
            image: 'src/assets/edu/img/partner-3.png',
            title: 'Lamp'
        },
        {
            image: 'src/assets/edu/img/partner-4.png',
            title: 'Books'
        },
        {
            image: 'src/assets/edu/img/partner-5.png',
            title: 'School Building'
        },
        {
            image: 'src/assets/edu/img/partner-6.png',
            title: 'Handmade'
        },
        {
            image: 'src/assets/edu/img/partner-8.png',
            title: 'Trophy'
        },
        {
            image: 'src/assets/edu/img/partner-1.png',
            title: 'Paperplane'
        },
        {
            image: 'src/assets/edu/img/partner-7.png',
            title: 'ABC Communication'
        },
    ],

    // *** FOOTER ***

    studentsThoughts: [
        {
            facultyImage: 'src/assets/edu/img/Computer-Science.png',
            facultyName: 'Faculty of computer science',
            text: '“I can’t thank EduPrime enough for what it has done for me. I am now a successful doctor at one of the best clinics in the world.”',
            studentImage: 'https://eduprime.modeltheme.com/wp-content/uploads/2019/04/testimonial-2-student-1.png',
            studentName: 'Mask Stevens',
            studentPeriod: 'Student (2012 - 2016)'
        },
        {
            facultyImage: 'src/assets/edu/img/Medicine.png',
            facultyName: 'Faculty of medicine',
            text: '“The most beautiful experience a student can have is attending EduPrime – the best university in the world. I strongly encourage everyone to apply.”',
            studentImage: 'https://eduprime.modeltheme.com/wp-content/uploads/2019/04/testimonial-1-student-1.png',
            studentName: 'Andrew Jackson',
            studentPeriod: 'Student (2015 - 2018)'
        },
        {
            facultyImage: 'src/assets/edu/img/Computer-Science.png',
            facultyName: 'Faculty of computer science',
            text: '“I can’t thank EduPrime enough for what it has done for me. I am now a successful doctor at one of the best clinics in the world.”',
            studentImage: 'https://eduprime.modeltheme.com/wp-content/uploads/2019/04/testimonial-2-student-1.png',
            studentName: 'Eduard Lopez',
            studentPeriod: 'Student (2010 - 2014)'
        },
        {
            facultyImage: 'src/assets/edu/img/Medicine.png',
            facultyName: 'Faculty of medicine',
            text: '“I can’t thank EduPrime enough for what it has done for me. I am now a successful doctor at one of the best clinics in the world.”',
            studentImage: 'https://eduprime.modeltheme.com/wp-content/uploads/2019/04/testimonial-1-student-1.png',
            studentName: 'Will Smith',
            studentPeriod: 'Student (2005 - 2009)'
        },
    ],

    // ***** FOOTER ******

    getEduPrime: [
        'Request a Website',
        'Browse Themes',
        'Payment Options',
        'Support System',
        'Checkout',
        'Purchase Theme'
    ],
    networking: [
        'Purchase Theme',
        'Our Benefits',
        'Our Team',
        'Our Services',
        'Other products',
        'My account'
    ],
    categories: [
        'Economy',
        'Design',
        'Coaching',
        'Business',
        'Medicine',
        'Law',
        'Fitness'
    ]

});