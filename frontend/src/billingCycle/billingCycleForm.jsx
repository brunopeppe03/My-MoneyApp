import { Component } from "react";
import React from "react";
import { reduxForm, Field } from "redux-form";

class BillingCycleForm extends Component {

    render() {
        const {handleSubmit } = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component='input' />
                    <Field name='month' component='input' />
                    <Field name='year' component='input' />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">insulimit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)