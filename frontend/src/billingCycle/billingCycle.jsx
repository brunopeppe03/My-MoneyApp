import React ,{Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/tabsContent";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import Form from  './billingCycleForm'
import BillingCycleList from "./billingCycleList";
import TabContent from "../common/tab/tabContent";
import {create , update , remove ,init} from './billingCycleActions'
class BillingCycle extends Component{
    componentWillMount(){
        this.props.init()
    }
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos Pagamentos' small='Cadastro'></ContentHeader>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'></TabHeader>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'></TabHeader>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'></TabHeader>
                            <TabHeader label='Deletar' icon='trash-o' target='tabDelete'></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'> <BillingCycleList/></TabContent>
                            <TabContent id='tabCreate'><Form onSubmit={this.props.create} submitLabel='Incluir' submitClass='success' /></TabContent>
                            <TabContent id='tabUpdate'><Form onSubmit={this.props.update} submitLabel='Alterar' submitClass='info' /> </TabContent>
                            <TabContent id='tabDelete'><Form onSubmit={this.props.remove} submitLabel='Excluir' submitClass='danger'  readOnly={true}/></TabContent>
                        </TabsContent>
                    </Tabs>    
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps =dispatch=>bindActionCreators({create ,update , remove ,init},dispatch)
export default connect(null,mapDispatchToProps)(BillingCycle)