import React, { Component } from "react"
import './style.scss'
import { Button } from '../../components/index'
import logo from '../../assets/logo.svg'

class Index extends Component {
    render() {
        return (
            <div id="background">
                <div class="header">
                    <img src={logo} alt="BFast" />
                    <h1>BFast</h1>
                </div>
                <div class="container">
                    <div>
                        <Button text="Sign Up" path="/register" />
                    </div>
                    <div>
                        <Button text="Log in" path="/login" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Index