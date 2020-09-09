import React, {FC} from "react";
import {Route} from 'react-router-dom';

import HomePage from "../HomePage/HomePage";
import Board from "../Board/Board";

const App: FC = () => {
  return (
    <div>
      <Route path='/' exact component={HomePage} />
      <Route path='/:boardID' component={Board} />
    </div>
  )
}

export default App;
