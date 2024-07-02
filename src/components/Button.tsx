import styled from "styled-components"

interface ButtonProps {
  children: React.ReactNode
  type: 'submit'
}

const StyledBtn = styled.button`
  display: block;
  color: white;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 25px;
  padding: 15px 45px;
  border-radius: 30px;
  background: linear-gradient(to right, #137bc2, #08d0b4);
  margin: 0 auto;
  outline: none;
  border: none;
  cursor: pointer;
`

const Button = (props: ButtonProps) => {
  return <StyledBtn {...props} />
}

export default Button
