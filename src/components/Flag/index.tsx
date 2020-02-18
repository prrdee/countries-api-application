import * as React from 'react'
import { FlagProps } from '../../types'

const Flag = ({ imageUrl, name }: FlagProps) => (
  <img src={imageUrl} alt={name} height="40px" width="40px" />
)

export default Flag
