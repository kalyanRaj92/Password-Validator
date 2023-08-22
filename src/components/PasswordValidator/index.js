/* import {useState} from 'react'

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
export default PasswordValidator */

import {useState} from 'react'

import {
  MainContainer,
  PasswordValidatorContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMessage = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showErrorMessage && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidatorContainer>
    </MainContainer>
  )
}

export default PasswordValidator

