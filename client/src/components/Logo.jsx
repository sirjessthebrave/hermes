import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../static/logo-wirecutter.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <img src={logo} width="100%" height="100%" alt="/" />
            </Wrapper>
        )
    }
}

export default Logo