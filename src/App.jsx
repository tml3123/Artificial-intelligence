import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home'; // Adjust path if necessary
import Contact from './Contact/Contact';
import About from './About/about';
import Enquiry from './Enquiry/enquiry';
import Error from './Error/Error';
import Layout from './Layout/layout';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={< About/>} />
        <Route path="/contact"element={<Contact/>} />
        <Route path="/enquiry"element={<Enquiry/>} />
        <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;