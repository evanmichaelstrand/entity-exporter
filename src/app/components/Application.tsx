import React, {useState} from "react";
import { applicationConfig } from "../config/apiConfig";
import { useEntitiesAPI } from "../functions/getEntities";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import { applicationColumns } from "../config/tableConfig";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";

function Application(){
    
    const apiData = useEntitiesAPI(applicationConfig);
    return (
        <>   
            <DataTable columns={applicationColumns} data={apiData} sortable>
                <DataTable.Toolbar>
                    <DataTable.DownloadData />
                </DataTable.Toolbar>
            </DataTable>
        </>
    );
  };
  
  export default Application;