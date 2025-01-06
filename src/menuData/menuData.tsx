import{
    UilApps,
    UilEstate,
    UilClipboardAlt,
    //UilUsersAlt,
    //UilPackage,
    UilChart,
    //UilSignOutAil,
} from "@iconscout/react-unicons"

//Sidebar Data
export const SidebarData = [
    {
        icon: UilApps,
        heading: "Dashboard",
        link:"#",
    },
    {
        icon: UilEstate,
        heading: "Organization",
        link:"#",
    },
    {
        icon: UilClipboardAlt,
        heading: "Scenario",
        link:"#",
    },
    {
        icon: UilChart,
        heading: "Analysis",
        link:"#",
    },
];

export const MenuItems = [
    {
        heading: "Dashboard",
        items: [
            { name: "Results", link: "#overview" },
            { name: "Farm Carbon Footprint", link: "#reports" },
            { name: "Processing Carbon Footprint", link: "#reports" },
        ],
    },
    {
        heading: "Organization",
        items: [
            { name: "My Organization", link: "#team" },
            { name: "Customers", link: "#structure" },
        ],
    },
    {
        heading: "Scenario",
        items: [
            { name: "My Scenarios", link: "#new-scenario" },
            { name: "New Scenario", subitems:[
                {
                    subName: "Scenario Info"
                },
                {
                    subName: "Facility Details"
                },
                {
                    subName: "Applicable Parameters"
                },
            ], link: "#saved-scenarios" },
        ],
    },
    {
        heading: "Analysis",
        items: [
            { name: "Graphs", link: "#graphs" },
            { name: "Trends", link: "#trends" },
        ],
    },
];