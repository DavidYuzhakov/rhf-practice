import { FormEventHandler } from "react"
import styled from "styled-components"

interface FormProp {
  children: React.ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
}

const StyledForm = styled.form`
  position: relative;
  max-width: 380px;
  width: 100%;
  padding: 35px 50px;
  background-color: #fff;
`

const Form = (props: FormProp) => {
  return <StyledForm {...props} />
}

export default Form
