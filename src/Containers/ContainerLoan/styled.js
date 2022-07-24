import styled from 'styled-components'

export const Divloan = styled.div`
  background-color: #007bff;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 420px;
  display: flex;
  align-items: center;
`
export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 33%;
  height: 100%;
  background-image: url(https://www.crefisa.com.br/wp-content/uploads/2019/08/destaque-agende-uma-visita-min.jpg);
`

export const Divitens = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  width: 50%;
  max-width: 775px;
  justify-content: space-between;
  padding: 5px;
`

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 35%;
  gap: 20px;
  p {
    color: white;
  }
  h2 {
    font-size: 55px;
    font-weight: 200;
    letter-spacing: 0.5px;
    color: white;
  }
`

export const DivScheduling = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 60%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  input {
    outline: none;
    border: none;
  }

  button {
    color: white;
    font-size: 15px;
    font-weight: 500;
    margin-top: 30px;
    width: 100%;
    height: 40px;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;
    cursor: pointer;
  }
`

export const Input = styled.input`
  width: 49%;
  padding-left: 10px;
  height: 40px;
`
export const InputEmail = styled.input`
  width: 100%;
  padding-left: 10px;
  height: 40px;
`

export const ParagraphTop = styled.p``

export const ParagraphButtom = styled.p`
  font-weight: 400;
  font-size: 20px;
`
