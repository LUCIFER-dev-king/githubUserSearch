import React, { useState, useContext, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='info' light expand='md' style={{ padding: "5px 8px" }}>
      <NavbarBrand>
        <Link to='/' className='text-white' style={{ textDecoration: "none" }}>
          LUCIFER
        </Link>
      </NavbarBrand>

      <NavbarText className='text-white'>
        {context.user?.email ? context.user.email : ""}
        {/*user?.email user and email are object. so drilling through objects
        otherwise user obj is set another var and from that var email needs to be extracted. */}
      </NavbarText>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={!isOpen} navbar>
        <Nav style={{ marginLeft: "auto" }} navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  context.setUser(null);
                }}
                className='text-white'
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to='/signup' className='text-white'>
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/signin' className='text-white'>
                  Sign In
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
