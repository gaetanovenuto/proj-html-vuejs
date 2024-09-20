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

    // *** HEADER ***

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

    // *** MAIN ***

    // * First-section *
    thousandsCourses: [
        {
            title: 'Thousands of courses for any type of student',
            text: "At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides."
        }
    ],

    // * Second-section *
    availableFaculties: [
        {
            title: 'Faculties available at EduPrime',
            text: "A single university with a load of courses, tailored to satisfy any student's needs."
        }
    ],

    // * Faculty-boxes *

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


    lawFaculty: [
        {
            title: 'Law Faculty',
            text: "Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions."
        }
    ],
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

    

    // METHODS

});