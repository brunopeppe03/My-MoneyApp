import React, { Component } from "react";

import ContentHeader from "../common/templade/contentHeader";
import Content from "../common/templade/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='ciclos de pagamento' small='cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>

                        </TabsHeader>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle