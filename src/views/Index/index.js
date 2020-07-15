import React, { Component } from "react"
import './style.scss'
import { Button, Logo } from '../../components/index'

class Index extends Component {
    render() {
        return (
            <div id="background">
                <Logo color="white"/>
                <div className="container">
                    <div>
                        <Button text="Log in" path="/login" />
                    </div>
                    <div>
                        <Button text="Sign Up" path="/register" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Index