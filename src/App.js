import React, { Suspense } from 'react';
import './styles/App.css';
import RoutesRoot from './routes/routes';
import { withRouter } from 'react-router-dom'; 

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading ...</p>}>
        <RoutesRoot />
      </Suspense>
    </div>
  );
}

export default withRouter(App);
