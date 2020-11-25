import React from 'react'
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className = "text-center py-3">
                    Copyright &copy; 2020 Daniel Na, All rights reserved
                </Col>
            </Row>
        </Container>
    )

}

export default Footer
