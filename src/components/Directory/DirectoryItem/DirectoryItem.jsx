import React from 'react'
import {DirectoryItemContainer, Body, BackgroundImage} from './directoryItem.style.js'
import {useNavigate} from 'react-router-dom'

const DirectoryItem = ({category}) => {
  const {title, imageUrl, route} = category
  const navigate = useNavigate()

  const handleMoveToPage = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={handleMoveToPage}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem