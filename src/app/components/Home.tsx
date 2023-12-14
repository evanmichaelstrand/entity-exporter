import React from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
import {Link,  NavLink} from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <Flex flexDirection="column" alignItems="center" padding={32}>
            <Heading>Entity Exporter</Heading>  
                <Paragraph>Welcome to the Entity Exporter, allowing you to view
                    and download a list of entities in your environment easly. 
                    To get started, click an entity type in the navigation menu.
                 </Paragraph>
            </Flex>
        </>
    );
    
  };