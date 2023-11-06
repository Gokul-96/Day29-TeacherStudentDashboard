import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import BaseApp1 from "../Core/Base1";


export default function AddTeach({teach, setTeach }) {
const [name, setName] = useState("");
const [id, setId] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [experience, setExperience] = useState("");
const [gender, setGender] = useState("");
const [city, setCity] = useState("");

const navigate = useNavigate();

const addNewTeach = () => {
  // Create a new teacher object with the input values
  const newTeach = {
      id,
      name,
      email,
      phone,
      experience,
      gender,
      city
  }
  // Log the new teacher object to the console
  console.log(newTeach);

  // Reset the input fields by setting their values to empty strings
  setId("");
  setName("");
  setEmail("");
  setPhone("");
  setExperience("");
  setGender("");
  setCity("");

  // Update the `teach` state array with the new teacher data
  setTeach([...teach, newTeach]);

    // Redirect to the '/Teacher' route using the `history` object
    navigate.push('/Teacher');
}
  return (
    <BaseApp1
    title={"Add A New Teacher Details"}
>
    <div>
        <input
            placeholder="id"
            value={id}
            onChange={(event) => setId(event.target.value)}
        />

        <input
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
        />

        <input
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />

        <input
            placeholder="phone no"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
        />

        <input
            placeholder="experience"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
        />

        <input
            placeholder="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
        />

        <input
            placeholder="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
        />

        <button
            onClick={addNewTeach}
        >Add</button>

    </div>
</BaseApp1>
)
}
