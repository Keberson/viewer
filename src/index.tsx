import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { Annotorious } from "@annotorious/react";

import './index.css';

import Playground from "./Playground";
import { store } from "./Viewer/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <Annotorious>
            <Playground />
        </Annotorious>
    </Provider>
);

