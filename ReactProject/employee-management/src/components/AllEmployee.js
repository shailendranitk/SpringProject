import React, { useEffect, useState } from "react";
import Employee from "./Employee";


const AllEmployee = () => {

    const [employees] = useState([
        { name: "Shailendra", title: "Project Manager" },
        { name: "Rahul", title: "Test Lead" },
        { name: "Ramesh", title: "Lead Developer" },
        { name: "Satish", title: "Perf Tester" },
        { name: "Vijay", title: "Tester" },
        { name: "Alex", title: "Business Analyst" }
    ]);

    useEffect(()=> {
        document.title="All Employee || HRMS Portal"
    },[])

    return (
        <div>
            <h1> All Employees </h1>
            <p>List of all employees</p>

            {
                employees.length > 0 ? employees.map((item) => 
                    <Employee employee={item}/>) : "No employee"
            }

        </div>
    );

};

export default AllEmployee;