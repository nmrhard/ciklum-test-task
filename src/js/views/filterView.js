class FilterView {
  _parentElement = document.querySelector('#user-name');

  addHandlerChangeUser(handler) {
    this._parentElement.addEventListener('change', function (evt) {
      const user = evt.target.value;

      handler(user);
    });
  }
}

export default new FilterView();
