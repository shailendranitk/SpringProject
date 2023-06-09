import React from "react"
import { Card, CardBody } from "reactstrap";

function Header({ name }) {

    return (
        <div id="header" className="center-text">
            <Card className="my-2 bg-warning">
                <CardBody>
                    <center><h1>Employee Management System</h1></center>
                </CardBody>
            </Card>
        </div>
    )

}

export default Header;



/*
Add Employee

            Edit Employee

            Update Employee


            */