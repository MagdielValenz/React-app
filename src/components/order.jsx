import React from 'react'
import {ScrollContainer, ScrollPage, Animator} from 'react-scroll-motion';
const Order = () => {
  return (
      <ScrollContainer>
        <ScrollPage page={0}>
            <Animator>
                <h2> SCROLL ANIMATION</h2>
            </Animator>
        </ScrollPage>
      </ScrollContainer>
    
  )
}

export default Order;