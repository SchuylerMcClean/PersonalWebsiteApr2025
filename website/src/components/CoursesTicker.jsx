import React from "react";

const courses = [
  "Data Structures",
  "Analysis and Design of Computer Algorithms",
  "Software Systems Development and Integration",
  "Operating Systems",
  "Software Testing and Integration",
  "Discrete Mathematics",
  "Linear Algebra",
  "Object Oriented Programming",
  "Statistics",
  "Advanced Calculus",
  "Microcomputers and Computer Architecture",
  "Web Design and Development",
  "User Interface Design",
];

const CoursesTicker = () => {
  const items = [...courses, ...courses];

  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {items.map((course, i) => (
          <span key={i} className="ticker-item">
            {course}
            <span className="ticker-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CoursesTicker;
