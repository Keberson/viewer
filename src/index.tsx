import React from 'react';
import ReactDOM from 'react-dom/client';

import {Annotorious} from "@annotorious/react";

import './index.css';

import Playground from "./Playground";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Annotorious>
        <Playground />
    </Annotorious>
);

