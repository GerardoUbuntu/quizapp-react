import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import Radio from '@material-ui/core/Radio';

const Choice = ({ checkbox }) => {
  const [checked, setChecked] = useState(false);
  let choice;
  if (checkbox) {
    choice = (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    );
  } else {
    choice = <Radio />;
  }

  return (
    <Box style={{ width: '100%', marginTop:"10px" }}>
      <Paper style={{ padding: '5px' }} elevation={3}>
        <FormControlLabel value="Testing Check" control={choice} label="Testing Check" />
      </Paper>
    </Box>
  );
};

export default Choice;
