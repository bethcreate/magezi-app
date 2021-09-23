import React from "react";
import { Link } from 'react-router-dom';

function TaskList(){
    return(
    <div>

        <h1>Children and their assigned chores in this week</h1>
        
        <button>
            <Link to= "/LandingPage" className="btn">Home</Link>
            </button>
    </div>

)}
export default TaskList