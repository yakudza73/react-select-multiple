import React, { Component } from 'react'
import SelectContainer from '../containers/SelectContainer'
import MainPage from '../containers/MainPage'

class App extends Component {
    render() {
        return (
            <div className="app">
                <MainPage />
                {/* <SelectContainer /> */}
            </div>
        )
    }
}

export default App
