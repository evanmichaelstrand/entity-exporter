import React, {useState} from "react";
import { process_groupConfig } from "../config/apiConfig";
import { useEntitiesAPI } from "../functions/getEntities";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import { process_groupColumns } from "../config/tableConfig";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";

function ProcessGroup(){
    
    const apiData = useEntitiesAPI(process_groupConfig);
    return (
        <>   
            <DataTable columns={process_groupColumns} data={apiData} sortable>
                <DataTable.Toolbar>
                    <DataTable.DownloadData />
                </DataTable.Toolbar>
            </DataTable>
        </>
    );
  };
  
  export default ProcessGroup;