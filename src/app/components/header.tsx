import React from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <Heading>Entity Exporter</Heading>  
            <ul>
                <li><Link to="./Host">Hosts</Link></li>
                <li><Link to="./Process_Group">Process Groups</Link> </li>
                <li><Link to="./Application">Applications</Link></li>
            </ul>
        </>
    );
  };

 