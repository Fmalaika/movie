import React, {useState} from 'react';
import './App.css';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results'


function App() {
  const apiUrl= 'http://www.omdbapi.com/?i=tt3896198&apikey=b3029e23';
  const [state, setState ] = useState({
    s:"",
    results: [],
    selected: {}
  })
  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return {...prevState , s: s }
    });
  } 

  const search = (e) => {
    if(e.key ==="Enter"){
      axios(apiUrl+"&s="+ state.s).then((data) => {
        console.log(data);
       let result = data.data.Search;
       setState(prevState => {
         return{...prevState , results : result}
       })
    })
    }
  }
  let resultData = state.results ? state.results : null;

  return (
    <div className="App">
        <header>
          Movie Database
        </header> 
        <Search handleInput={handleInput} search={search} />
        <Results results={resultData} />
    </div>
  );
}

export default App;
