import './rightSidebar.css';

import Profile from './profile/profile';
import DynamicMenu from './dynamicMenu/dynamicMenu';

interface RightSidebarProps {
    selectedMenuIndex: number | null;
    onSelectionChange: (selection: { selectedSubMenu: number | null; selectedSubSubMenu: any }) => void;
}

const RightSidebar = ({ selectedMenuIndex, onSelectionChange }: RightSidebarProps) => {
    return (
        <div className="RightSidebar">
            <Profile username="John" />
            <DynamicMenu 
                selectedMenuIndex={selectedMenuIndex} 
                onSelectionChange={onSelectionChange} 
            />
        </div>
    );
};

export default RightSidebar;
