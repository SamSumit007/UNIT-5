
import './App.css';

function App() {


   const Os = ["Service", "Projects", "About"]
  return (
    <div className="App">

   <h2>LOGOBAKERY</h2>

    <div className='div2'>
      <ul>
        {Os.map((e) =>{
          return <li>{e}</li>
        })}
      </ul>
    </div>

    <button>contact</button>


  </div>

  );
}

export default App;
