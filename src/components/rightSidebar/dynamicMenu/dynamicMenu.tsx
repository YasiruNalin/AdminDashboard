import { useState, useEffect } from 'react';
import { MenuItems } from '../../../menuData/menuData';
import './dynamicMenu.css';

interface DynamicMenuProps {
    selectedMenuIndex: number | null;
    onSelectionChange: (selection: { selectedSubMenu: number | null; selectedSubSubMenu: any }) => void;
}

const DynamicMenu = ({ selectedMenuIndex, onSelectionChange }: DynamicMenuProps) => {
    const [selectedSubMenu, setSelectedSubMenu] = useState<number | null>(null);
    const [selectedSubSubMenu, setSelectedSubSubMenu] = useState<any>(null);

    useEffect(() => {
        setSelectedSubMenu(null);
        setSelectedSubSubMenu(0);
        
        if (selectedMenuIndex !== null) {
            const firstSubMenu = MenuItems[selectedMenuIndex]?.items?.[0];
            if (firstSubMenu) {
                handleSubMenuClick(0, firstSubMenu);
            }
        }
    }, [selectedMenuIndex]);

    const handleSubMenuClick = (subIndex: number, item: any) => {
        setSelectedSubMenu(subIndex);
        if (item.subitems && item.subitems.length > 0) {
            //
        } else {
            setSelectedSubSubMenu(null);
            onSelectionChange({ selectedSubMenu: subIndex, selectedSubSubMenu: null });
        }
    };

    const handleSubSubMenuClick = (subItem: any) => {
        console.log(subItem);
        setSelectedSubSubMenu(subItem);
        onSelectionChange({ selectedSubMenu, selectedSubSubMenu: subItem });
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
                                    onClick={() => handleSubMenuClick(subIndex, item)}
                                >
                                    <span>{item.name}</span>
                                    {selectedSubMenu === subIndex && item.subitems && (
                                        <div className="SubSubMenu">
                                            {item.subitems.map((subitem, subSubIndex) => (
                                                <div 
                                                    key={subSubIndex} 
                                                    className={selectedSubSubMenu === subSubIndex ? "SubSubMenuItem activeSubItem" : "SubSubMenuItem"}
                                                    onClick={() => handleSubSubMenuClick(subSubIndex)}
                                                >
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