import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions';

let input = '';

const mapStateToProps = (state) => ({
    pencils: state.pencils
});

const mapDispatchToProps = (dispatch) =>({
    actions: bindActionCreators(actions, dispatch)
});

class AddPencil extends Component{
    onAddPencilClick (value) {
        this.props.actions.addPencil(value);
    }

    render () {
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    this.onAddPencilClick(input.value);
                    input.value = ''
                }}>
                    <input ref={node => {
                        input = node
                    }} />
                    <button type="submit">
                        Add Pencil
                    </button>
                </form>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddPencil);
