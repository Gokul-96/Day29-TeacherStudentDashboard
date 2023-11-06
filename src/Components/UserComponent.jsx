import React from "react";
import BaseApp from "../Core/Base";
import { useNavigate } from "react-router-dom";



export default function UserComponent({ user, setUser }) {

    const navigate = useNavigate();
    const deleteUser = (idx) => {
        const alterList = user.filter((per, id) => per.id !== idx)
        setUser(alterList);
    }
    return (
        <BaseApp
            title="Student Details">
            <div className="user-content">

                <table>
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>SessionTimings</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {user.map((person, idx) => {
                            return <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td>{person.course}</td>
                                <td>{person.sessionTimings}</td>
                                <td>
                                    <div className="btn-group">

                                        <button className="btn edit-btn"
                                            onClick={() => navigate(`/edit/${person.id}`)}
                                        >Edit</button>
                                        <button className="btn view-btn"
                                            onClick={() => navigate(`/user/${idx}`)}
                                        >
                                            View</button>
                                        <button
                                            className="btn dele-btn"
                                            onClick={() => deleteUser(person.id)}
                                        >Delete</button>
                                    </div>
                                </td>
                            </tr>

                        })
                        }
                    </tbody>
                </table>
            </div>
        </BaseApp>
    )
}