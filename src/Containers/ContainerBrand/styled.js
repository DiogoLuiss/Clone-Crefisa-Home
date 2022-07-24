import styled from 'styled-components'

export const DivMain = styled.div`
  background-color: #007bff;
  width: 100%;

  margin-bottom: 50px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 10px;
`
export const DivImg = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
`
export const ImgTop = styled.img`
  width: 240px;
  height: 192px;
`
export const ImgButtom = styled.img`
  width: 240px;
`

export const Divitens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 5px;
`

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 30px;
  p {
    color: white;
  }
  h2 {
    font-weight: 300;
    letter-spacing: 0.5px;
    max-width: 560px;
    line-height: 1;
    color: white;
    font-size: 60px;
  }
`

export const ParagraphTop = styled.p``

export const DivIconsnNetworks = styled.div`
  color: white;
  display: flex;
  gap: 20px;
`
