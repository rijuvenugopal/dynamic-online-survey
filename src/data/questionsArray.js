const questionsArray = [
    {
        id: "name",
        text: "What is your name?",
        type: "textbox",
        validation: "words",
        answer: ""
    },
    {
        id: "age",
        text: "What is your age?",
        type: "textbox",
        validation: "number from 1-130",
        answer: ""
    },
    {
        id: "gender",
        text: "What is your gender?",
        type: "radiobutton",
        options: ["Male", "Female", "Other"],
        answer: ""
    },
    {
        id: "profession",
        text: "What is your profession?",
        type: "dropdown",
        options: ["Agriculture", "IT", "Music", "Translator", "Teacher", "Administration", "Others"],
        answer: ""
    },
    {
        id: "from-eu",
        text: "Are you from EU?",
        type: "radiobutton",
        options: ["Yes", "No"],
        answer: ""
    },
    {
        id: "favourite-city",
        text: "Which is your favourite city in Germany among these?",
        type: "dropdown",
        options: ["Berlin", "Munich", "Hamburg", "Cologne", "Dusseldorf", "Stuttgart", "Frankfurt", "Nuremberg"],
        answer: ""
    },
    {
        id: "company-name",
        text: "What is the name of the company you are working in?",
        type: "textbox",
        validation: "words",
        answer: ""
    },
    {
        id: "stay-in-germany",
        text: "How long do you intend to stay in Germany?",
        type: "radiobutton",
        options: ["1 -3 yrs", "3 - 5 yrs", "5 - 8 yrs", "Above 8 yrs"],
        answer: ""
    }
];

export default questionsArray;