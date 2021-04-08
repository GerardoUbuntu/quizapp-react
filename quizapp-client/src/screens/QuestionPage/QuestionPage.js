import Container from '@material-ui/core/Container';
import QuestionContainer from '../../components/QuestionContainer/QuestionContainer';
import ChoicesContainer from '../../components/ChoicesContainer/ChoicesContainer';
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
