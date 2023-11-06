import React from "react";
import { useNavigate} from "react-router-dom";

export default function Nopage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Hi you entered worng place 404</h1>
            <button className="worng-btn"
                onClick={() => navigate("/")}>
                Dashboard
            </button>
        </div>
    )
}