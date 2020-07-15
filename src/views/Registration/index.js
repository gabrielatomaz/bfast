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
                return {
                    labels: ['Email', 'Confirm email'],
                    input: {
                        type: 'email',
                        placeholder: 'john.doe@email.com'
                    }
                }
            case 2:
                return {
                    labels: ['Password', 'Confirm password'],
                    input: {
                        type: 'password',
                        placeholder: '********'
                    }
                }
            default:
                return {
                    labels: ['Name', 'Username'],
                    input: {
                        type: 'text',
                        placeholder: 'JohnDoe'
                    }
                }
        }
    }

    render() {
        const steps = [0, 1, 2]
        let { activeStep } = this.state
        const { labels, input: { type, placeholder } } = this.getContent(activeStep)
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
                    <section>
                        <label> { labels[0] } </label>
                        <Input type={type} placeholder={placeholder} />
                        <label> { labels[1] } </label>
                        <Input type={type} placeholder={placeholder} />
                    </section>
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