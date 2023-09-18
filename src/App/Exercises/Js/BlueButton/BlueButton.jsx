import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

export default function BlueButton({ input }) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">{input}</ColorButton>
    </Stack>
  );
}
