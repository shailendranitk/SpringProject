import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";

const Employee = ({employee}) => {
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{employee.name}</CardSubtitle>
                <CardText>{employee.title}</CardText>
                <Container className="text-center">
                    <Button color="primary">Update</Button>
                    <Button color="danger ml-3">Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Employee