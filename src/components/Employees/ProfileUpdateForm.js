import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import useStyles from "./styles";

const ProfileUpdateForm = () => {
  const classes = useStyles();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);

  const updateProfile =async () => {
    const token = await getAccessTokenSilently();

    const updatedInfo = {
      given_name: firstname,
      family_name: lastname,
      title,
      contact_number: phoneNumber,
      bio,
      location,
      skills,
    };

    try {
      const { data } = await axios({
        url: `${process.env.REACT_APP_SERVER_URL}/users/updateprofile`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: updatedInfo,
      });
      console.log(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateProfile();
    console.log(e.target.elements.controlId.value);
  };
  
  return (
    <div className={classes.updateForm}>
      <h2>This is the Update page</h2>
      <Form onSubmit={onSubmit} role="form">
        {/* Email */}
        <Form.Group as={Row} controlId="email" className={classes.formGroup}>
          <Form.Label column sm="3">
            Email
          </Form.Label>
          <Col sm="9">
            <Form.Control plaintext readOnly defaultValue="email" />
          </Col>
        </Form.Group>
        {/* Firstname */}
        <Form.Group
          as={Row}
          controlId="firstname"
          className={classes.formGroup}
        >
          <Form.Label column sm="3">
            Firstname
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="firstname"
              onChange={(e) => setFirstname(e.target.controlId.value)}
            />
          </Col>
        </Form.Group>
         {/* Lastname */}
        <Form.Group as={Row} controlId="lastname" className={classes.formGroup}>
          <Form.Label column sm="3">
            Lastname
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="lastname"
              onChange={(e) => setLastname(e.target.controlId.value)}
            />
          </Col>
        </Form.Group>
        {/* Title */}
        <Form.Group as={Row} controlId="title" className={classes.formGroup}>
          <Form.Label column sm="3">
            Title
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="title"
              onChange={(e) => setTitle(e.target.controlId.value)}
            />
          </Col>
        </Form.Group>
        {/* Phone Number */}
        <Form.Group
          as={Row}
          controlId="phoneNumber"
          className={classes.formGroup}
        >
          <Form.Label column sm="3">
            Phone Number
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="phone"
              onChange={(e) => setPhoneNumber(e.target.controlId.value)}
            />
          </Col>
        </Form.Group>
        {/* Location */}
        <Form.Group as={Row} controlId="location" className={classes.formGroup}>
          <Form.Label column sm="3">
            Location
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="location"
              onChange={(e) => setLocation(e.target.controlId.value)}
            />
          </Col>
        </Form.Group>
        {/* Skills */}
        <Form.Group controlId="skills" className={classes.formGroup}>
          <Form.Label>Skills</Form.Label>
          <Form.Control
            as="select"
            multiple
            onChange={(e) => setSkills(e.target.controlId)}
          >
            <option value="HTML&CSS">HTML&CSS</option>
            <option value="SASS">SASS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Reactjs">Reactjs</option>
            <option value="Material UI">Material UI</option>
            <option value="Nodejs">Nodejs</option>
            <option value="Express">Express</option>
            <option value="Python">Python</option>
            <option value="Firebase">Firebase</option>
            <option value="MongoDB">MongoDB</option>
            <option value="AWS">AWS</option>
          </Form.Control>
          <Form.Text className="text-muted">
            Press and hold cmd button to select multiple skills
          </Form.Text>
        </Form.Group>
         {/* Bio */}
        <Form.Group as={Row} controlId="bio" className={classes.formGroup}>
          <Form.Label column sm="3">
            Bio
          </Form.Label>
          <Col sm="9">
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setBio(e.target.controlId)}
            />
          </Col>
        </Form.Group>
         {/* Upload Picture */}
        <Form.Group className={classes.formGroup}>
          <Form.Label column sm="5">
            Upload a picture
          </Form.Label>
          <Form.File id="profilePicture" />
        </Form.Group>
        {/* Submit Button */}
        <Button variant="primary" type="submit" className={classes.formGroup}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProfileUpdateForm;
