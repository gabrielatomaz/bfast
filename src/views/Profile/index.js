import React, { Component } from 'react'
import './style.scss'
import { Input, Button, Title } from '../../components'

class Profile extends Component {
    render() {
        return (
            <div>
                <Title text="Update your profile" padding="p-lg" />
                <form>
                    <label>Full name</label>
                    <Input type="text" value="John Doe" />
                    <label>Email</label>
                    <Input type="email" value="john.doe@email.com" />
                    
                    <label>Password</label>
                    <Input type="password" value="password" />
                    <label>Confirm password</label>
                    <Input type="password" value="password" />
                    <Button type="button" text="Update" />
                </form>
            </div>
        )
    }
}
export default Profile