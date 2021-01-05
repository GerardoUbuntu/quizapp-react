import Container from '@material-ui/core/Container';
import QuestionContainer from './QuestionContainer';
import ChoicesContainer from './ChoicesContainer';
const QuestionPage = () => {
  return (
    <div className="question">
      <Container>
        <QuestionContainer></QuestionContainer>
        <ChoicesContainer checkbox={false}></ChoicesContainer>
      </Container>
    </div>
  );
};

export default QuestionPage;
