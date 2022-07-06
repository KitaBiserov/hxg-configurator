import React from "react";
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter><App tab="home" /></BrowserRouter>);