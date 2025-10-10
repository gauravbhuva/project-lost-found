import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReportItem from './pages/ReportItem';
import Browse from './pages/Browse';
import About from './pages/About';
import ReduxProvider from '@store/ReduxProvider'

function App() {
  return (
    <ReduxProvider>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportItem />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
