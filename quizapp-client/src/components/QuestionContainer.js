import Box from '@material-ui/core/Box';


const QuestionContainer = () => {
  return (
    <Box
      style={{
        backgroundColor: '#282c34',
        textAlign: 'left',
        padding: '1em',
        borderRadius: "10px",
        border: '2px solid #ffff'
      }}
    >
      <strong>1. </strong>Multiply: (x – 4)(x + 5)?
    </Box>
  );
};

export default QuestionContainer;
