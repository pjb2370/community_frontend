import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return;
  <BrowserRouter>
    <Routers>
      <Router path="/" element={<HOME />} />
      <Router path="/detail/:id" element={<Detail />} />
    </Routers>
  </BrowserRouter>;
}

export default App;
