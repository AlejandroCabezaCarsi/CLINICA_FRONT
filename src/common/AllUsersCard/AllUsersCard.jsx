import React from "react";
import "./AllUsersCard.css";
import { Col, Container, Row } from "react-bootstrap";

export const AllUsersCards = ({ name, lastname, email, phoneNumber, role }) => {
  return (
    <div className=" d-flex flex-column justify-content-around">
      <Container fluid className="d-flex flex-row justify-content-around">
        <Row className=" AllUsersCardDesign d-flex justify-content-around mt-3">
          <Col
            xs={7}
            lg={8}
            className="d-flex flex-column justify-content-around align-items-center"
          >
            <Row className="d-flex flex-column text-center">
              <Col>
                <div className="nameA  fontWeight">Name</div>
              </Col>
              <Col>{name}</Col>
            </Row>

            <Row className="d-flex flex-column text-center">
              <Col>
                <div className="emailA fontWeight">Email</div>
              </Col>
              <Col>
                <div className="emailAContent">{email}</div>
              </Col>
            </Row>
            <Row className="d-flex flex-column text-center">
              <Col>
                <div className="roleA fontWeight">Role</div>
              </Col>
              <Col>{role}</Col>
            </Row>
          </Col>

          <Col className="d-flex flex-column justify-content-around align-items-center">
            <Row className="d-flex flex-column text-center">
              <Col>
                {" "}
                <div className="lastnameA fontWeight">Lastname</div>
              </Col>
              <Col>{lastname}</Col>
            </Row>
            <Row className="d-flex flex-column text-center">
              <Col>
                <div className="phoneNumberA fontWeight">Telefono </div>
              </Col>
              <Col>{phoneNumber}</Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-around align-items-center">
                <div className="editaCita m-2"></div>
                <div className="cancelaCita"></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
