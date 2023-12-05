import React, { useMemo, useCallback, useRef, useState  } from "react";
import { units } from '@dynatrace-sdk/units';
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";
import { useEntitiesAPI } from "../functions/getEntities";
import { hostConfig } from "../functions/apiConfig"
import { hostColumns } from "../components/table_shell";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import type { TableColumn } from '@dynatrace/strato-components-preview/tables';
import { Header } from "../components/header";
import GetTable from "../components/tables";
import { Response } from "dt-app";

export const App = () => {
  
  var entityType = "host";

  return ( 
    <>
       <Flex flexDirection="column" alignItems="center" padding={32}>
        <Header />
        <GetTable entity="host"/>
      </Flex>
    </>

   );
};
//<HostTable entity={entityType}/>