import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

class QuizzesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllQuizzes().then((quizzes) => {
      this.setState({
        quizzes: quizzes.data.data,
        isLoading: false,
      });
    });
  };

  updateQuiz = (id, e) => {
    e.preventDefault();
    window.location.href = `/quizzes/update/${id}`;
  };

  deleteQuiz = (id, e) => {
    e.preventDefault();
    if (
      window.confirm(
        `Do you want to delete the Quiz ${id} permanently?`
      )
    ) {
      api.deleteQuizById(id);
      window.location.reload();
    }
  };

  render() {
    const { quizzes, isLoading } = this.state;

    let showQuizzes = true;
    if (!quizzes.length && !isLoading) {
      showQuizzes = false;
    }

    return (
      <ul>
        {quizzes.map((quiz, index) => {
          return (
            <div key={index}>
              {quiz.name}: {quiz.author}: {quiz._id}{" "}
              <button onClick={(e) => this.updateQuiz(quiz._id, e)}>
                Update
              </button>{" "}
              <button onClick={(e) => this.deleteQuiz(quiz._id, e)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default QuizzesList;
