import Input from './Input'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  display: block;
  font-weight: bold;

  span.required {
    color: red;
  }
`

const StyledInput = styled(Input)`
  width: 100%;
  top: -25px;
`

const LabeledInput = ({ label, required, ...props }) => {
  return (
    <>
      <StyledLabel htmlFor={props.id}>
        {label} {required && <span class="required">*</span>}
      </StyledLabel>
      <StyledInput {...props} />
    </>
  )
}

LabeledInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

export default LabeledInput
