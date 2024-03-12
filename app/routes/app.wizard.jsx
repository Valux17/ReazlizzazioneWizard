import {
    Box,
    Card,
    Layout,
    List,
    Page,
    Text,
    BlockStack,
    IndexTable,
    Badge,
  } from "@shopify/polaris";
  import { useLoaderData, Link, useNavigate } from "@remix-run/react";

  const righe = [
  ];

  /*si crea una tabella con ogni riga.Ogni riga ha tre celle con i tre dati*/
  const rowMarkup = righe.map(
    (
      {id, step, data},index
    ) => (
      <IndexTable.Row id={id} key={id}>
        <IndexTable.Cell>
          <Text as="span" alignment="end" numeric>
            {id}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" alignment="end" fontWeight="bold" as="span">
            {step}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end">
            {data}
          </Text>
        </IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

 
  
  export default function Index() {
   // const { qrCodes } = useLoaderData();
    const navigate = useNavigate();
    return (
      <Page>
  
        {/*<a href="/app/wizard/new">
        <button variant="primary" >
          new wizard
        </button>
    </a>*/}
        <ui-title-bar title="QR code">
        <button variant="primary" onClick={() => navigate("/app/wizard/new")}>
          
          New Wizard
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          
            <IndexTable
            headings={[
              {title: 'id'},
              {title: 'step'},
              {title: 'Data'},
            ]}
            rows={righe}
            itemCount={righe.length}
            selectable = {false}
            >
              {rowMarkup} 
            </IndexTable>
        
               
        </Layout.Section>
        </Layout>
      </Page>
    );
  }

