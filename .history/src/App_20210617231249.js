import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import project from './page/project';
import Service from './page/Service';
import NotFound from './page/NotFound';

const App = () => {
  return (
    //  element parent
    <>
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/m" component={Home} />
        <Route path="/" component={Home} />
        <Route path="/" component={Home} />
        <Route path="/" component={Home} />

    </BrowserRouter>
            </>
          );
        };

export default App;
/>
        </Route >
       </BrowserRouter >
    </>
  );
};

export default App;
