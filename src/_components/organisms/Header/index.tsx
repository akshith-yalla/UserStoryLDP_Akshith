import React from 'react'
import Button from '../../atoms/Button';
import BookUploadCard from '../../molecules/BookUploadCard';
import ExploreMenuTabs from '../../molecules/ExploreMenuTabs';

const Header = () => {
  const searchAPI = () => {

  }

  const exploreMenu = () => {
    const results = searchAPI();
    return <ExploreMenuTabs data={results} />
  }

  const uploadBook = () => {
    const uploadAPI = '';
    if (uploadAPI) {
      return <BookUploadCard {...uploadAPI} />
    } else {
      return "failed";
    }
  }

  return (
    <div>
      <logo />
      <Button onClick={exploreMenu} />
      <Button onSubmit={uploadBook} />
    </div>
  )
}

export default Header
