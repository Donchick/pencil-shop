import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    constructor (props) {
        super(...arguments);
        this.state = {
            visible: false,
            cancelTitle: props.cancelTitle || 'Cancel',
            submitTitle: props.submitTitle || 'Submit',
            title: props.title || '',
            content: ''
        }
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
        let { title, cancelTitle, submitTitle, content } = this.state;

        let modalOverlayClass = this.state.visible ? "visible" : "hidden";
        let backdrop = this.state.visible ? (
            <div className="modal-backdrop fade in" onClick={this.close.bind(this)} />
        ) : null;

        let titleElement = title ? (
            <div className="modal-header">
                <h4 className="modal-title">{title}</h4>
            </div>
        ) : null;

        return (
            <div className={`modal-overlay ${modalOverlayClass}`}>
                {backdrop}
                <div className="modal-dialog">
                    <div className="modal-content">
                        <span className="text-capitalize">{titleElement}</span>
                        {content &&
                            <div className="modal-body">
                                {content}
                            </div>
                        }
                        <div className="modal-btn-section">
                            <button type="button" className="cancel-btn btn btn-default" 
                                                onClick={this.close.bind(this)}>{cancelTitle}</button>
                            <button type="button" className="submit-btn btn btn-primary" 
                                                onClick={this.submit.bind(this)}>{submitTitle}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    cancelTitle: PropTypes.string,
    submitTitle: PropTypes.string,
    title: PropTypes.string
}

export default Modal;