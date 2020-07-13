import React, { Component } from "react"
import { Input, Logo, Button } from '../../components/'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import './style.scss'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
         };
      }

    handleNext = () => { 
        let { activeStep } = this.state
        this.setState( { activeStep: activeStep + 1 })
     }

    handleBack = () => { 
        let { activeStep } = this.state
        this.setState( { activeStep: activeStep - 1 })
    }

    getContent = (activeStep) => {
        switch (activeStep) {
            case 1:
                return (
                    <section>
                        <label>Email</label>
                        <Input type="email" placeholder="john.doe@email.com"/>
                        <label>Confirm Email</label>
                        <Input type="email" placeholder="john.doe@email.com" />
                    </section>
                )
            case 2:
                return (
                    <section>
                        <label>Password</label>
                        <Input type="password" placeholder="******" />
                        <label>Confirm password</label>
                        <Input type="password" placeholder="******" />
                    </section>
                )
            default:
                return (
                    <section>
                        <label>Name</label>
                        <Input type="text" placeholder="John Doe" />
                        <label>Username</label>
                        <Input type="text" placeholder="JohnDoe" />
                    </section>
                )
        }
    }

    render() {
        const steps = [0, 1, 2]
        let { activeStep } = this.state

        return (
            <div>
                <header>
                    <Logo color="blue" />
                    <Stepper activeStep={activeStep} className={activeStep ? 'blue' : ''} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel></StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </header>
                <form>
                    {this.getContent(activeStep)}
                    <footer>
                        <Button 
                            text={activeStep === 2 ? 'Finish' : 'Next'}
                            click={this.handleNext} 
                            type="button"
                            path={activeStep === 2 ? 'items' : ''}
                        />
                        <Button 
                            text="Back"
                            color="grey"
                            click={this.handleBack}
                            disabled={activeStep === 0}
                            type="button"
                        />
                    </footer>
                </form>
            </div>
        )
    }
};

export default Registration