import React, { useMemo, useCallback, useRef, useState  } from "react";
import { units } from '@dynatrace-sdk/units';
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";
import { useEntitiesAPI } from "../functions/getEntities";
import { hostConfig } from "../functions/apiConfig"
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import type { TableColumn } from '@dynatrace/strato-components-preview/tables';
import { Header } from "../components/header";
import Host from "../components/Host";
import { Route, Routes, Link} from "react-router-dom";

export const App = () => {

  return ( 
    <>
       <Flex flexDirection="column" alignItems="center" padding={32}>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/host" element={<Host />}></Route>
          </Routes>
        </div>
      </Flex>
    </>

   );
};
//<HostTable entity={entityType}/>
//<GetTable entity="host"/> This works for getting table with button