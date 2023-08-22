import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  Paragraph,
  Input,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <MainContainer>
      <SubContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={onChangePassword}
        />
        {password.length < 8 ? (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        ) : null}
      </SubContainer>
    </MainContainer>
  )
}
export default PasswordValidator
