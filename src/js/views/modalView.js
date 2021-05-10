class ModalView {
  _modal = document.querySelector('.modal');

  _overlay = document.querySelector('.overlay');

  _btnConfirm = this._modal.querySelector('.button--modal-confirm');

  _btnCancel = this._modal.querySelector('.button--modal-cancel');

  _meeting;

  constructor() {
    this._addHandlerBtnCancel();
  }

  showModal(meeting) {
    this._meeting = meeting;
    this._toggleModal();
  }

  _toggleModal() {
    this._modal.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerBtnCancel() {
    this._btnCancel.addEventListener('click', this._toggleModal.bind(this));
  }

  addHandlerBtnConfirm(handler) {
    this._btnConfirm.addEventListener('click', () => {
      const { day, time } = this._meeting.dataset;
      handler(day, time);
      this._toggleModal();
      this._meeting.innerHTML = '';
      this._meeting.removeAttribute('class');
    });
  }
}

export default new ModalView();
