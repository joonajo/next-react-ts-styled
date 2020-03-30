import React from 'react'

import { NextPage } from 'next'
import styled from 'styled-components'

const AppWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 100vh;
`

const Title = styled.h1`
    font-weight: normal;
`

const Text = styled.p`
    
`

const App: NextPage = (): JSX.Element => {
    React.useEffect(() => {
        document.title = "NEXT-REACT-TS"
    }, [])

    return (
        <AppWrapper >
            <Title>Hello!</Title>
            <Text>NextJS x React x TypeScript x Styled-components</Text>
        </AppWrapper>
    )
}

export default App