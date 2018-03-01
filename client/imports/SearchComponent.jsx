import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleActionIconButton = (props) => (
  <Input onClick={props.filterItemList} action={{ icon: 'search' }} placeholder='Search...' />
)

export default InputExampleActionIconButton
