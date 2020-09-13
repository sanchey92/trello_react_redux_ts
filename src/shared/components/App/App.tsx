import React, {FC} from "react";
import {Route} from 'react-router-dom';

import HomePage from "../../../home/pages/HomePage/HomePage";
import Board from "../../../board/pages/Board/Board";

const App: FC = () => {
  return (
    <div>
      <Route path='/' exact component={HomePage} />
      <Route path='/:boardID' component={Board} />
    </div>
  )
}

export default App;
