import React from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
//import { getEntities } from "../functions/getEntities";


//TODO: Add scopes to api, then assign api to get entities call
//const data = await monitoredEntitiesClient.getEntities();
//console.log(data);

export const App = () => {
  return (
    <>
    <Flex flexDirection="column" alignItems="center" padding={32}>
        <Heading>Dynatrace Non-Named Biz Event Impact Analysis App</Heading>
        <Paragraph>
        This app is designed to assist a new App developer better understand the basics of the application 
        </Paragraph>
        <Paragraph>To run the app please enter an email address below</Paragraph>
        <FormField label="">
          <TextInput placeholder="john.lagona@dtinside.com" />
        </FormField>
      </Flex>
   </>
  );
};
