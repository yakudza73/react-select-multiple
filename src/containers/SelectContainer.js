import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SelectList } from '../components/SelectList'
import { addOption } from '../actions/SelectActions'
//let list = [{label:"bmw", value: 0, id: 1}, {label:"bmw x2", value: 1, id: 2}, {label:"bmw x3", value: 2, id: 3}, {label:"opel", value: 3, id: 4}];

class SelectContainer extends Component {
    
    render() {
        const { select, addOptionAction } = this.props
        const selectlist = select.list
        return (
            <div className="app">
                <SelectList data={selectlist} addingOption={addOptionAction} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        select: store.select,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOptionAction: option => dispatch(addOption(option)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectContainer)
