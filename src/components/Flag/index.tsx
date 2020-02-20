import * as React from 'react'
import { FlagProps } from '../../types'
import { Box, Image } from 'grommet'

const Flag = ({ imageUrl, name }: FlagProps) => (
  <Box height="small" width="small" border="all">
    <Image fit="contain" src={imageUrl} alt={name} />
  </Box>
)

export default Flag
