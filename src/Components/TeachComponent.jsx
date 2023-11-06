import React from "react";
import { useNavigate } from 'react-router-dom';
import BaseApp1 from "../Core/Base1";



export default function TeachComponent({ teach, setTeach }) {

    const navigate = useNavigate();
    const deleteTeach = (id) => {
        const alterList = teach.filter((per) => per.id !== id);
        setTeach(alterList);
    }
    return (
        <BaseApp1
            title="Teacher Details">
            <div className="user-content">

                <table>
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Experience</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {teach.map((person, idx) => {
                            return <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                                <td>{person.experience}</td>
                                <td>{person.gender}</td>
                                <td>{person.city}</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn edit-btn"
                                            onClick={() => navigate(`/edits/${person.id}`)}
                                        >Edit</button>
                                        <button className="btn view-btn"
                                            onClick={() => navigate(`/teach/${idx}`)}

                                        >View</button>
                                        <button
                                            className="btn dele-btn"
                                            onClick={() => deleteTeach(person.id)}
                                        >Delete</button>
                                    </div>

                                </td>
                            </tr>

                        })
                        }
                    </tbody>
                </table>
            </div>
        </BaseApp1>
    )
}