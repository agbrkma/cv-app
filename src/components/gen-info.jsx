import { useState } from 'react'

export default function GenInfo(){
    const [isEditing, setIsEditing] = useState(true)
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        })
    }

    const toggleEdit = () =>{
        setIsEditing(!isEditing)
    }

    return (
        <div className='general-info'>
        <h2>General Information</h2>
        {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={info.phone}
            onChange={handleChange}
          />
          <button onClick={toggleEdit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
        </div>
    )

}