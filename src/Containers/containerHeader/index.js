import React from 'react'

import {
  DivMain,
  DivHeader,
  DivMenuTop,
  DivMainMenu,
  Divimg,
  DivCompany,
  DivEnd
} from './styled'

function Header() {
  return (
    <DivMain>
      <DivHeader>
        <DivMenuTop>
          <div>
            <ul>
              <li>ATENDIMENTO</li>
              <li>INSTITUCIONAL</li>
              <li>BLOG</li>
              <li>CREFISA SHOP</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>ABRA SUA CONTA</li>
              <li style={{ background: '#fdb913', padding: 10 }}>
                FAÇA SEU EMPRESTIMO
              </li>
            </ul>
          </div>
        </DivMenuTop>
        <DivMainMenu>
          <Divimg>
            <img
              src="	https://www.crefisa.com.br/wp-content/uploads/2019/05/Logo.png
"
            ></img>
          </Divimg>

          <DivCompany>
            <ul>
              <li>Para você</li>
              <li>para sua empresa</li>
              <li>Beneficiários</li>
            </ul>
          </DivCompany>

          <DivEnd>
            <ul>
              <li>O que Procura</li>
              <li>Acessar</li>
            </ul>
          </DivEnd>
        </DivMainMenu>
      </DivHeader>
    </DivMain>
  )
}

export default Header
