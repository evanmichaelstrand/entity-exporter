import React, {useState} from "react";
import { process_groupConfig } from "../config/apiConfig";
import { useEntitiesAPI } from "../functions/getEntities";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import { serviceColumns } from "../config/tableConfig";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";

function Service(){
    
    const apiData = useEntitiesAPI(process_groupConfig);
    return (
        <>   
            <Heading>Services</Heading>
            <DataTable columns={serviceColumns} data={apiData} sortable>
                <DataTable.Toolbar>
                    <DataTable.DownloadData />
                </DataTable.Toolbar>
            </DataTable>
        </>
    );
  };
  
  export default Service;