import React from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
import { useEntitiesAPI } from "../functions/getEntities";
import { hostColumns } from "../components/table";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import { Response } from "dt-app";

export const App = () => {
  const apiData = useEntitiesAPI();
  return (
    <>
    <Flex flexDirection="column" alignItems="center" padding={32}>

        <Heading>Entity Exporter</Heading>
        <Paragraph>
        This app is designed to assist a new App developer better understand the basics of the application
        </Paragraph>
        <Paragraph>To run the app please enter an email address below</Paragraph>
        <FormField label="">
          <TextInput placeholder="john.lagona@dtinside.com" />
        </FormField>
        <DataTable columns={hostColumns} data={apiData}/>
      </Flex>
   </>
  );
};
