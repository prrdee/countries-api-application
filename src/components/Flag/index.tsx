import * as React from 'react'

import { Box, Image } from 'grommet'

export type FlagProps = {
  imageUrl: string
  name: string
}

const Flag = ({ imageUrl, name }: FlagProps) => (
  <Box height="small" width="small">
    <Image fit="contain" src={imageUrl} alt={name} />
  </Box>
)

export default Flag
