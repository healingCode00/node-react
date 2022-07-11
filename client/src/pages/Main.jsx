import React from 'react'
import { Box, Container } from '@mui/material'
import BoardTable from '../components/BoardTable'
import { useRecoilValue } from 'recoil'
import {fBoardState} from '../components/RecoilAtom'

export default function Main() {

  const boardData = useRecoilValue(fBoardState)

  return (
    <Container>
      <Box>
      Simple Board - react & node
      </Box>
      <Box marginTop={'30px'}>
        <BoardTable data={boardData} />
      </Box>
    </Container>
  )
}
