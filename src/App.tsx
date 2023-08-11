import React from 'react';
import { Footer, Header } from './components';  
import { Contact, Home, Projects } from './pages';
import { AppWrapper } from './App.styles';
import { pages } from './types';
import { useAppContext } from './utils';
import { PageContext } from './context';

function App() {
  const { page } = useAppContext(PageContext);

  return (
    <>
      <Header/>
      <AppWrapper>
        {page === pages.START && <Home/>}
        {page === pages.PROJECTS && <Projects/>}
        {page === pages.CONTACT && <Contact/>}
        <Footer/>
      </AppWrapper>
    </>
  );
}

export default App;
