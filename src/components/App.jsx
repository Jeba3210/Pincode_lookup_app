import { useState }    from 'react'
import "../App.css"
import axios from 'axios';
import Lookup from './Lookup';
import showDetails from './showDetails';

function App() {
  const [pincode , setPincode] = useState(0);
  const [isLookup , setIsLookup] = useState(false);
  const [response, setResponse] = useState({ apiStatus: 0, data: null });
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  // console.log(pincode);
  // console.log(response);

  const fetchData = async () => {
    try {
      setResponse({...response , apiStatus : 1});
      const serverResponse = await axios(`https://api.postalpincode.in/pincode/${pincode}`);
      setResponse({apiStatus : 2 , data : serverResponse});
      
    } catch (error) {
      setResponse({...response , apiStatus : 3})
      return({error});
    }
  }
  
  function implementSubmit(){
      if(pincode.length !== 6){
        alert(" The pincode is not 6 digits");
      }else{
        setIsLookup(true);
        fetchData();
      }
  }

  if(response.apiStatus === 1){
    return(
      <div id="loader"></div>
    )
  }

  if(response.apiStatus === 2){
    setIsApiLoaded(true);
  }

  

  return (<>

   { isLookup ? <Lookup pincode={pincode} response={response} isApiLoad={isApiLoaded}/> : <div id='main_container'>
      <form >
        <label htmlFor="pincode"><h2>Enter Pincode</h2></label>
        <input type="number" 
               id='pincode' 
               placeholder='Pincode' 
               onChange={(e) => {setPincode(e.target.value)}}
        />
        <div id='btn_div'>
          <button id='btn'  type='button' onClick={implementSubmit}>Lookup</button>
        </div>
      </form>
    </div>}
    </>
  )
}

export default App
