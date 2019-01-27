import React, { Component } from 'react'

import { Form, FormGroup, Input, Button, Label, } from "reactstrap"

export default class Register extends Component {
    buttons = [
        {
        label: "First Name",
        ref: "firstName",
        type: "input",
        min: 2,
        max: 15
    },
    {
        label: "Last Name",
        ref: "lastName",
        type: "input",
        min: 2,
        max: 15
    },
    {
        label: "User Name",
        ref: "userName",
        type: "input",
        min: 3,
        max: 15
    },
    {
        label: "Password",
        ref: "password",
        type: "input",
        min: 5,
        max: 10
    },
    {
        label: "Where Are You From?",
        ref: "country",
        type: "select",
    },
    {
        label: "Register",
        type: "button",
    }
]

    static API_URL = "https://restcountries.eu/rest/v2/all?fields=name;flag"

    state = {valid: false, countries: []}

    async componentDidMount() {
        const res = await fetch(Register.API_URL);
        const countries =  await res.json();

        this.setState({countries});
    }

    generateButtons = () => {
        return this.buttons.map(input =>{
            let element
            switch(input.type) {
                case "input":
                    element = (
                        <FormGroup>
                            <Label>{input.label}</Label>
                            <Input 
                            onChange={this.onChange} 
                            ref={input.ref}
                            innerRef={input.ref} />
                        </FormGroup>
                    )
                    break;
                case "select":
                    element = (
                        <FormGroup>
                            <Label>{input.label}</Label>
                            <Input type="select">
                                {
                                    this.state.countries.map(country => (
                                        <option key={country.name}>{country.name}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                    )
                    break;
                case "button":
                    element = (
                        <Button disabled={!this.state.valid} onClick={this.onSubmit}>Register</Button>
                    )
                    break;
                default:
                    break;
            }
            return element;
        })
    }

    checkInput = () => {
        return this.buttons.filter(item => item.type === "input").reduce((prev, curr) => {
            const length = this.refs[curr.ref].refs[curr.ref].value.length
            return prev && length >= curr.min && length <= curr.max
        })
    }

    onChange = () => {
        const valid = this.checkInput();

        this.setState({valid})
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.history.push("/account/login")
    }

    render() {
        return (
        <div>
            <Form>
                {
                    this.generateButtons()
                }
            </Form>
        </div>
        )
    }
}
