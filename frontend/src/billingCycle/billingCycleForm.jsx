import React ,{Component} from "react";
import {reduxForm , Field , formValueSelector} from 'redux-form'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";
class BillingCycleForm extends Component {

    calculateSum(){
        // const sum = (t,v) => t+v;
        // return this.props.credits.map(d=>+d.value ||0).reduce(sum)
        console.log('1000',this.props);
    }
    calculateDebts(){
        // const sum = (t,v) => t+v;
        // if(this.props.debts)return this.props.debts.map(d=>+d.value ||0).reduce(sum)
        console.log('11222',this.props);
    }
    render(){
        const {handleSubmit , readOnly, credits , debts} = this.props
        const sumCalc = this.calculateSum()
        const debtsCalc = this.calculateDebts()
        return (
            <form role='form' onSubmit={handleSubmit}>
                
                <div className="box-body" >
                    <Field name='name' component={labelAndInput} readOnly={readOnly}label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={labelAndInput} readOnly={readOnly} label='Mes' cols='12 4' type='number' placeholder='Informe o mes'/>
                    <Field name='year' component={labelAndInput} readOnly={readOnly} label='Ano' cols='12 4' type='number' placeholder='Informe o ano'/>
                    <Summary credit={sumCalc} debt={debtsCalc}></Summary>
                    <ItemList field='credits' legend='Créditos' cols='12 6' list={credits} readOnly={readOnly}></ItemList>
                    <ItemList field='debts' showStatus={true} legend='Débitos' cols='12 6' list={debts} readOnly={readOnly}></ItemList>
                </div>  
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}
BillingCycleForm =reduxForm({form:'billingCycleForm' , destroyOnUnmount:false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits:selector(state,'credits'),debts:selector(state,'debts')})
const mapDispatchToProps = dispatch =>bindActionCreators({init},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)