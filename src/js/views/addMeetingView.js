class AddMeetingView {
  _btnOpen = document.querySelector('.button__new-event');

  addHandlerShowError(el) {
    el.classList.add('.hidden');
    el.querySelector('.error__btn-close').addEventListener(
      this._toggleErrorMessage.bind(this)
    );
  }

  addHandlerShowWindow(handler) {
    if (!this._btnOpen) {
      return;
    }

    this._btnOpen.addEventListener('click', function (evt) {
      evt.preventDefault();

      const formWindow = window.open(
        'create-event.html',
        '_blank',
        'toolbar=0,location=0,menubar=0,width=900,height=600'
      );
      formWindow.addEventListener('load', function () {
        const form = formWindow.document.querySelector('.event');
        const error = formWindow.document.querySelector('.error');
        const btnCancel = form.querySelector('.button__cancel');

        form.addEventListener('submit', function (evtForm) {
          evtForm.preventDefault();

          const dataArr = [...new FormData(this)];
          const data = Object.fromEntries(dataArr);
          if (handler(data)) {
            formWindow.close();
          } else {
            error.classList.remove('hidden');
            error
              .querySelector('.error__btn-close')
              .addEventListener('click', function () {
                error.classList.add('hidden');
              });
          }
        });

        btnCancel.addEventListener('click', function () {
          formWindow.close();
        });
      });
    });
  }
}

export default new AddMeetingView();
