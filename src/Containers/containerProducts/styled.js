import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1050px;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1050px) {
    width: 30%;
    margin-top: 10px;
  }

  .rec-arrow-right {
    display: none;
  }
  .rec-arrow-left {
    display: none;
  }

  .fMpHnR {
    display: none;
  }
  .sc-cOFTSb {
    display: none;
  }
`

export const DivTitle = styled.div`
  display: flex;
  max-width: 1050px;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 50px;

  @media (max-width: 1050px) {
    padding-left: 10px;
  }

  h2 {
    color: #888888;
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 50px;
    color: #23b9e2;
    font-weight: 100;
    letter-spacing: 0.5px;
    max-width: 560px;
    line-height: 1;
    @media (max-width: 1050px) {
      display: none;
    }
  }
`

export const ContainerItens = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (max-width: 1120px) {
    width: 90%;
  }
  h1 {
    margin-top: 10px;
    font-size: 26px;
    color: #23b9e2;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
`
export const ContainerParagrath = styled.div`
  width: 100%;
  height: 90px;
`
export const P = styled.p`
  margin-top: 10px;
  line-height: 1.5;
  color: black;
  font-size: 14px;
  text-align: justify;
`

export const Img = styled.img`
  width: 100%;
  height: 248px;
  border-radius: 10px;
`

export const ButtonCarousel = styled.button`
  margin-top: 10px;
  letter-spacing: 1.5px;
  font-weight: 700;
  width: 100%;
  background-color: #fdb913;
  cursor: pointer;
  border: none;
  height: 45px;
  color: white;
`
