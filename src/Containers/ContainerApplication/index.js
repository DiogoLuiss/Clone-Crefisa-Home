import React from 'react'

import { DivMain, DivLeft, DivCrefisaImg, DivParagraph, Img } from './styled'

function Application() {
  return (
    <DivMain>
      <DivLeft>
        <div>
          <h2>Nossos aplicativos</h2>
          <h3>Experiência completa</h3>
          <DivParagraph>
            <p>
              A Crefisa é completa como você! Baixe nossos aplicativos e conheça
              todas as oportunidades que temos para você ou sua empresa.
            </p>
          </DivParagraph>
        </div>

        <DivCrefisaImg>
          <div>
            <img src="https://www.crefisa.com.br/wp-content/uploads/2019/07/Icone_APP_Crefisa-Empréstimo-e1563662894763.png" />
            <p>Crefisa Empréstimo</p>
          </div>
          <div>
            <img src="https://www.crefisa.com.br/wp-content/uploads/2022/05/11.png" />
            <p>Crefisa mais</p>
          </div>
        </DivCrefisaImg>
        <div>
          <Img src="https://www.crefisa.com.br/wp-content/uploads/2019/06/nossos-apps-imagem-direita-1.png" />
        </div>
      </DivLeft>
    </DivMain>
  )
}

export default Application
