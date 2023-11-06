import React from "react";
import { useNavigate } from 'react-router-dom';

export default function BaseApp1({ title, styles, children }) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className="nav-styles">
                    <span>
                        <button className="nav-btn" onClick={() => navigate("/add/teach")}>
                            Add Teach
                        </button>
                    </span>
                    <span>
                        <button className="nav-btn" onClick={() => navigate("/Teacher")}>
                            Teacher Dashboard
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