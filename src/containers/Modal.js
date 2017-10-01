import React, { Component } from 'react';

class Modal extends Component {
    state = {
        visible: false,
        cancelTitle: this.props.cancelTitle || 'Cancel',
        submitButton: this.props.submitButton || 'Submit',
        title: '',
        content: ''
    }

    close () {
        this.setState({
            visible: false
        }, () => this.reject())
    }

    submit () {
        this.setState({
            visible: false
        }, () => this.resolve())
    }

    open (content = '') {
        this.setState({
            visible: true,
            content: content
        });

        let promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });

        return promise;
    }

    render () {
        var modalClass = this.state.visible ? "visible" : "hidden";
        var modalStyles = this.state.visible ? {display: "block"} : {display: "none"};
        var backdrop = this.state.visible ? (
            <div className="modal-backdrop fade in" onClick={this.close.bind(this)} />
        ) : null;

        var title = this.state.title ? (
            <div className="modal-header">
                <h4 className="modal-title">{this.state.title}</h4>
            </div>
        ) : null;

        return (
            <div className={modalClass} style={modalStyles}>
                {backdrop}
                <div className="modal-dialog">
                    <div className="modal-content">
                        {title}
                        {this.state.content &&
                            <div className="modal-body">
                                {this.state.content}
                            </div>
                        }
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" 
                                             onClick={this.close.bind(this)}>{this.state.cancelTitle}</button>
                            <button type="button" className="btn btn-primary" 
                                             onClick={this.submit.bind(this)}>{this.state.submitButton}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;