import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./Components/RootLayout";
import About_part from "./pages/About_part";
import Service from "./pages/Service";
import Team_page from "./pages/Team_page";
import Questain from "./pages/Questain";
import Contact_part from "./pages/Contact_part";
import Cart from "./pages/Cart";
import Check_out from "./pages/Check_out";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route>
        <Route index element={<Home />} />
        <Route path='/about' element={<About_part />} />
        <Route path='/service' element={<Service />} />
        <Route path='/team' element={<Team_page />} />
        <Route path='/question' element={<Questain />} />
        <Route path='/contact' element={<Contact_part />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Check_out />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
