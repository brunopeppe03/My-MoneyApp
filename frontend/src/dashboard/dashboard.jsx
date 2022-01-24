import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content"
import { bindActionCreators } from "redux";
import { getSummary } from "./dashboardActions";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";
import { connect } from "react-redux";

 class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
            const {credit,debt} = this.props.summary
            return (
                <div>
                    <ContentHeader title='Dashboard' small='versao 1.0'></ContentHeader>
                    <Content>
                        <Row>
                        <ValueBox cols='12 4' icon='bank' color='green' 
                            value={`R$ ${credit}`} text='Total de Créditos'></ValueBox>
                        <ValueBox cols='12 4' icon='credit-card' color='red' 
                            value={`R$ ${debt}`} text='Total de Debitos'></ValueBox>
                        <ValueBox cols='12 4' icon='money' color='blue' 
                            value={`R$ ${credit-debt}`} text='Valor Consolidado'></ValueBox>
                        </Row>
                    </Content>
                </div>
    
            )
        }
    }

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispathToProps = dispath => bindActionCreators({getSummary},dispath)
export default connect(mapStateToProps, mapDispathToProps)(Dashboard)