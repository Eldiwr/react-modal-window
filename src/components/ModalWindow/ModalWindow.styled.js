import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: gray;
`

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    min-width: 500px;
    max-height: 500px;
    padding: 15px;
    background-color: white;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`