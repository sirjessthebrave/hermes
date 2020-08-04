import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class QuizzesInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      author: "",
    };
  }

  handleChangeInputName = async (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputAuthor = async (event) => {
    const author = event.target.validity.valid
      ? event.target.value
      : this.state.author;

    this.setState({ author });
  };


  handleIncludeQuiz = async () => {
    const { name, author } = this.state;
    const payload = { name, author };

    await api.insertQuiz(payload).then((res) => {
      window.alert(`Quiz inserted successfully`);
      this.setState({
        name: "",
        author: "",
      });
    });
  };

  render() {
    const { name, author } = this.state;
    console.log (this.state)
    return (
      <Wrapper>
        <Title>Create Quiz</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Author: </Label>
        <InputText
          type="text"
          value={author}
          onChange={this.handleChangeInputAuthor}
        />

        <Button onClick={this.handleIncludeQuiz}>Add Quiz</Button>
        <CancelButton href={"/quizzes/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default QuizzesInsert;
