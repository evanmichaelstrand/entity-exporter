import React from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput} from "@dynatrace/strato-components-preview";
import { TitleBar } from '@dynatrace/strato-components-preview/layouts';
import { Route, Routes, Link} from "react-router-dom";
import "./style.css";
import Host from "../components/Host";
import ProcessGroup from "../components/ProcessGroup";
import Application from "../components/Application";
import {Home} from "../components/Home";
//import style from  "../static/style.module.css";

export const Header = () => {
    /*return (
        <>
            <ul className="ul">
                <li className="li">Entity Exporter</li>
                <li className="li"><Link className="link" to="./Host">Hosts</Link></li>
                <li className="li"><Link className="link" to="./Process_Group">Process Groups</Link> </li>
                <li className="li"><Link className="link" to="./Application">Applications</Link></li>
            </ul>
            
        </>
    );*/
    
    return (
    <> 
        <TitleBar>
            <TitleBar.Title>Entity Exporter</TitleBar.Title>
        </TitleBar>
        <AppHeader>
            <AppHeader.NavItems>
                <AppHeader.AppNavLink href="#" appName="Entity Exporter" hidden={true} />
                <AppHeader.NavItem as={Link} to="./Host" isSelected={false}>
                    Hosts
                </AppHeader.NavItem>
                <AppHeader.NavItem as={Link} to="./Process_Group" isSelected={false}>
                    Process Groups
                </AppHeader.NavItem>
                <AppHeader.NavItem as={Link} to="./Service" isSelected={false}>
                    Services
                </AppHeader.NavItem>
                <AppHeader.NavItem as={Link} to="./Application" isSelected={false}>
                    Applications
                </AppHeader.NavItem>
            </AppHeader.NavItems>
        </AppHeader>
        </>
    ) 
  };

 //<AppHeader.AppNavLink href="#" appName="Entity Exporter"/>