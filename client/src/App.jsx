import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signout from './pages/Signout'; // Corrected component name
import Header from './componants/Header';
import PrivateRouter from './componants/PrivateRouter';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-out" element={<Signout />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Page Not Found</div>} />

        <Route element={<PrivateRouter />}>
        <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App; 
 