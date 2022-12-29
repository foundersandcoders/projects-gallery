console.log("data.js");

const data = {
  weeks: [
    {
      week: -2,
      theme: "Markup - first project of part time course",
      projects: [],
    },
    {
      week: -1,
      theme: "HTTP - second project of part time course",
      projects: [],
    },
    {
      week: 0,
      theme: "Testing - third project of part time course",
      projects: [],
    },
    {
      week: 1,
      theme: "Server",
      projects: [
        {
          title: "Microblogging",
          img: "src/imgs/microblogging.png",
          team: ["Sumithra", "Joe", "Yassien", "Suraj"],
          github: "https://github.com/fac25/week1-server-sumithra-joe-yassien-suraj",
          description: "Our microblogging website allows the user to make comments and read the comments of other users.",
        },
        {
          title: "Unnamed Microblog",
          img: "",
          team: ["Alex", "Manoela", "Patrick", "Paz"],
          github: "https://github.com/fac25/unnamed-microblog",
          description: "As an opinionated person, I want to: post my thoughts so others can read them. As a bored person, I want to: read what other people have posted",
        },
        {
          title: "Server Project",
          img: "",
          team: ["Abby", "Abdullah", "Karwan", "Lisa"],
          github: "https://github.com/fac25/abby-abdulla-karwan-lisa-server",
          description: "This project was made during our first week of FAC full-time bootcamp. Building a project that incorporates the basic functionality of a blog.",
        }
      ],
    },
    {
      week: 2,
      theme: "Database",
      projects: [
        {
          title: "London Attractions Reviews",
          img: "assets/.png",
          team: ["Sumithra", "Joe", "Abdullah", "Paz"],
          github: "https://github.com/fac25/week2-db-Sumithra-Joe-Paz-Abdullah",
          description: "Our London attractions reviews application allows the user to review the most popular attractions",
        },
        {
          title: "Finsbo!",
          img: "",
          team: ["Karwan", "Lisa", "Patrick", "Yassien"],
          github: "https://github.com/fac25/lisa-karwan-patrick-yassien-database",
          description: "Our website allows the user to read the recommended restaurants of others and submit their own restaurant recommendation.",
        },
        {
          title: "Music App",
          img: "",
          team: ["Abby", "Alex", "Manoela", "Suraj"],
          github: "https://github.com/fac25/alex-abby-manoela-suraj-database-B",
          description: "A music sharing app where you can share your favourite songs for your friends!",
        }
      ],
    },
    {
      week: 3,
      theme: "Authentication",
      projects: [
        {
          title: "Bookzie",
          img: "assets/.png",
          team: ["Abby", "Patrick", "Lisa", "Sumithra"],
          github: "https://github.com/fac25/week3-authentication-Abby-Sumithra-Patrick-Lisa",
          description: "Our objective was to create a service which would allow our users to log their reading lists as well as recommend the books to others. The main page would be a collection of all the recommended books - from all users.",
        },
        {
          title: "Authorise Me",
          img: "",
          team: ["Joe", "Manoela", "Karwan", "Yassien"],
          github: "https://github.com/fac25/Joe-Manoela-Karwan-Yassien-Authentication",
          description: "A website for users to share stories that they have written and see (and read) stories written by other users.",
        },
        {
          title: "SGC Board",
          img: "",
          team: ["Abdullah", "Alex", "Paz", "Suraj"],
          github: "https://github.com/fac25/week3-auth_Suraj-Alex-Abdullah-Paz",
          description: "A place to post your STOP GO and CONTINUES.",
        }
      ],
    },
    {
      week: 4,
      theme: "Server-Side App",
      projects: [
        {
          title: "Check-in Questions, the app",
          img: "assets/.png",
          team: ["Abby", "Patrick", "Paz", "Yassien"],
          github: "https://github.com/fac25/week4-server-side-app-Abby-Patrick-Paz-Yassien",
          description: "Our objective was to create a service which would allow our users to log their check-in questions as well as see the ones posted by others. The main page would be a collection of all the check-in questions - from the logged-in user.",
        },
        {
          title: "Petsagram",
          img: "",
          team: ["Joe", "Lisa", "Alex", "Abdullah"],
          github: "https://github.com/fac25/week4-alex-abdullah-joe-lisa",
          description: "A place to post about your pet :)",
        },
        {
          title: "Howdie",
          img: "",
          team: ["Karwan", "Manoela", "Sumithra", "Suraj"],
          github: "https://github.com/fac25/week4-karwan-manoela-sumithra-suraj",
          description: "A website for users to share and view other users how to guide.",
        }
      ],
    },
    {
      week: 5,
      theme: "Client-Side App",
      projects: [
        {
          title: "Hangman",
          img: "assets/.png",
          team: ["Paz", "Karwan"],
          github: "https://github.com/fac25/week5-paz-karwan",
          description: "",
        },
        {
          title: "Tic Tac Toe",
          img: "",
          team: ["Alex", "Sumithra"],
          github: "https://github.com/fac25/week5-Alex-Sumithra-ClientReactApp",
          description: "",
        },
        {
          title: "Flip - Card Memory Game",
          img: "",
          team: ["Abby", "Joe"],
          github: "https://github.com/fac25/week5-Abby-Joe",
          description: "The user flips two cards. If the two cards match, the user will get one point, and the cards will remain flipped.",
        },
        {
          title: "Memory Game",
          img: "assets/.png",
          team: ["Lisa", "Yassien", "Manoela"],
          github: "https://github.com/fac25/fac25-week5-Lisa-Manoela",
          description: "This is a one-page app using React to create an interactive memory game",
        },
        {
          title: "PKC",
          img: "",
          team: ["Patrick", "Abdullah", "Suraj"],
          github: "https://github.com/fac25/week-5-p-a-s",
          description: "It's a piano that counts the amount of keys you press. It has sound...",
        },
        {
          title: "Flip - Card Memory Game",
          img: "",
          team: ["Abby", "Joe"],
          github: "https://github.com/fac25/week5-Abby-Joe",
          description: "The user flips two cards. If the two cards match, the user will get one point, and the cards will remain flipped.",
        }
      ],
    },
    {
      week: 6,
      theme: "Full-stack App",
      projects: [
        {
          title: "Miss Macs",
          img: "src/imgs/missmacs.png",
          team: ["Karwan", "Alex", "Sumithra", "Yassien"],
          github: "https://github.com/fac25/week6-missmacs",
          description: "A food delivery app",
        },
        {
          title: "JAMP on a Book",
          img: "", //need to ask for the img
          team: ["Manoela", "Abdullah", "Patrick", "Joe"],
          github: "https://github.com/fac25/week6-J-A-M-P",
          description:
            "It's a store that displays a list of books for purchase",
        },
        {
          title: "Planty",
          img: "src/imgs/planty.png",
          team: ["Abby ", "Lisa", "Paz", "Suraj"],
          github: "https://github.com/fac25/week-6_ASLP",
          description: "A plants shopping platform",
        },
      ],
    },
    {
      week: 7,
      theme: "In-House Final Projects (Weeks 7-9)",
      projects: [
        {
          title: "Away Days",
          img: "", //can't run the app
          team: ["Karwan", "Alex", "Patrick", "Suraj"],
          github: "https://github.com/fac25/week7-away-days",
          description:
            "It became apparent that there was a hole to be filled with platform to bring together sports fans. What if Couchsurfing met Meetup? This mashup is what we decided to build.",
        },
        {
          title: "Seasonal Calendar",
          img: "src/imgs/sesonal-calendar.png",
          team: ["Lisa", "Abby", "Paz", "Joe"],
          github: "https://github.com/fac25/week7-seasonal-calendar",
          description:
            "Seasonal produce generally requires fewer chemicals and the food miles are often significantly lower as product is grown more locally. This keeps the environmental impact, as well as the cost lower.",
        },
        {
          title: "Bookbrooch",
          img: "src/imgs/bookbrooch.png",
          team: ["Abdullah", "Manoela", "Yassien", "Sumithra"],
          github: "https://github.com/fac25/bookbrooch",
          description:
            "An app where users can save their favorite quotes, search for more quotes and play quote-related games.",
        },
      ],
    },
    {
      week: 10,
      theme: "Tech for Better Projects (Weeks 10-12)",
      projects: [
        {
          title: "AMAI-MTOTO",
          img: "src/imgs/amai-mtoto.png",
          team: ["Sumithra", "Alex", "Patrick", "Yassien"],
          github: "https://github.com/fac25/amai-mtoto",
          description:
            "An app for pregnant women from an African/Carribbean background to get advice and support for their mental and physical wellbeing to improve their health outcomes during and after pregnancy.",
        },
        {
          title: "Cocoon Kids",
          img: "src/imgs/cocoon_kids.png",
          team: ["Lisa", "Karwan", "Paz", "Abdullah"],
          github: "https://github.com/fac25/tfb-cocoon-kids-big-hug",
          description:
            "Cocoon Kids Big Hug is a therapeutic service for children and young adults and parents.",
        },
        {
          title: "Immersive Empathy Training-IET",
          img: "src/imgs/IET.png",
          team: ["Joe", "Manoela", "Abby", "Suraj"],
          github: "https://github.com/fac25/IET-Kebbah",
          description:
            "Our programme will guild the user through a course using a series of questions and videos to bring awareness to their potential unconscious bias.",
        },
      ],
    },
  ],
  people: [],
};
