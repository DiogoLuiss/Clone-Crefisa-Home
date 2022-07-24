import React from 'react'

import {
  Divloan,
  DivImg,
  Divitens,
  DivInfo,
  DivScheduling,
  ParagraphTop,
  ParagraphButtom,
  Input,
  InputEmail
} from './styled'

function Loan() {
  return (
    <Divloan>
      <DivImg></DivImg>
      <Divitens>
        <DivInfo>
          <ParagraphTop>faça seu impréstimo</ParagraphTop>
          <h2>Agende uma visita</h2>
          <ParagraphButtom>
            Agende uma visita agora, faça seu empréstimo e tenha dinheiro
            rápido!
          </ParagraphButtom>
        </DivInfo>
        <DivScheduling>
          <div>
            <Input type="string" placeholder="Seu nome"></Input>
            <Input type="tel" placeholder="Seu telefone"></Input>
          </div>
          <InputEmail type="email" placeholder="Seu e-email"></InputEmail>
          <button>Continuar</button>
        </DivScheduling>
      </Divitens>
    </Divloan>
  )
}

export default Loan
