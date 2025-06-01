import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './presentation/layouts/Layout';
import { HomePage } from './presentation/pages/HomePage';
import { ServicesPage } from './presentation/pages/ServicesPage';
import { ResourcesPage } from './presentation/pages/ResourcesPage';
import { ContactPage } from './presentation/pages/ContactPage';
import { AboutPage } from './presentation/pages/AboutPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/recursos" element={<ResourcesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
