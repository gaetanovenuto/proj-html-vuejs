import { reactive } from 'vue';

export const store = reactive({

    // ************ DATA ************



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
    thousandsCourses: [
        {
            title: 'Thousands of courses for any type of student',
            text: "At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides."
        }
    ],
    availableFaculties: [
        {
            title: 'Faculties available at EduPrime',
            text: "A single university with a load of courses, tailored to satisfy any student's needs."
        }
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