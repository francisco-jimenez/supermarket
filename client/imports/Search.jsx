import React from 'react'
import { Input } from 'semantic-ui-react'

const Search = (props) => (
  <Input placeholder='Search...' onChange = {props.searchItems}/>
)

export default Search
