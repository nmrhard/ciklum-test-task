class AddMeetingView {
  _btnOpen = document.querySelector('.button__new-event');

  addHandlerShowWindow(handler) {
    if(!this._btnOpen) { return; }

    this._btnOpen.addEventListener('click', function(evt) {
      evt.preventDefault();

      const formWindow = window.open('create-event.html', '_blank', 'toolbar=0,location=0,menubar=0,width=900,height=600');
      formWindow.addEventListener('load', function() {
        const form = formWindow.document.querySelector('.event');
        form.addEventListener('submit', function(evt) {
          evt.preventDefault();
  
          const dataArr = [...new FormData(this)];
          const data = Object.fromEntries(dataArr);
          formWindow.close();
          handler(data);
        })
      });
    });
  }
}

export default new AddMeetingView();