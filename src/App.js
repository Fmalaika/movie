import React, {useState} from 'react';
import './App.css';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results';
import PopUp from './components/PopUp';


function App() {
  const apiUrl= 'http://www.omdbapi.com/?apikey=b3029e23';
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


  const openPopUp = id => {
 
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  
  }

  const closePopUp = () => {
    setState(prevState => {
      return {...prevState, selected: {} }
    })
  }

  return (
    <div className="App">
        <header>
          Movie Database
        </header> 
        <Search handleInput={handleInput} search={search} />
        <Results results={resultData} openPopUp={openPopUp} />
        {(typeof state.selected.Title != "undefined") ? <PopUp selected={state.selected} closePopUp={closePopUp} /> : false}
    </div>
  );
}

export default App;
