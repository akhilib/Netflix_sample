import React from 'react';
import './App.css';
import {action,orginals,comedy,horror,romance,docu} from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost urls={orginals} title='Netflix Orginals'/>
     <RowPost urls={action} title='Action' isSmall/>
     <RowPost urls={comedy} title='Comedy' isSmall/>
     <RowPost urls={horror} title='Horror' isSmall/>
     <RowPost urls={romance} title='Romance' isSmall/>
     <RowPost urls={docu} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
