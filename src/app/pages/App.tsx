import React, { useMemo, useCallback, useRef, useState  } from "react";
import { units } from '@dynatrace-sdk/units';
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";
import { useEntitiesAPI } from "../functions/getEntities";
import { Header } from "../components/header";
import {serviceConfig} from "../config/apiConfig";
import Host from "../components/Host";
import ProcessGroup from "../components/ProcessGroup";
import Service from "../components/Service";
import Application from "../components/Application";
import { Home } from "../components/Home";
import { Route, Routes, Link} from "react-router-dom";

export const App = () => {
  const apiData = useEntitiesAPI(serviceConfig);
  console.log(apiData);
  return ( 
    <>
       <Flex flexDirection="column" alignItems="center" padding={32}>
          <Header />
          <Flex flexDirection="column" alignItems="center" padding={32}>
            <Routes>
              <Route path="/host" element={<Host />}></Route>
              <Route path="/process_group" element={<ProcessGroup />}></Route>
              <Route path="/service" element={<Service />}></Route>
              <Route path="/application" element={<Application />}></Route>
              <Route path="/home" element={<Home />}></Route>
            </Routes>  
          </Flex>
      </Flex>
    </>

   );
};

/*<Paragraph>View and download a list of entities in your environment. 
          </Paragraph> */