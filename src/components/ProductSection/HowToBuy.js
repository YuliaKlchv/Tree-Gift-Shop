import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BuyTree from "../../illustrations/undraw_walking_outside_without human.svg";
import CreditCard from "../../illustrations/undraw_Credit_card_re_blml.svg";
import SentGift from "../../illustrations/undraw_send_gift_7o4m.svg";

import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

import "./ProductSection.css";

import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init({});

function HowToBuy() {

    return (
      <div >
        <Container className="HowToBuy">
          <Row>
            <Col md={12}>
              <h1 
                data-aos="zoom-in-up" 
                data-aos-offset="500"
                data-aos-duration="600">How to buy a tree gift?</h1>
            </Col>
            <Col 
              data-aos="fade-up" 
              data-aos-offset="400"
              data-aos-duration="700"
              lg={4} md={12}>
              <Card className="HowToBuyCard">
                <CardBody>
                  <CardImg src={BuyTree} id="picHowTo1" alt="tree" />
                  <CardTitle tag="h5">Choose the tree</CardTitle>
                  <CardText>Choose from many species, countries!</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col 
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-duration="700"
              lg={4} md={12}>
              <Card className="HowToBuyCard">
                <CardBody>
                  <CardImg src={CreditCard} id="picHowTo2" alt="tree" />
                  <CardTitle tag="h5">Buy now</CardTitle>
                  <CardText>We accept all credit cards and PayPal.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col 
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-duration="700" 
              lg={4} md={12}>
              <Card className="HowToBuyCard">
                <CardBody>
                  <CardImg src={SentGift} id="picHowTo3" alt="sentyourgift" />
                  <CardTitle tag="h5">Personalize and gift</CardTitle>
                  <CardText>
                    Write the recipient's name, a dedication and deliver it via
                    email.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );

}

export default HowToBuy;
