import React, { Component } from 'react'
import {connect} from "react-redux";
import {Link, Route} from "react-router-dom";
import {Row, Col, Button, ButtonGroup} from "reactstrap"

import userActions  from "../reducers/userActions";
import Login from "./Login";
import Register from "./Register";

class AppAcount extends Component {

    logout = () => {
        this.props.dispatch({type: userActions.LOGOUT});
    }

    render() {
        return (
        <div>
            <Row>
                <div style={{margin: "auto"}}>
                {
                        this.props.authenticated ?
                        (<ButtonGroup>
                            <Button onClick={this.logout} color="primary">
                                Logout
                            </Button>
                        </ButtonGroup>) :
                        (<ButtonGroup>
                            <Button color="primary">
                                <Link style={{color: "white"}} to="/account/register">Register</Link>
                            </Button>
                            <Button color="primary">
                                <Link style={{color: "white"}} to="/account/login">Login</Link>
                            </Button>
                        </ButtonGroup>)
                }
                </div>
            </Row>
            <Row>
                <Route path="/account/register" component={Register} />
                <Route path="/account/login" component={Login} />
            </Row>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.name
})



export default connect(mapStateToProps)(AppAcount)
