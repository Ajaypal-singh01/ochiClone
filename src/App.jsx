
import './App.css'
import Landingpage from './components/LandingPage/Landingpage';
import Marquee from './components/marquee';
import Navbar from './components/navbar/Navbar';


function App() {
 
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900 ' >
     <Navbar/>
     <Landingpage/>
     <Marquee/>
    </div>
  )
}

export default App
