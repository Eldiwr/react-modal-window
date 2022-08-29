import { Component } from 'react';
import { Modal } from './ModalWindow/ModalWindow';



export class App extends Component {

  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type='button' onClick={this.toggleModal}>Открыть модальное окно</button>
        {showModal &&
        <Modal onClose={this.toggleModal}>
          <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi consectetur?
              Deleniti illum consequuntur doloremque cumque velit eveniet ipsa ad.
              Nisi voluptas ipsam rerum voluptatibus ipsa tempora quibusdam molestias sit!</p>
            <button type='button' onClick={this.toggleModal}>Закрыть модальное окно</button>
        </Modal>}
      </>
    )
  }
}


