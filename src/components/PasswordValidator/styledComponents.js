import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 50vh;
  width: 80vh;
  border-radius: 10px;
  background-color: #475569;
`

export const Heading = styled.h1`
  color: #fff;
  font-family: 'Roboto';
  font-size: 23px;
`

export const Paragraph = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 20px;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
`
export const ErrorText = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 15px;
`
