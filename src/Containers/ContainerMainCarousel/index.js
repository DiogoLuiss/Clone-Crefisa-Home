import React from 'react'
import Carousel from 'react-elastic-carousel'

import { Container } from './styled'

const Imgcarousel = [
  {
    id: '1',
    img: 'https://www.crefisa.com.br/wp-content/uploads/2022/06/1920_x_680-Crefisa_Shop_Banner-Desktop.jpg'
  },
  {
    id: '2',
    img: 'https://www.crefisa.com.br/wp-content/uploads/2022/05/site-novo.jpg '
  }
]

function MainCarousel() {
  return (
    <Container>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={7000}
        itemsToShow={1}
        initialActiveIndex
      >
        <img width="100%" src={Imgcarousel[0].img}></img>
        <img width="100%" src={Imgcarousel[1].img}></img>
      </Carousel>
    </Container>
  )
}

export default MainCarousel
