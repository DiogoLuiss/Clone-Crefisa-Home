import React from 'react'

import {
  DivMain,
  DivLeft,
  DivParagraph,
  DivRight,
  Button1,
  Button2
} from './styled'

function Attendance() {
  return (
    <DivMain>
      <DivLeft>
        <h2>Pontos de atendimento</h2>
        <h3>Mais de 1.000 pontos de atendimento para você!</h3>
        <DivParagraph>
          <div>
            <p>
              Informe seu CEP ou Endereço e encontraremos os Pontos de
              Atendimento mais próximos de você.
            </p>
          </div>
        </DivParagraph>
      </DivLeft>

      <DivRight>
        <input placeholder="Digite seu CEP" type="string" maxLength="8" />
        <a>LOCALIZAÇÃO ATUAL</a>
        <div>
          <Button1>OU DIGITE SEU ENDEREÇO</Button1>
          <Button2>PESQUISAR LOCAIS</Button2>
        </div>
      </DivRight>
    </DivMain>
  )
}

export default Attendance
