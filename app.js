const movieDesc = [
  {
    title: "Back to the Future",
    genre: ["Adventure", "Comedy", "Sci-Fi"],
    year: "1985",
    duration: "1h 56m",
    director: "Robert Zemeckis",
    writers: ["Robert Zemeckis", "Bob Gale"],
    stars: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    image: "images/BTTF.gif",
  },
  {
    title: "Terminator 2: Judgment Day",
    genre: ["Action", "Sci-Fi"],
    year: "1991",
    duration: "2h 17m",
    director: "James Cameron",
    writers: ["James Cameron", "William Wisher"],
    stars: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"],
    description:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
    image: "images/Terminator2.gif",
  },
  {
    title: "Tremors",
    genre: ["Comedy", "Horror"],
    year: "1990",
    duration: "1h 36m",
    director: "Ron Underwood",
    writers: ["S.S. Wilson", "Brent Maddock", "Ron Underwood"],
    stars: ["Kevin Bacon", "Fred Ward", "Finn Carter"],
    description:
      "Natives of a small isolated town defend themselves against strange underground creatures which are killing them one by one.",
    image: "images/Tremors.gif",
  },
  {
    title: "Jurassic Park",
    genre: ["Action", "Adventure", "Sci-Fi"],
    year: "1993",
    duration: "2h 7m",
    director: "Steven Spielberg",
    writers: ["Michael Crichton", "David Koepp"],
    stars: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    description:
      "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    image: "images/JurassicPark.gif",
  },
  {
    title: "Ace Ventura: Pet Detective",
    genre: ["Comedy"],
    year: "1994",
    duration: "1h 26m",
    director: "Tom Shadyac",
    writers: ["Jack Bernstein", "Tom Shadyac", "Jim Carrey"],
    stars: ["Jim Carrey", "Courteney Cox", "Sean Young"],
    description:
      "A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins.",
    image: "images/AceVenturaPetDetective.gif",
  },
];

// let a = document.querySelector(".title");

// a.insertAdjacentHTML("beforebegin", "<h1>Hello! The movie name is:</h1>");

// console.log(a);

// let b = document.querySelector(".year");
// const yearValue = b.innerHTML;
// const fullValue = b.outerHTML;
// console.log(yearValue);
// console.log(fullValue);

// b.innerHTML = "now its new text";

// const newElem = document.createElement("div");
// newElem.innerHTML = `<h1>Hello, ${movieDesc[0].director}</h1>`;
// console.log(newElem);

// let c = document.querySelector(".description");
// c.prepend(newElem);

// function findSCM(num1, num2) {
//   let lowNum = Math.min(num1, num2);
//   let highNum = Math.max(num1, num2);
//   for (let i = highNum; i <= highNum * lowNum; i += highNum) {
//     if (i % lowNum === 0) {
//       return i;
//     }
//   }
// }
// function smallestCommons(arr) {
//   let lowNum = Math.min(...arr);
//   let highNum = Math.max(...arr);
//   let SCM = findSCM(...arr);
//   for (let k = lowNum; k <= highNum; k++) {
//     if (SCM % k !== 0) {
//       SCM = findSCM(SCM, k);
//     }
//   }
//   return SCM;
// }

// console.log(smallestCommons([1, 5]));
// console.log("a");
