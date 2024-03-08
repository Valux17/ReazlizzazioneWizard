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
  } from "@shopify/polaris";



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

