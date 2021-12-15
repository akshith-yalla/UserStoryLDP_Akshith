import React from 'react'
const SecondaryTabs = (data) => {
  // to maintain the active state of tab.
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }
    // Tabs component with a map function to render the required number of tabs
  return (
    <div>
      {/* map function to loop through and set the tabs */}
    </div>
  )
}

export default SecondaryTabs
