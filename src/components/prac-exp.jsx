import { useState } from "react";

export default function PracExp(){
    const [isEditing, setIsEditing] = useState(true)
    const [experience, setExperience] = useState({
        company: '',
        position: '',
        responsibilities: '',
        dateFrom: '',
        dateUntil: '',
    })

    const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

   return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={experience.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={experience.position}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateFrom"
            value={experience.dateFrom}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateUntil"
            value={experience.dateUntil}
            onChange={handleChange}
          />
          <button onClick={toggleEdit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Company Name: {experience.company}</p>
          <p>Position Title: {experience.position}</p>
          <p>Main Responsibilities: {experience.responsibilities}</p>
          <p>From: {experience.dateFrom} Until: {experience.dateUntil}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}