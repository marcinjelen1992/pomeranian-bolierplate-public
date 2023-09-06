import './styles.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { PointingDownIcon } from '../../../Components/Icons/PointingDownIcon';
import Box from '@mui/material/Box';
import DisableElevation from '../DisableElevation/DisableElevation';

export const MaterialUI = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const buttonText = isClicked
    ? `Ilość kliknięć ${clickCount}`
    : 'Ilość kliknięć 0';

  function handleClick() {
    setIsClicked(true);
    setClickCount(clickCount + 1);
  }

  return (
    <div className="muibuttonpage">
      <div>
        <Stack spacing={4} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
        </Stack>
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
          <DisableElevation />
        </Stack>
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Link
          </Button>
        </Stack>
      </div>
      <div>
        <Button variant="contained" onClick={handleClick}>
          {buttonText}
        </Button>
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>
      </div>
      <div>
        <Box sx={{ '& button': { m: 1 } }}>
          <div>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          <div>
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" size="medium">
              Medium
            </Button>
            <Button variant="outlined" size="large">
              Large
            </Button>
          </div>
          <div>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </div>
        </Box>
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" startIcon={<PointingDownIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<PointingDownIcon />}>
            Send
          </Button>
        </Stack>
      </div>
      <div>Purple button nie działa</div>
    </div>
  );
};
