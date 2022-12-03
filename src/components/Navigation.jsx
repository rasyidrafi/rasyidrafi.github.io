import { useState } from 'react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { Link, NavLink as NavLinkRouter } from "react-router-dom";

export default () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar
            style={{ height: "10%" }}
            expand="md"
            dark>
            <NavbarBrand>
                <Link to="/" className='brand'>
                    Rasyid Rafi
                </Link>
            </NavbarBrand>
            <NavbarToggler
                onClick={() => setIsOpen(!isOpen)}
            />
            {/* <Collapse navbar isOpen={isOpen} className="justify-content-center">
                <Nav navbar>
                    <NavItem>
                        <NavLink>
                            <NavLinkRouter to="/" className={({ isActive }) =>
                                isActive ? 'brand-link brand-active' : 'brand-link'
                            }>
                                Home
                            </NavLinkRouter>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <NavLinkRouter to="/profile" className={({ isActive }) =>
                                isActive ? 'brand-link brand-active' : 'brand-link'
                            }>
                                Profile
                            </NavLinkRouter>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <NavLinkRouter to="/portfolio" className={({ isActive }) =>
                                isActive ? 'brand-link brand-active' : 'brand-link'
                            }>
                                Portfollio
                            </NavLinkRouter>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <NavLinkRouter to="/contact" className={({ isActive }) =>
                                isActive ? 'brand-link brand-active' : 'brand-link'
                            }>
                                Contact
                            </NavLinkRouter>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='http://blog.rasyidrafi.my.id' className="brand-link">
                            Blog
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse> */}
        </Navbar>
    )
}