import React from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
//import { getEntities } from "../functions/getEntities";
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";


//TODO: Add scopes to api, then assign api to get entities call

var count = 1;

//https://italonascimento.github.io/applying-a-timeout-to-your-promises/



const config: Object = {
  entitySelector: "type(HOST)",
  from: "now-365d",
  to: "now",
  fields: "-fromRelationships",
}

monitoredEntitiesClient.getEntities(config)
.then((response) => {
  response.entities?.forEach(entity => {
    console.log(entity.displayName);
  })
})
.catch((response) => {
  console.log("error:", response)
  count = 0;
})

export const App = () => {
  return (
    <>
    <Flex flexDirection="column" alignItems="center" padding={32}>

        <Heading>Dynatrace Non-Named Biz Event Impact Analysis App</Heading>
        <Paragraph>
        This app is designed to assist a new App developer better understand the basics of the application {count}
        </Paragraph>
        <Paragraph>To run the app please enter an email address below</Paragraph>
        <FormField label="">
          <TextInput placeholder="john.lagona@dtinside.com" />
        </FormField>
      </Flex>
   </>
  );
};
