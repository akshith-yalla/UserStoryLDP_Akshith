import { Grid, Tabs } from '@mui/material';
import React from 'react'
import IconLabel from '../IconLabel';

const ExploreMenuTabs = (menuContent) => {
  // to maintain the active state of tab.
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }
  // Tabs component with a map function to render the required number of tabs
  return (
    <Tabs onChange={handleTabChange} >
      {/* map function to set the tab */}
      <Grid container >
        {/* map function to loop through menuContent and divide it into three columns */}
        <Grid container direction="column">
          <Grid item xs={4}>
            <IconLabel />
          </Grid>
        </Grid>
      </Grid>

    </Tabs>
  )
}

export default ExploreMenuTabs;
