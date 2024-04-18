import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Bottomnav() {
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{ width: "100%" }} classame="bottomNavContainer" >
            <BottomNavigation
                
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction 
                    icon={<AccountBalanceWalletIcon sx={{ color: value === 0 ? "black" : "inherit" }} />} 
                />
                <BottomNavigationAction 
                    icon={<ExploreIcon sx={{ color: value === 1 ? "black" : "inherit" }} />} 
                />
                <BottomNavigationAction 
                    icon={<NotificationsIcon sx={{ color: value === 2 ? "black" : "inherit" }} />} 
                />
                <BottomNavigationAction 
                    icon={<SettingsIcon sx={{ color: value === 3 ? "black" : "inherit" }} />} 
                />
            </BottomNavigation>
        </Box>
    );
}