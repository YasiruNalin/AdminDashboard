import './rightSidebar.css'

import Profile from './profile/profile'
import DynamicMenu from './dynamicMenu/dynamicMenu'

interface RightSidebarProps {
    selectedMenuIndex: number | null;
}

const RightSidebar = ({ selectedMenuIndex }: RightSidebarProps) => {
    return (
        <div className="RightSidebar">
            <Profile username="John"/>
            <DynamicMenu selectedMenuIndex={selectedMenuIndex}/>
        </div>
    );
};

export default RightSidebar