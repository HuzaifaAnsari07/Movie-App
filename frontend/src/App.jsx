import './css/App.css'
import MovieCard from './components/MovieCard';
import Favorites from "./pages/Favorites"
import NavBar from "./components/NavBar";
import { MovieProvider } from './contexts/MovieContext';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      {/* <div>
        <p>Hello World!</p>
      </div>
      <Message />
      <Message text ="Heyy!!"/> */}
      {/* <MovieCard movie={{title:"Pathan", release_date:"2024"}}></MovieCard> */}
      {/* <Home /> */}
      <MovieProvider>
        <NavBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorite" element={<Favorites />}></Route>
          </Routes>
        </main>
      </MovieProvider>
    </>
  )
}


// function Message({text }){
//   return (
//     <>
//     <div>
//       <p>This is a message component.</p>
//     </div>
//     <h1>{text}</h1>
//     </>
//   );
// }
export default App
