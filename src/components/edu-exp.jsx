import { useState } from 'react'

export default function EduExp(){
    const [isEditing, setIsEditing] = useState(true)
    const [education, setEducation] = useState({
        school: '',
        title: '',
        date: '',
    })

    const handleChange = (e) => {
        setEducation({
            ...education,
            [e.target.name]: e.target.value,
        });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div className='education-experience'>
            <h2>Educational Experience</h2>
            {isEditing ? (
                <div>
                    <input
                        type='text'
                        name='school'
                        placeholder='School Name'
                        value={education.school}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='title'
                        placeholder='Title of Study'
                        value={education.title}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='date'
                        placeholder='Date of Study'
                        value={education.date}
                        onChange={handleChange}
                    />
                    <button onClick={toggleEdit}>Submit</button>
                    </div>
            ) : (
                <div>
                    <p>School Name: {education.school}</p>
                    <p>Title of Study: {education.title}</p>
                    <p>Date of Study: {education.date}</p>
                    <button onClick={toggleEdit}>Edit</button>
                </div>
            )}
        </div>
    )
}