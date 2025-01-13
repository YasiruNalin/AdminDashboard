import './App.css'
import Analysis from './components/pages/analysis/Analysis';
import Dashboard from './components/pages/dashboard/Dashboard'
import Organization from './components/pages/organization/Organization';
import Scenario from './components/pages/scenario/Scenario';
import RightSidebar from './components/rightSidebar/rightSidebar';
import Sidebar from './components/sidebar/sidebar'
import { useState } from 'react'

interface Selection {
  selectedMenuIndex: number;
  selectedSubMenu: number | null;
  selectedSubSubMenu: any;
}

function App() {
  const [selection, setSelection] = useState<Selection>({ 
    selectedMenuIndex: 0, 
    selectedSubMenu: null, 
    selectedSubSubMenu: null 
  });

  const handleSelectionChange = (newSelection: any) => {
    setSelection({ ...selection, ...newSelection });
  };

  return (
    <>
      <div className='App'>
        <div className="AppGlass">
        <Sidebar setSelected={(index) => setSelection({ ...selection, selectedMenuIndex: index })} />
        <div>
        {selection.selectedMenuIndex === 0 && <Dashboard selectedSubMenu={selection.selectedSubMenu} />}
        {selection.selectedMenuIndex === 1 && <Organization/>} 
        {selection.selectedMenuIndex === 2 && <Scenario selectedSubMenu={selection.selectedSubMenu} selectedSubSubMenu={selection.selectedSubSubMenu} />}
        {selection.selectedMenuIndex === 3 && <Analysis/>} 

        </div> 
        <RightSidebar 
          selectedMenuIndex={selection.selectedMenuIndex} 
          onSelectionChange={handleSelectionChange} 
        />
        </div>
      </div>
      
    </>
  )
}

export default App

