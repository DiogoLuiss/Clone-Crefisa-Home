import React from 'react'
import Carousel from 'react-elastic-carousel'

import {
  Container,
  DivTitle,
  ContainerItens,
  ContainerParagrath,
  P,
  Img,
  ButtonCarousel
} from './styled'

const Services = [
  {
    id: '1',
    img: 'https://www.crefisa.com.br/wp-content/uploads/2020/09/1040_x_700px_Banner-Cartões-380x380.png',
    title: 'Câmbio Crefisa, solicite o seu!',
    strong: 'Pré-Pago ',
    paragraph: 'Solicite o seu cartão ',
    paragraph2:
      'Crefisa e tenha muito mais agilidade e segurança nas transações financeiras.',
    button: 'Peça seu cartão'
  },
  {
    id: '2',
    img: 'https://www.crefisa.com.br/wp-content/uploads/2019/05/Img-Prod-1-380x380.jpg',
    title: 'Solicite seu Cartão Crefisa',

    paragraph: 'Envie e receba Dinheiro do exterior com o ',

    strong: 'Crefisa Câmbio. ',

    paragraph2: 'Conheça nossas soluções.',
    button: 'Faça uma simulação'
  },
  {
    id: '3',
    img: 'https://www.crefisa.com.br/wp-content/uploads/2020/07/1040_x_700_px_Renegociação-de-Dívidas-380x380.png',
    title: 'Renegociação de Dívidas',
    strong: 'Renegocie sua dívida ',
    paragraph2:
      'com a Crefisa e volte a ter dinheiro na mão. Aproveite as condições!',

    button: 'Renegociar minha dívida'
  },
  {
    id: '4',
    img: 'https://www.crefisa.com.br/wp-content/uploads/2019/05/crédito-pessoal-min-2-380x380.jpg',
    title: 'Empréstimo Pessoal',

    strong: 'Faça seu empréstimo',
    paragraph2:
      ' e receba no mesmo dia! Dinheiro rápido, mesmo se estiver negativado.',

    button: ' Faça seu empréstimo'
  }
]

const breakPoints = [
  { width: 950, itemsToShow: 1 },

  { width: 1000, itemsToShow: 4 }
]

function ProductCarousel() {
  return (
    <Container>
      <DivTitle>
        <h2>Nossos produtos</h2>
        <h3>Produtos para você e sua empresa</h3>
      </DivTitle>

      <Carousel itemsToShow={4} breakPoints={breakPoints}>
        {Services &&
          Services.map((Services) => (
            <ContainerItens key={Services.id}>
              <Img src={Services.img}></Img>

              <h1>{Services.title} </h1>
              <ContainerParagrath>
                <P>
                  {Services.paragraph} <strong>{Services.strong}</strong>
                  {Services.paragraph2}
                </P>
              </ContainerParagrath>
              <ButtonCarousel> {Services.button} </ButtonCarousel>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default ProductCarousel
