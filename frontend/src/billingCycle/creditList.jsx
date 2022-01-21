import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends Component {
    renderRows() {
        return (
            <tr>
                <td><Field name='credits[0].name' component={Input}
                   placeholder= "informe o nome" readOnly={this.props.readOnly}/></td>/
                <td><Field name='credits[0].value' component={Input}
                    placeholder= "informe o valor" readOnly={this.props.readOnly}/></td>/
                <td></td>
            </tr>
            )
            }

    render() {
        return (
            <Grid>
                <fieldset>
                    <legend>Creditos</legend>
                    <table className='table'></table>
                      <thead>
                          <tr>
                              <th>Nome</th>
                              <th>valor</th>
                              <th>acoes</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.renderRows()}
                      </tbody>
                </fieldset>
            </Grid>
        )
    }

}

export default CreditList