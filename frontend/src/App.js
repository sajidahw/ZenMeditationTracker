// import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// import data
import products from "./data/products.js";

// importing components and pages
import Nav from "./components/Nav.js"
import HomePage from './pages/HomePage.js';
import LogPage from './pages/LogPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicsPage from './pages/TopicsPage.js'; // Previous HomePage content is now placed here
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import ContactPage from './pages/ContactPage.js';

// importing styles and images
import './App.css';
// import logo from './logo.svg';
//import {GiTeacher} from "react-icons/gi"; // can update this to another icon placeholder

function App() {
  const [meditation, setMeditation] = useState([]);

  return (
    <>
    <BrowserRouter>
    {/* <div className='App'></div> */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Sajidah Wahdy's MERN Portfolio Site</h1> 
        {/* <logoName className="App-logo" />*/}
        
      </header>
      <Nav/>
        
      <main>
        <section>
            <Routes> {/* Components pages pulling in data in Routes */}
            <Route path='/' element={<HomePage/>} />
            <Route path='/zen' element={<LogPage setMeditation={setMeditation}/>} />
            <Route path='/zen-add' element={<CreatePage />} />
            <Route path='/update' element={<EditPage meditationToEdit={meditation}/>} /> 
            <Route path='/topics' element={<TopicsPage />} />
            <Route path='/gallery' element={<GalleryPage/>} />
            <Route path='/order' element={<OrderPage products={products} />} />
            <Route path='/staff' element={<StaffPage/>} />
            <Route path='/contact' element={<ContactPage/>} />
          </Routes>
        </section>
      </main>

      <footer>
        <p>&copy; Sajidah Wahdy | Winter 2023 |  CS 290  | MERN Portfolio Project</p>
    </footer>


    </BrowserRouter>
    </>//div
  );
}

export default App;
