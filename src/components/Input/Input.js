import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
	padding: 1rem 0 1rem 1rem;
	outline: none;
  border: 1px solid #ddd;
  font-size: inherit;
  margin: .5rem 0 .5rem 0;

  border-radius: 4px;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;

  box-sizing: border-box;
	-webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

	box-shadow: 1px 1px 4px #EBEBEB;
	-moz-box-shadow: 1px 1px 4px #EBEBEB;
  -webkit-box-shadow: 1px 1px 4px #EBEBEB;

  :focus, :hover {
    border: 1px solid #bbb;
  }

  .invalid {
    border: 1px solid red;
  }
`

export default Input
