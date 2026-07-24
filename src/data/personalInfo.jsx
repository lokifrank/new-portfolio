// const personalInfo = [
//     {
//         label: "NAME",
//         value: "Franklin",
//     },
//     {
//         label: "LOCATION",
//         value: "Douala, Cameroon",
//         icon: "location",
//     },
//     {
//         label: "ROLE",
//         value: "Flutter & Laravel Developer",
//     },
//     {
//         label: "EMAIL",
//         value: "franklin@email.com",
//         isLink: true,
//     },
//     {
//         label: "AVAILABILITY",
//         value: "Open to opportunities",
//         badge: true,
//     },
//     {
//         label: "EXPERIENCE",
//         value: "3+ Years",
//     },
// ];

// export default personalInfo;

// const personalInfo = {
//     left: [
//         {
//             label: "NAME",
//             value: " Zacharie Franklin"
//         },
//         {
//             label: "ROLE",
//             value: "Flutter & Laravel Developer"
//         },
//         {
//             label: "AVAILABILITY",
//             value: "Open to opportunities",
//             badge: true
//         }
//     ],

//     right: [
//         {
//             label: "LOCATION",
//             value: "Douala, Cameroon",
//             location: true
//         },
//         {
//             label: "EMAIL",
//             value: "franklinkilleng@email.com",
//             email: true
//         },
//         {
//             label: "EXPERIENCE",
//             value: "3+ Years"
//         }
//     ]
// };

// export default personalInfo;

import {
    faEnvelope,
    faLocationDot,
    faUser,
    faBriefcase,
    faCircleCheck,
    faClock
} from "@fortawesome/free-solid-svg-icons";

const personalInfo = {
    left: [
        {
            label: "NAME",
            value: "Zacharie Franklin",
            icon: faUser
        },
        {
            label: "ROLE",
            value: "Flutter & Laravel Developer",
            icon: faBriefcase
        },
        {
            label: "AVAILABILITY",
            value: "Open to opportunities",
            icon: faCircleCheck,
            badge: true
        }
    ],

    right: [
        {
            label: "LOCATION",
            value: "Douala, Cameroon",
            icon: faLocationDot
        },
        {
            label: "EMAIL",
            value: "franklinkilleng@email.com",
            icon: faEnvelope
        },
        {
            label: "EXPERIENCE",
            value: "3+ Years",
            icon: faClock
        }
    ]
};

export default personalInfo;