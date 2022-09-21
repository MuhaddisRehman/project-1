import '../Employees/Employees.css';
import femaleProfile from '../../Assets/Images/femaleProfile.jpg';
import maleProfile from '../../Assets/Images/maleProfile.jpg';
import React, { useState } from 'react'


const Employees = () => {
    const [employees, setEmployees] = useState([{
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
        },
        {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
        },
        {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
        },
        {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
        }]);

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3 m-3">
                <div className="col-8 ">
                    <select name="Teams" id="teams" className='form-select form-select-lg' >
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
                </div>
            <div className="row justify-content-center mt-3 mb-3 m-3">
                <div className="col-12">
                <div className='card-collection'>
                {
                employees.map((employee, index) => (
                    <div id={employee.id}  >
                            {(employee.gender === "male")?<img key={index} src={maleProfile} className="card-img-top" alt="General female profile" />
                                                        :<img key={index} src={femaleProfile} className="card-img-top" alt="General female profile" />}
                        <div className='card-body' >
                            <h5 className="card-title">
                                Full Name: {employee.fullName}
                            </h5>
                            <p className="card-text">
                                Designation: <b>{employee.designation}</b>
                            </p>
                        </div>
                    </div>
                ))
            } 
                </div>
                </div>
            </div>
        </main>
    )
    }

export default Employees