import React from 'react'

import { NextPage } from 'next'

const Index: NextPage = (): JSX.Element => {
    React.useEffect(() => {
        document.title = "NEXT-REACT-TS"
    }, [])

    return (
        <h1>NEXT-REACT-TS-STYLED</h1>
    )
}

export default Index