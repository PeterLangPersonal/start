import React, { useEffect, useState } from 'react';
import { Footer, Header } from './components';  
import { Contact, Home, Projects } from './pages';
import { AppWrapper } from './App.styles';
import { pages } from './types';
import { useAppContext } from './utils';
import { PageContext, ProjectContext } from './context';

function App() {
  const { page } = useAppContext(PageContext);
  const { project } = useAppContext(ProjectContext);

  const [ hasHeader, setHasheader ] = useState(true);
  
  useEffect(() => {
    setHasheader(project === undefined);
  }, [ project ])

  return (
    <>
      {!project && <Header/>}
      <AppWrapper hasHeader={hasHeader}>
        {page === pages.START && <Home/>}
        {page === pages.PROJECTS && <Projects/>}
        {page === pages.CONTACT && <Contact/>}
        {!project && <Footer/>}
      </AppWrapper>
    </>
  );
}

export default App;
