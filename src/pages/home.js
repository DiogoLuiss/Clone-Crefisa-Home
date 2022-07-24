import React from 'react'

import Application from '../Containers/ContainerApplication'
import Attendance from '../Containers/containerAttendance'
import OurBrand from '../Containers/ContainerBrand'
import Footer from '../Containers/containerFooter'
import Header from '../Containers/containerHeader'
import Loan from '../Containers/ContainerLoan'
import MainCarousel from '../Containers/ContainerMainCarousel'
import ProductCarousel from '../Containers/containerProducts'
import { DivMain, DivFooterEnd, Div, DivButtomCarousel, Button } from './styled'

function Home() {
  return (
    <DivMain>
      <Header />
      <Div>
        <Button>SAIBA MAIS</Button>
        <MainCarousel />
      </Div>
      <DivButtomCarousel>
        <p>
          Atenção! A Crefisa não cobra nenhum tipo de taxa ou antecipação para
          liberação de crédito.
        </p>
      </DivButtomCarousel>
      <ProductCarousel></ProductCarousel>
      <Attendance />
      <Loan />
      <Application />
      <OurBrand />
      <Footer />
      <DivFooterEnd>
        <div>
          <ul>
            <li>Create With</li>
            <li>by Corebiz</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Copyright 2022 - Crefisa</li>
          </ul>
        </div>
      </DivFooterEnd>
    </DivMain>
  )
}

export default Home
