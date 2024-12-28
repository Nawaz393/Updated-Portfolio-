import javacript from  "../assets/javascript.png"
import html from  "../assets/html.png"
import css from  "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import react from "../assets/react.png"
import mongo from "../assets/mongodb.png"
import java from "../assets/java.png"
import sql from "../assets/sql-server.png"




interface Skill{

  img:string,
  name:string,
  description:string,
  color:string,
}
export const technologies:Array<Skill> = [
  {
  img: html,
  name: "HTML",
  description: "I am a skilled HTML professional, experienced in creating structured, semantic, and accessible web content.",
  color: "#E34F26" // HTML color
  },
  {
  img: css,
  name: "CSS",
  description: "I am experienced in CSS, proficient in designing visually appealing and responsive web layouts with clean and organized styles.",
  color: "#2965F1" // CSS color
  },
  {
  img:javacript,
  name: "JavaScript",
  description: "I have extensive experience in JavaScript, proficient in developing interactive and dynamic web applications with modern frameworks and libraries.",
  color: "#F7DF1E" // JavaScript color
  },
  {
  img:tailwind,
  name: "Tailwind CSS",
  description: "I am proficient in Tailwind CSS, skilled in utilizing its utility-first approach to create efficient and customizable UI components.",
  color: "#06B6D4" // Tailwind CSS color
  },
  {
  img: react,
  name: "React",
  description: "Experienced in React, adept at building scalable and modular user interfaces with reusable components using React ecosystem.",
  color: "#61DAFB" // React color
  },
  {
  img: mongo,
  name: "MongoDB",
  description: "I have expertise in MongoDB, skilled in designing and implementing database solutions for storing and managing data efficiently.",
  color: "#47A248" // MongoDB color
  },
  {
  img: sql,
  name: "SQL",
  description: "Experienced in SQL, proficient in writing complex queries and optimizing database operations to ensure data integrity and performance.",
  color: "#F29111" // SQL color
  },
  {
  img: java,
  name: "Java",
  description: "Skilled in Java development, experienced in building robust and scalable applications with strong object-oriented programming principles.",
  color: "#007396" // Java color
  }
  ];