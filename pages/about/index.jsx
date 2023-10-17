import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function BasicSelect() {
  return (
    <Box sx={{ paddingLeft: 2 }} display='flex' flexDirection='column' alignItems='start' justifyContent='start'>
      <Typography variant='h1'>About</Typography>

      <Typography variant='h2'>Author:</Typography>
      <Typography variant='h4' p={2}>
        Yair Roshal
      </Typography>

      <Typography variant='h2'>Mail:</Typography>
      <Typography variant='h4' p={2}>
        roshal5778@gmail.com
      </Typography>

      <Typography variant='h2'>Versions:</Typography>
      <Typography variant='body1' p={1}>
        ver 0.1 : hebrew date in header
      </Typography>
      <Typography variant='body1' p={1}>
        ver 1.0 : Minha
      </Typography>
      <Typography variant='body1' p={1}>
        ver 2.0 : Maariv
      </Typography>
      <Typography variant='body1' p={1}>
        ver 3.0 : Options (change font size, change font family, change border)
      </Typography>

      <Typography variant='h2'>Помогали проекту:</Typography>
      <Typography variant='body1' p={1}>
        Батья - Перевод псалом 121
      </Typography>

      <Typography variant='h2'>Ресурсы:</Typography>
      <Typography variant='body1' p={1}>
        Книга Теилим - Живая Тора 
      </Typography>
    </Box>
  )
}
