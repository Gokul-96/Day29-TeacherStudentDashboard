import React from "react";
import { useNavigate } from 'react-router-dom';

export default function BaseApp({ title, styles, children }) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className="nav-styles">
                    <span>
                        <button className="nav-btn" onClick={() => navigate("/add/user")}>
                            Add User
                        </button>
                    </span>
                    <span>
                        <button className="nav-btn" onClick={() => navigate("/Student")}>
                            Student Dashboard
                        </button>
                    </span>
                    <span>
                        <button className="nav-btn" onClick={() => navigate("/")}>
                            Home
                        </button>
                    </span>
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="childred">{children}</div>
            <footer>
                <p>Copyright © Your Website 2023</p>
            </footer>
        </div>
    );
}