import { Style } from '../../constants'
import styled from 'styled-components'

const Button = styled.button`
  padding: 0.65rem .75rem;
  margin: 1rem;
  width: 100%;
  max-width: 10rem;
  font-size: inherit;
  display: block;
  color: #fff;
  background: ${Style.BLUE};
  border-radius: 5px;
  border: none;
  transition: background .15s linear;
  cursor: pointer;

  :disabled, :disabled:hover {
    background: #efefef;
    color: #ccc;
    cursor: default;
  }

  .teal {
    background: ${Style.TEAL};
  }

`

export default Button
