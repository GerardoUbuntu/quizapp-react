import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Choice from '../Choice/Choice';
import Button from '@material-ui/core/Button';

const ChoicesContainer = ({ checkbox }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  let choices = [];
  for (let i = 0; i < 4; i++) {
    choices.push(<Choice key={i} checkbox={checkbox}></Choice>);
  }

  return (
    <Box style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
      <FormControl style={{ width: '100%' }}>
        {checkbox ? (
          <div>{choices}</div>
        ) : (
          <RadioGroup
            aria-label="choice"
            name="choice"
            value={value}
            onChange={handleChange}
          >
            {choices}
          </RadioGroup>
        )}
        <Box style={{ textAlign: 'center' }}>
          <Button
            style={{ marginTop: '20px', width: '25%' }}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default ChoicesContainer;
