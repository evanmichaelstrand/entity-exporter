import React, {useState} from "react";
import { units } from '@dynatrace-sdk/units';
import { TableColumn } from '@dynatrace/strato-components-preview/tables';
import { hostConfig } from "../functions/apiConfig";
import { useEntitiesAPI } from "../functions/getEntities";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import { hostColumns } from "./table_shell";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";

export const Table = (entity) => {
    if (entity = "host"){
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
    }



    return (
        <></>
    )
  };

  function Hosts() {
    const apiData = useEntitiesAPI(hostConfig);
    return(
        <DataTable columns={hostColumns} data={apiData} sortable>
            <DataTable.Toolbar>
                <DataTable.DownloadData />
            </DataTable.Toolbar>
        </DataTable>
    );
  }

  function GetTable(entity) {
    const [showComponent, setShowComponent] = useState(false);
  
    const handleClick = () => {
      setShowComponent(true);
    };
    if (entity = "host"){
        return (
            <>
                <Button onClick={handleClick}>Show Hosts</Button>
                {showComponent && <Hosts />}
            </>
            
        );
    }
    return (
        <></>
    );
  }
  
  export default GetTable;