import './sidebar.css'
import { SidebarData } from '../../menuData/menuData'
import { useState } from 'react'
const Sidebar = ({ setSelected }: { setSelected: (index: number) => void }) => {
    const[pageSelected,setPageSelected] = useState(0)

    const handleMenuClick = (index: number) => {
        setPageSelected(index);
        setSelected(index);
    }
    return(
        <div className="Sidebar">
            <div className="Logo">
                <img src="src\assets\logo.png" alt="" />
                
            </div>
            <div className="logo">
                <span>
                    AT<span>O</span>M 
                </span>
            </div>
            {/* Menu*/}
            <div className="Menu">
                {SidebarData.map((item,index)=>{
                    return(
                        <div className={pageSelected===index? "MenuItem active": "MenuItem"}
                        key = {index}
                        onClick={() => handleMenuClick(index)}
                        >
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Sidebar