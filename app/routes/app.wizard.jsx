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

  // creazione della tabella divisa in tre colonne se c'è almeno un'elemento
  export default function Wizard() {
    return (
      <Page>
      <ui-title-bar title="Wizard" >
        <button variant="primary" onClick={() => navigate("/app/wizard/new")}>
          new wizard
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>{
          (rows.length) ?
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
          :
            <LegacyCard sectioned>
              <EmptyState
                heading="Manage your inventory transfers"
                action={{content: 'Add transfer'}}
                secondaryAction={{
                  content: 'Learn more',
                  url: 'https://help.shopify.com',
                }}
                image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
              >
              <p>Track and receive your incoming inventory from suppliers.</p>
              </EmptyState>
            </LegacyCard>
          }   
        </Layout.Section>
        </Layout>
      </Page>
    );
  }

