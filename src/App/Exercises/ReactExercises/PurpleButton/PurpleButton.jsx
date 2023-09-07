import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function PurpleButton() {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">Custom CSS</ColorButton>
    </Stack>
  );
}
