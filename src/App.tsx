import React from 'react';
import {GiftsView} from "./views/GiftsView";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import { NotFoundView } from './views/NotFoundView';
import {TestView} from "./views/TestView";

export const App = () => {
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/gift" element={<GiftsView />} />
              <Route path="/test/:foobar" element={<TestView />} />
              <Route path="*" element={<NotFoundView />} />
          </Routes>
      </>
  );
};

