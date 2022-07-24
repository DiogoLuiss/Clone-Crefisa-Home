import styled from 'styled-components'

export const DivMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  width: 100vw;
  z-index: 100;
  background-color: black;
`
export const DivMenuTop = styled.div`
  background: #1bafd8;
  width: 100%;
  display: flex;
  flex-direction: row;
  letter-spacing: 1.4px;
  height: 50px;
  align-items: center;
  justify-content: center;
  gap: 400px;
  padding: 0px 400px;
  position: relative;

  ul {
    display: flex;
    gap: 30px;
    list-style: none;
    z-index: 200;
    font-size: 10px;
    height: 100%;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    height: 100%;
  }
`
export const DivMainMenu = styled.div`
  background-color: #39c0e5;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0px 350px;
  font-weight: 400;
  z-index: 1000;
  width: 100%;

  div {
    height: 100%;
    display: flex;
    align-items: center;
  }
`

export const Divimg = styled.div``

export const DivCompany = styled.div`
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
    z-index: 200;
    font-size: 10px;
    height: 100%;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`

export const DivEnd = styled.div`
  margin-left: 170px;

  ul {
    display: flex;
    gap: 200px;
    list-style: none;
    z-index: 200;
    height: 100%;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 600;
  }
`
