import React, { Component } from 'react'

import {connect} from "react-redux";
import {Form, FormGroup, Label, Input, Button, Alert} from "reactstrap";
import actionTypes from "../reducers/userActions"
import userActions from '../reducers/userActions';

class Login extends Component {
    state = {userName: "", password: "", valid: false}

    handleChange = (e) => {
        let userLength;
        let passwordLength;
        if(e.target.name === "userName") {
            userLength = e.target.value.length
        } else {
            passwordLength = e.target.value.length
        }

        userLength = userLength? userLength : this.state.userName.length
        passwordLength = passwordLength? passwordLength : this.state.password.length
        const valid = userLength >= 3 && userLength <= 15 &&
                      passwordLength >= 5 && passwordLength <= 10
        this.setState({
            [e.target.name]: e.target.value,
            valid
        })
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state.userName, this.state.password)
        if(this.state.userName && this.state.password) {
            this.setState({error: false})
            this.props.dispatch({type: userActions.LOGIN, payload: {name: this.state.userName}})
            this.props.history.push("/")
        } else {
            this.setState({error: true})
        }
    }

    render() {
        return (
        <div>
            <Form>
                <FormGroup className="text-center">
                    <Label>User Name</Label>
                    <Input onChange={this.handleChange} name="userName"/>
                </FormGroup>
                <FormGroup className="text-center">
                    <Label>Password</Label>
                    <Input onChange={this.handleChange} name="password" type="password"/>
                </FormGroup>
                <Button disabled={!this.state.valid} onClick={this.submit}>Submit</Button>
            </Form>
        </div>
        )
    }
}

export default connect()(Login)