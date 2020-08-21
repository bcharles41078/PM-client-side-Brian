import React from 'react';
import ReactDOM from 'react-dom';
import projectDetail from './projectDetail';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><projectDetail /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });