import React from 'react'
import ExploreMenuTabs from '../../molecules/ExploreMenuTabs';

const ExploreMenu = () => {
  const { menuContent } = useQuery(category)

  return (
    <ExploreMenuTabs data={menuContent} />
      
  )
}

export default ExploreMenu;
