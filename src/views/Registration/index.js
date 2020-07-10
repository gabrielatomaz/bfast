import React, { Component } from "react"
import { Input, Logo, Button } from '../../components/'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import './style.scss'

class Registration extends Component {
    

    render() {
        const steps = [0, 1, 2]
        let activeStep = 0

        const setActiveStep = (prevActiveStep) => activeStep = prevActiveStep + 1

        const handleNext = () => setActiveStep(activeStep)

        return (
            <div>
                <header>
                    <Logo color="blue" />
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel></StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </header>
                <section>
                    <label>Name</label>
                    <Input type="text" placeholder="Fulano de Tal" />
                    <label>Username</label>
                    <Input type="text" placeholder="FulanoDeTal" />
                </section>
                <footer>
                    <Button text="Continue" click={handleNext} />
                </footer>
            </div>
        )
    }
};

export default Registration