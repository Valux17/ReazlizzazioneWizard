import React,{ useState} from "react";
import { json, redirect } from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useNavigation,
  useSubmit,
  useNavigate,
} from "@remix-run/react";
import { authenticate } from "../shopify.server";
import {
  Card,
  Bleed,
  Button,
  ChoiceList,
  Divider,
  EmptyState,
  InlineStack,
  InlineError,
  Layout,
  Page,
  Text,
  TextField,
  Thumbnail,
  BlockStack,
  PageActions,
} from "@shopify/polaris";
import { ImageIcon } from "@shopify/polaris-icons";

import db from "../db.server";
import { getQRCode, validateQRCode } from "../models/QRCode.server";
import righe from "./app._index"

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function TextFieldChanging() {
  const [value, setValue] = useState(
    'import React from "react"\n' + 
    'export function App(){\n' +
    '}'
    );
  const handleChange = (newValue) => setValue(newValue);
  return (
    <TextField
      label="Codice"
      value={value}
      onChange={handleChange}
      autoComplete="off"
      multiline={4}
    />
  );
}

let code = <TextFieldChanging />

function handleSave({params}){
  if(params.id == "new"){
    prisma.wizard.create({
      data:{
        id : righe.length + 1,
        step : righe.length + 1,
        codice : {code}
      }
    })
  }
  else{
    prisma.wizard.update({
      where: { id : Number(params.id)},
      data: {
        codice : {code}
      }
    })
  }
}

function handleDelete({params}){
  if(params.id != "new"){
    prisma.wizard.delete({
      where: { id : Number(params.id)},
    })
  }
}

export default function WizardForm({params}) {
  return (
    <Page>
      <ui-title-bar title={params.id ? "Edit Wizard" : "Create new Wizard"}>
        <button variant="breadcrumb" onClick={() => navigate("/app/wizard")}>
          Wizard
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          {params.id ? 
            <Text>step {params.id}</Text>
          :
            <Text>step {righe.length + 1}</Text>
          }
          <TextFieldChanging />
          <PageActions
            primaryAction={{
              content: 'Save',
              onAction: handleSave(),
            }}
            secondaryActions={[
              {
                content: 'Delete',
                destructive: true,
                onAction: handleDelete(),
              },
            ]}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
