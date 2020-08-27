import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CardGrid from './Components/CardGrid';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Hero />
        <CardGrid />
      </main>
      <Footer />
    </>
  );
};
export default App;
