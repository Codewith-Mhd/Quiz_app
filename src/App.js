import React, {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import qBank from "././Components/QuestionBank/QuestionBank"
import Score from "./Components/Score/Score"
import Question from "./Components/Question/Question"

class App extends Component {
  state = {
    questionBank: qBank,
    currentQuestion: 0,
    score: 0,
    selectedOption: "",
    quizEnd: false
  }

  handleOptionChange = (e) => {
    this.setState({selectedOption: e.target.value})
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.checkAnswer()
    this.handleNextQuestion()
  }

  checkAnswer = () => {
    const {questionBank, currentQuestion, selectedOption, score} = this.props
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({score: prevState.score}))
    }
  }

  handleNextQuestion = () => {
    const {questionBank, currentQuestion} = this.props
    if (currentQuestion + 1 < questionBank.lenght) {
      this.setState((prevState) => ({
        questionBank: prevState.currentQuestion + 1,
        selectedOption: ""
      }))
    } else {
      this.setState({
        quizEnd: true
      })
    }
  }

  render() {
    console.log(qBank)
    const {
      questionBank,
      currentQuestion,
      selectedOption,
      score,
      quizEnd
    } = this.props
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center ">
        <h1 className="app-title">APP QUIZ</h1>
        {!quizEnd ? (
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={this.handleOptionChange}
            onSubmit={this.handleFormSubmit}
          />
        ) : (
          <Score
            score={score}
            onNextQuestion={this.handleNextQuestion}
            className="score"
          />
        )}
      </div>
    )
  }
}
export default App
