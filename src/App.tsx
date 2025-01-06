import './App.css'
import Dashboard from './components/pages/dashboard/Dashboard'
import Organization from './components/pages/organization/Organization';
import RightSidebar from './components/rightSidebar/rightSidebar';
import Sidebar from './components/sidebar/sidebar'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(0);


  return (
    <>
      <div className='App'>
        <div className="AppGlass">
        <Sidebar setSelected={setSelected}/>
        <div>
        {selected === 0 && <Dashboard/>}
        {selected === 1 && <Organization/>} 
        {selected === 2 && <Organization/>}
        </div> 
        <RightSidebar selectedMenuIndex={selected}
                      />  
        </div>
      </div>
      
    </>
  )
}

export default App
