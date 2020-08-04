import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class QuizUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            author: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.validity.valid
            ? event.target.value
            : this.state.author

        this.setState({ author })
    }

    handleUpdateMovie = async () => {
        const { id, name, author } = this.state
        const payload = { name, author }

        await api.updateQuizById(id, payload).then(res => {
            window.alert(`Quiz updated successfully`)
            this.setState({
                name: '',
                author: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const quiz = await api.getQuizById(id)

        this.setState({
            name: quiz.data.data.name,
            author: quiz.data.data.author,
        })
    }

    render() {
        const { name, author } = this.state
        console.log(this.state)
        return (
            <Wrapper>
                <Title>Update Movie</Title>

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

                <Button onClick={this.handleUpdateMovie}>Update Movie</Button>
                <CancelButton href={'/quizzes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default QuizUpdate