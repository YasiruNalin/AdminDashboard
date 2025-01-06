import { useState, useEffect } from 'react';
import { MenuItems } from '../../../menuData/menuData'
import './dynamicMenu.css';

interface DynamicMenuProps {
  selectedMenuIndex: number | null;

}

const DynamicMenu = ({ selectedMenuIndex, }: DynamicMenuProps) => {
    const [selectedSubMenu, setSelectedSubMenu] = useState<number | null>(null);

    useEffect(() => {
        setSelectedSubMenu(0);
    }, [selectedMenuIndex]);

    const handleSubMenuClick = (subIndex: number) => {
        setSelectedSubMenu(subIndex);
    };

    return (
        <div>
            {MenuItems.map((menu, index) => (
                <div key={index}>
                  
                    {selectedMenuIndex === index && menu.items && (
                        <div className="SubMenu">
                            {menu.items.map((item, subIndex) => (
                                <div 
                                    key={subIndex} 
                                    className={selectedSubMenu === subIndex ? "SubMenuItem activeR" : "SubMenuItem"}
                                    onClick={() => handleSubMenuClick(subIndex)}
                                >
                                    <span>{item.name}</span>
                                    {selectedSubMenu === subIndex && item.subitems && (
                                        <div className="SubSubMenu">
                                            {item.subitems.map((subitem, subSubIndex) => (
                                                <div key={subSubIndex} className="SubSubMenuItem">
                                                    <span>{subitem.subName}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DynamicMenu;