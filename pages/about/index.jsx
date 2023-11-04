import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function BasicSelect() {
  const arrayVersions = [
    'ver 0.1 : hebrew date in header',
    ' ver 1.0 : Minha',
    ' ver 2.0 : Maariv  ',
    ' ver 3.0 : Options (change font size, change font family, change border)  ',
  ]

  const arrayHelp = ['Батья - Перевод псалом 91 , 121', 'Malka Krieger - Перевод псалом 43']
  const arrayBooks = ['Сидур Тегилат Ашем', 'Книга Теилим - Живая Тора']

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
      {arrayVersions.map((item, index) => (
        <Typography key={index} variant='body1' p={1}>
          {item}
        </Typography>
      ))}

      <Typography variant='h2'>Помогали проекту:</Typography>
      {arrayHelp.map((item, index) => (
        <Typography key={index} variant='body1' p={1}>
          {item}
        </Typography>
      ))}

      <Typography variant='h2'>Ресурсы:</Typography>

      {arrayBooks.map((item, index) => (
        <Typography key={index} variant='body1' p={1}>
          {item}
        </Typography>
      ))}
    </Box>
  )
}
