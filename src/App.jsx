import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signout from './pages/Signout'; // Corrected component name

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-out" element={<Signout />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add a catch-all route for unmatched paths */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 