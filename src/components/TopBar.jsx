import React from 'react';
import { TopBar, AppProvider } from '@shopify/polaris'
const Topbar = ({ toggleMobileNavigationActive }) => {

    const theme = {
        colors: {
            topBar: {
                background: "#357997"
            }
        }
    };
    return (
        <AppProvider theme={theme}>
            <TopBar
                showNavigationToggle
                onNavigationToggle={toggleMobileNavigationActive}
            />
        </AppProvider>
    )
}

export default Topbar;