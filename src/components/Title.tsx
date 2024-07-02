import styled from "styled-components"

interface TitleProps {
  marginbottom?: number
  children: React.ReactNode
}

const StyledTitle = styled.h1<TitleProps>`
  font-size: 28px;
  font-weight: 700;
  color: #0667dc;
  text-align: center;
  margin-bottom: ${(props) => props.marginbottom || 0}px;
`

const Title = (props: TitleProps) => {
  return <StyledTitle {...props} />
}

export default Title
