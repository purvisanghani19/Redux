// import { useDispatch, useSelector } from 'react-redux';
// import { getallData } from './features/gitUserSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Read from './components/Read';
import Upadate from './components/Upadate';


function App() {

  // const dispatch = useDispatch();
  // const data = useSelector((state) => {
  //   console.log(state.app);
  //   return state.app
  // });

  // if (data.loading) {
  //     return <h2>loading.....</h2>;
  // }

  // if(data.error != null){
  // return <h3>{data.error}</h3>;
  // }


  return (
    <>
      {/* 
        <h1>hello</h1>
        <button onClick={() => dispatch(getallData())}>Get Github Users</button>

        {data.users.map((itm) => {
          return (
            <li key={itm.id} >{itm.login}</li>
          )
        })}
      app
      </div> */}

      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Create />} />
            <Route path='/read' element={<Read />} />
            <Route path='/edit/:id' element={<Upadate />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
