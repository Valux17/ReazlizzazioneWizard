import {
    Box,
    Card,
    Layout,
    Link,
    List,
    Page,
    Text,
    BlockStack,
    IndexTable,
    Badge,
  } from "@shopify/polaris";

  const orders = [
    {
      id: '1020',
      order: '#1020',
      date: 'Jul 20 at 4:34pm',
      customer: 'Jaydon Stanton',
      total: '$969.44',
      paymentStatus: <Badge progress="complete">Paid</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },]

  export default function Wizard() {
    return (
      <Page>
      <ui-title-bar title="Wizard" >
        <button variant="primary" onClick={() => navigate("/app/qrcodes/new")}>
          new wizard
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <Card>
            dfdgfdgdd        
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
    );
  }

