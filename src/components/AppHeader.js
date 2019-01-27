import React, { Component } from 'react'
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button } from 'reactstrap';
import {Link} from "react-router-dom";

class AppHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    getUser = () => {
        return this.props.user ? this.props.user : "User"
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Cool-Shop</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {
                            this.props.user && <Button color="link"><Link to="/cart">My Cart</Link></Button>
                        }
                        <Button color="link"><Link to="/products">Products</Link></Button>
                        <Button color="link"><Link to="/account">My Acount</Link></Button>
                    </Nav>
                </Collapse>
                <Nav className="ml-auto">
                    <NavItem>
                        <h4>Hello {this.getUser()}</h4>
                    </NavItem>
                    <NavItem>
                        <FontAwesomeIcon size="2x" icon={faUserCircle} />
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
  user: state.user.name
})

const mapDispatchToProps = {
  
}


 export default connect(mapStateToProps)(AppHeader)