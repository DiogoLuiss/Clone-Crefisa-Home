import React from 'react'

import {
  DivMain,
  Divitens,
  Div,
  DivFirst,
  DivSecond,
  DivThird,
  DivitensButtom,
  ParagraphCNPJ,
  ParagraphAddress
} from './styled'

function Footer() {
  return (
    <DivMain>
      <Divitens>
        <Div>
          <h2>Entre em contato</h2>
          <p>Central de Relacionamento</p>
          <h3>4004 4001</h3>
          <h3>0800 722 4444</h3>
          <p>Central de Vendas</p>
          <h3>0800 703 8888</h3>
          <p>SAC</p>
          <h3>0800 727 4884</h3>
          <p>Ouvidoria</p>
          <h3>0800 703 8891</h3>
          <p>Deficientes Auditivos e de Fala</p>
          <h3>0800 273 3374</h3>
          <h3>Chat Crefisa</h3>
        </Div>
        <Div>
          <h2>Institucional</h2>
          <p>Sobre a Crefisa</p>
          <p>Documentos de Governança</p>
          <p>Informações Financeiras</p>
          <p>Atendimento</p>
          <p>Informações e Dicas</p>
        </Div>
        <Div>
          <h2>Atendimento</h2>
          <p>Fale Conosco</p>
          <p>Agende uma visita</p>
          <p>Pontos de Atendimento</p>
          <p>Central de Cartões</p>
          <p>Renegocie Sua Dívida</p>
        </Div>
        <Div>
          <h2>Alguns Produtos</h2>
          <p>Empréstimo Pessoal</p>
          <p>Consignado Crefisa</p>
          <p>Beneficiários INSS</p>
          <p>Conta-Corrente</p>
          <p>Cartões Crefisa</p>
        </Div>
        <Div>
          <h2>Minha Conta</h2>
          <p>Empréstimo Online</p>
          <p>Abra Sua Conta I Crefisa</p>
        </Div>
      </Divitens>

      <DivitensButtom>
        <DivFirst>
          <h2>Crefisa S.A. Crédito Financiamento e Investimentos</h2>
          <ParagraphCNPJ>CNPJ: 60.779.196/0001-96</ParagraphCNPJ>
          <ParagraphAddress>
            Endereço: Rua Canadá, 387 - Jd. América, São Paulo - SP CEP:
            01.436-900*
          </ParagraphAddress>
        </DivFirst>
        <DivSecond>
          <h2>Banco Crefisa S.A.</h2>
          <ParagraphCNPJ>CNPJ: 61.033.106/0001-86</ParagraphCNPJ>
          <ParagraphAddress>
            Endereço: Rua Canadá, 390 - Jd. América, São Paulo - SP CEP:
            01.436-000*
          </ParagraphAddress>
        </DivSecond>
        <DivThird>
          <ParagraphAddress>
            *Nesses endereços, não há atendimento a clientes. Encontre nossos
            Pontos de Atendimento clicando aqui.
          </ParagraphAddress>
        </DivThird>
      </DivitensButtom>
    </DivMain>
  )
}

export default Footer
