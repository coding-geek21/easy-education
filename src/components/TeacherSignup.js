import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";



class TeacherSignup extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: null,
      experience: null,
      qualification: null
    };
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        console.log("email");
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;

      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;
      case "qualification":
        this.setState({ qualification: e.target.value });
        break;
      case "experience":
        this.setState({ experience: e.target.value });
        break;
      default:
        break;
    }
  };

  formIsValid = () => {
    return this.state.password === this.state.passwordConfirmation;
  };

  submitSignup = (e) => {
    e.preventDefault();
    if (!this.formIsValid()) {
      this.setState({ signupError: "Passwords do not match" });
      return;
    }
    if(this.state.email !== null && this.state.password !== null && this.state.qualification != null && this.state.experience != null){
        alert("Signup successfull, please login now.");}
        else{
            alert("Please fill up all the details.");
    
        }
    
  };

  render() {
    return (
      <>
        <Card
          style={{
            width: "40vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4vh",
            marginBottom: "4vh",
            backgroundImage: "linear-gradient(to right, white , #6EE2CD)"
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "#6c6c6c",
              color: "#6EE2CD",
              fontFamily: '"Merriweather", serif',
              fontSize: "1.25rem",
            }}
            as="h5"
          >
            Teacher Signup
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => this.submitSignup(e)}>
              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicEmail"
                onChange={(e) => this.userTyping("email", e)}
              >
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicPassword"
                onChange={(e) => this.userTyping("password", e)}
              >
                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                <Form.Control
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group
                style={{ textAlign: "left", marginBottom: "1.6vh" }}
                controlId="formBasicPassword"
                onChange={(e) => this.userTyping("passwordConfirmation", e)}
              >
                <Form.Label style={{ fontWeight: "bold" }}>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  style={{ borderColor: "#6EE2CD",color: "#000000" }}
                  type="text"
                  placeholder="Re-enter Password"
                />
              </Form.Group>

              <Form.Group
                style={{ textAlign: "left" }}
                onChange={(e) => this.userTyping("qualification", e)}
              >
                <Form.Label style={{ fontWeight: "bold" }}>
                  Qualification
                </Form.Label>
                <Form.Control
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter your qualification"
                />
              </Form.Group>

              <Form.Group
                style={{ textAlign: "left" }}
                onChange={(e) => this.userTyping("experience", e)}
              >
                <Form.Label style={{ fontWeight: "bold" }}>
                Experience
                </Form.Label>
                <Form.Control
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter your teaching experience (in years)"
                />
              </Form.Group>

              <Form.Group style={{ textAlign: "left", fontSize: "1.5vh" }}>
                <Link to="/techerSignin">
                  <a style={{ fontWeight: "bold" }}>
                    Already have an account? Sign in
                  </a>
                </Link>
              </Form.Group>

              {this.state.signupError ? (
                <Form.Text
                  style={{ paddingBottom: "0.6vh", fontWeight: "bold" }}
                  className="text-danger"
                >
                  {this.state.signupError}
                </Form.Text>
              ) : null}
              <Button
                style={{ color: "#6EE2CD", fontWeight: "bold" }}
                variant="secondary"
                type="submit"
              >
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default TeacherSignup;
