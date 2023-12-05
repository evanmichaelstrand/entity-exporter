import React from "react";
import { units } from '@dynatrace-sdk/units';
import { TableColumn } from '@dynatrace/strato-components-preview/tables';
import { hostConfig } from "../functions/apiConfig";
import { useEntitiesAPI } from "../functions/getEntities";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
import {Link} from 'react-router-dom';

export const Header = () => {
    const apiData = useEntitiesAPI(hostConfig);
    return (
        <>
    
            <Heading>Entity Exporter</Heading>  
            <ul>
                <li><Link to="./Host">Host</Link></li>
            </ul>
    </>
    );
  };

 