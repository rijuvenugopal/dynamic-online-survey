const questionsArray = [
    {
        id: "name",
        text: "What is your name?",
        type: "textbox",
        validation: "words"
    },
    {
        id: "age",
        text: "What is your age?",
        type: "textbox",
        validation: "number from 1-130"
    },
    {
        id: "gender",
        text: "What is your gender?",
        type: "radiobutton",
        options: ["Male", "Female", "Other"]
    },
    {
        id: "profession",
        text: "What is your profession?",
        type: "dropdown",
        options: ["Agriculture", "IT", "Music", "Translator", "Teacher", "Administration", "Others"]
    },
    {
        id: "from-eu",
        text: "Are you from EU?",
        type: "radiobutton",
        options: ["Yes", "No"]
    },
    {
        id: "favourite-city",
        text: "Whis is your favourite city in Germany among these?",
        type: "dropdown",
        options: ["Berlin", "Munich", "Hamburg", "Cologne", "Dusseldorf", "Stuttgart", "Frankfurt", "Nuremberg"]
    },
    {
        id: "company-name",
        text: "What is the name of the company you are working in?",
        type: "textbox",
        validation: "words"
    },
    {
        id: "stay-in-germany",
        text: "How long do you intend to stay in Germany?",
        type: "radiobutton",
        options: ["1 -3 yrs", "3 - 5 yrs", "5 - 8 yrs", "Above 8 yrs"]
    }
];

export default questionsArray;