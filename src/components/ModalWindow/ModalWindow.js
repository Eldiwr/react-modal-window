import { Component } from "react";
import { ModalBackdrop, ModalContent } from "./ModalWindow.styled";
import { createPortal } from "react-dom";

const ModalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            this.props.onClose();
        } 
    };

    handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };
    

    render() {
        return createPortal (
            <ModalBackdrop onClick={this.handleBackdropClick}>
                <ModalContent>{ this.props.children }</ModalContent>
            </ModalBackdrop>
            , ModalRoot)
    }
}