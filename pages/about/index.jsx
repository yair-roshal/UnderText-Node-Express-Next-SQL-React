import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function BasicSelect() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Typography variant='h1' align='left'>
        About
      </Typography>

      <Typography variant='h2' align='left'>
        Author:
      </Typography>
      <Typography variant='h4' align='left'>
        Yair Roshal
      </Typography>

      <Typography variant='h2' align='left'>
        Mail:
      </Typography>
      <Typography variant='h4' align='left'>
        roshal5778@gmail.com
      </Typography>

      <Typography variant='h2' align='left'>
        about versions:
      </Typography>
      <Typography variant='body1' align='left'>
        ver 0.1 : hebrew date in header
      </Typography>
      <Typography variant='body1' align='left'>
        ver 1.0 : Minha
      </Typography>
      <Typography variant='body1' align='left'>
        ver 2.0 : Maariv
      </Typography>
      <Typography variant='body1' align='left'>
        ver 3.0 : Options (change font size, change font family, change border)
      </Typography>
    </Box>
  )
}
