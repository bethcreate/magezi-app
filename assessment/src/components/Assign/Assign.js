import React, { useState } from 'react'
import Axios from 'axios'
import '../../App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



function AssignChores() {
    const [Name, setName] = useState("");
    const [setChore] = useState("");
    const [setTask] = useState("");

    const submitTask = () => {
        Axios.Child('http://localhost:5000/api/create', { Name: Name, });
    }

        return (
            <form className="assignform">
                <div>
                    <h1>Assign children chores</h1>

                    <h2>Day of the week</h2>
                    <div className="days">
                        <select>
                            <option placeholder="Monday" />
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>

                        </select>
                    </div>
                    <div className="assignform">
                        <h3 className="child">Child</h3>
                        <h3 className="chore">Chores</h3>

                        

                        <label>Name: </label>
                        <input type="text" onChange={(e) => {
                            setName(e.target.value)
                        }} />
                        <label>Chore: </label>
                        <input type="text" onChange={(e) => {
                            setTask(e.target.value)
                        }} />
                        {/* <label>Chore Text</label> */}
                        {/* <textarea onChange={(e) => {
                            setChore(e.target.value)
                        }}></textarea> */}
                        <button>
                        <Link to= "/taskList"className="btn">Assign</Link>
                        </button>
                    </div>
                </div>
            </form>
        )
}

export default AssignChores;

