import React, {useState} from "react";
import ReactDOM from "react-dom";
import { units } from '@dynatrace-sdk/units';
import { TableColumn } from '@dynatrace/strato-components-preview/tables';
import { hostConfig } from "../config/apiConfig";
import { useEntitiesAPI } from "../functions/getEntities";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import { hostColumns } from "../config/tableConfig";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";

function Host(){
    
    const apiData = useEntitiesAPI(hostConfig);
    return (
    <>   
            <DataTable columns={hostColumns} data={apiData} sortable>
                <DataTable.Toolbar>
                    <DataTable.DownloadData />
                </DataTable.Toolbar>
            </DataTable>

    </>
    );
  };
  
  export default Host;