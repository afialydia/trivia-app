import React from 'react';
import { connect } from "react-redux";
import getTriviaQuestions from '../redux/set_up/set_up.actions';



const Game_Set_Up = ({getTriviaQuestions}) => {
  return (
    <div className="set_up">
      Hi I'm new here

      <button onClick={()=> getTriviaQuestions()}>Hi Press Me</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
	getTriviaQuestions: () => dispatch(getTriviaQuestions()),
});

export default connect(null, mapDispatchToProps)(Game_Set_Up);