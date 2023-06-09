import React, { useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function AddEmployee() {
    useEffect(()=> {
        document.title="Add Employee || HRMS Portal"
    },[])
    return (
        <Form>
            <FormGroup>
                <Label for="Employee Name">
                    Emp Name
                </Label>
                <Input id="empName" name="empName" placeholder="Emp Name PH" type="text" />
            </FormGroup>

            <FormGroup>
                <Label for="Email">
                    Email
                </Label>
                <Input id="email" name="email" placeholder="Emp Email" type="text" />
            </FormGroup>

            <FormGroup>
                <Label for="Designation">
                    Designation
                </Label>
                <Input id="designation" name="designation" placeholder="Designation" type="text" />
            </FormGroup>

            <Container className="text-center">
                <Button color="success">Add Employee</Button>
                <Button color="warning ml-2">Clear</Button>
            </Container>
        </Form>);
}

export default AddEmployee;

