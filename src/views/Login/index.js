import React, { Component } from "react"
import { Logo, Button, Input } from '../../components/'
import { Link } from "react-router-dom";
import './style.scss'

class Login extends Component {
    render() {
        return (
            <div>
                <header>
                    <Logo color="blue" />
                </header>
                <form>
                <section>
                        <label>Username</label>
                        <Input type="text" placeholder="FulanoDeTal" />
                        <label>Password</label>
                        <Input type="password" placeholder="*****" />
                    </section>
                    <footer>
                        <Button 
                            text="Login"
                            path={'items'}
                            type="button"
                        />
                        <label>New to BFast?  <Link className="link" to="register">Create an account.</Link></label>
                    </footer>
                </form>
            </div>
        )
    }
};

export default Login