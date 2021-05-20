import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import useStyles from "./styles";

const ProfileUpdateForm = () => {
  const classes = useStyles();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [employeeBio, setEmployeeBio] = useState("");

  useEffect(()=>{
  }, [])

  return (
    <div className={classes.updateForm}>
      <Form>
        <Form.Group as={Row} controlId="email" className={classes.formGroup}>
          <Form.Label column sm="3">
            Email
          </Form.Label>
          <Col sm="9">
            <Form.Control plaintext readOnly defaultValue="email" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="firstname"
          className={classes.formGroup}
        >
          <Form.Label column sm="3">
            Firstname
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="firstname" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="lastname" className={classes.formGroup}>
          <Form.Label column sm="3">
            Lastname
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="lastname" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="title" className={classes.formGroup}>
          <Form.Label column sm="3">
            Title
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="title" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="phone" className={classes.formGroup}>
          <Form.Label column sm="3">
            Phone Number
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="phone" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="location" className={classes.formGroup}>
          <Form.Label column sm="3">
            Location
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="location" />
          </Col>
        </Form.Group>
        <Form.Group controlId="skills" className={classes.formGroup}>
          <Form.Label>Skills</Form.Label>
          <Form.Control as="select" multiple>
            <option>HTML&CSS</option>
            <option>SASS</option>
            <option>JavaScript</option>
            <option>Reactjs</option>
            <option>Material UI</option>
            <option>Nodejs</option>
            <option>Express</option>
            <option>Python</option>
            <option>Firebase</option>
            <option>MongoDB</option>
            <option>AWS</option>
          </Form.Control>
          <Form.Text className="text-muted">
            Press and Hold cmd button to select multiple skills
          </Form.Text>
        </Form.Group>
        <Form.Group className={classes.formGroup}>
          <Form.Label column sm="5">
            Upload a picture
          </Form.Label>
          <Form.File id="profilePicture" />
        </Form.Group>
        <Button variant="primary" type="submit" className={classes.formGroup}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProfileUpdateForm;
