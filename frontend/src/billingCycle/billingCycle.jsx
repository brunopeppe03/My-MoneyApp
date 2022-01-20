import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


import ContentHeader from "../common/templade/contentHeader";
import Content from "../common/templade/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from '../common/tab/tabActions'
import List from "./billingCycleLIst";
import Form from "./billingCycleForm";

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title='ciclos de pagamento' small='cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList' >
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form />
                            </TabContent>
                            <TabContent id="tabUpdate"></TabContent>
                            <TabContent id="tabDelete"></TabContent>

                        </TabsContent>
                    </Tabs>
                </Content>
                            <TabContent id="tabDelete" ></TabContent>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)