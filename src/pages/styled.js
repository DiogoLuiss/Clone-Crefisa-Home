import styled from 'styled-components'

export const DivMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const DivButtomCarousel = styled.div`
  background-color: #fdb913;
  width: 100%;
  display: flex;
  letter-spacing: 1.4px;
  height: 50px;
  align-items: center;
  justify-content: center;
  gap: 700px;
  position: relative;
  bottom: 35px;

  p {
    font-size: 15px;
    color: white;
    margin-right: 350px;
  }
`

export const DivFooterEnd = styled.div`
  background: #1bafd8;
  width: 100%;
  display: flex;
  flex-direction: row;
  letter-spacing: 1.4px;
  height: 50px;
  align-items: center;
  justify-content: center;
  gap: 700px;
  position: relative;
  ul {
    display: flex;
    gap: 30px;
    color: white;
    font-size: 11px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    display: flex;
    justify-content: center;

    width: 200px;
    height: 100%;
  }
`
export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  background-color: #fdb913;
  width: 241px;
  height: 50px;
  color: white;
  font-size: 15px;
  position: absolute;
  z-index: 1;

  left: 20%;
  top: 70%;
  border: none;
  cursor: pointer;
  :hover {
    transition: 1s;
    opacity: 0.8;
  }
  @media (max-width: 1550px) {
    left: 20%;
    top: 60%;
  }
  @media (max-width: 1550px) {
    left: 20%;
    top: 60%;
  }
`
