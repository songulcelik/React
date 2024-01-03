import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const { pathname } = useLocation();
	const [show, setShow] = useState(false);

	useEffect(() => {
        setShow(false);
    }, [pathname]);

	return (
		<Navbar expand="none" className="bg-info mb-3">
			<Container fluid>
				<Navbar.Brand href="#">REACT.JS Practises</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar`}/>
				<Navbar.Offcanvas
					id={`offcanvasNavbar`}
					aria-labelledby={`offcanvasNavbarLabel`}
					placement="start"
                    show={show}
				>
					<Offcanvas.Header closeButton className="bg-info">
						<Offcanvas.Title id={`offcanvasNavbarLabel`}>
							REACT.JS Practises
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/hello-world">
								Hello World
							</Nav.Link>
							<Nav.Link as={Link} to="/hello-react">
								Hello React
							</Nav.Link>
							<Nav.Link as={Link} to="/jsx1">
								JSX1
							</Nav.Link>
							<Nav.Link as={Link} to="/jsx2">
								JSX2
							</Nav.Link>
							<Nav.Link as={Link} to="/jsx3">
								JSX3
							</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default Header;
