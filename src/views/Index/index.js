import React, { Component } from "react"
import './style.scss'
import { Button, Logo } from '../../components/index'

class Index extends Component {
    render() {
        return (
            <div id="background">
                <Logo />
                <div className="container">
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