import './styles.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectsPrev = () => {
  const [age, setAge] = useState({});

  const handleChange = (event) => {
    setAge((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className="selects-prev-div">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select number</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="pierwszy"
            value={age['pierwszy']}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <br />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select2"
            name="drugi"
            value={age.drugi}
            label="Age2"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <br />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select3"
            name="trzeci"
            value={age.trzeci}
            label="Age3"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {age.pierwszy + age.drugi + age.trzeci}
      </Box>
    </div>
  );
};
