import React, {useState} from "react";
import ReactDOM from "react-dom";
import { units } from '@dynatrace-sdk/units';
import { TableColumn } from '@dynatrace/strato-components-preview/tables';
import { hostConfig } from "../config/apiConfig";
import { useEntitiesAPI } from "../functions/getEntities";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import { hostColumns } from "../config/tableConfig";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";
import { Header } from "../components/header";

function Host(){
    
    const apiData = useEntitiesAPI(hostConfig);
    return (
    <>      
        
            <Heading>Hosts</Heading>
            <form>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <label htmlFor="vehicle1"> I want this</label>
                <input type="submit" value="Submit"></input>
            </form>
            <DataTable columns={hostColumns} data={apiData} sortable>
                <DataTable.Toolbar>
                    <DataTable.DownloadData />
                </DataTable.Toolbar>
            </DataTable>

    </>
    );
  };
  
  export default Host;