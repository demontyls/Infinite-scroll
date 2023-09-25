import React from 'react';
import { createRoot } from 'react-dom/client';
import ScrollWrapper from "./components/Scroll-wrapper/Scroll-wrapper";

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <ScrollWrapper/>,
);