import styled from 'styled-components'

export const DivMain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 100px;
  margin-top: 50px;
`

export const Divitens = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 45px;
`

export const Div = styled.div`
  width: 177px;
  height: 433px;
  h2 {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
  }
  p {
    font-size: 13px;
    color: #888888;
    margin-bottom: 15px;
  }
  h3 {
    color: #23b9e2;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`

export const DivitensButtom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  div {
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
      font-size: 14px;
      color: #23b9e2;
      font-weight: 500;
    }
  }
`

export const ParagraphCNPJ = styled.p`
  color: #aaaaaa;
  font-size: 12px;
`
export const ParagraphAddress = styled.p`
  color: #888888;
  font-size: 13px;
`

export const DivFirst = styled.div`
  width: 440px;
`
export const DivSecond = styled.div`
  width: 330px;
`
export const DivThird = styled.div`
  width: 245px;
`
