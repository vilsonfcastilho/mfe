import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

const lc = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
});

export const bootstrap = [lc.bootstrap];
export const mount = [lc.mount];
export const unmount = [lc.unmount];