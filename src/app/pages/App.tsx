import React, { useMemo, useCallback, useRef, useState  } from "react";
import { units } from '@dynatrace-sdk/units';
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";
import { useEntitiesAPI } from "../functions/getEntities";
import {process_groupConfig, hostConfig, applicationConfig} from "../config/apiConfig";
import { DataTable} from '@dynatrace/strato-components-preview/tables';
import type { TableColumn } from '@dynatrace/strato-components-preview/tables';
import { Header } from "../components/header";
import Host from "../components/Host";
import ProcessGroup from "../components/ProcessGroup";
import Application from "../components/Application";
import { Route, Routes, Link} from "react-router-dom";

export const App = () => {
  const apiData = useEntitiesAPI(applicationConfig);
  console.log(apiData);
  return ( 
    <>
       <Flex flexDirection="column" alignItems="center" padding={32}>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/host" element={<Host />}></Route>
            <Route path="/process_group" element={<ProcessGroup />}></Route>
            <Route path="/application" element={<Application />}></Route>
          </Routes>
        </div>
      </Flex>
    </>

   );
};
//<HostTable entity={entityType}/>
//<GetTable entity="host"/> This works for getting table with button