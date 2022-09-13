import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const Span = styled.span`
  ${props => props.name && `width: 23%;`}
  ${props => props.quantity && `width: 23%; display: flex;`}
  ${props => props.price && `width: 23%;`}
  ${props => props.value && `margin: 0 10px;`}


`
export const Arrow = styled.div`
  cursor: pointer;
`
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

