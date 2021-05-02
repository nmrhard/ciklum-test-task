class MeetingView {
  _data;
  _parentElement = document.querySelector('.meeting__data');

  _generateMarkup() {
    const meetingName = document.createElement('span');
    meetingName.classList.add('meeting__name');
    meetingName.innerText = this._data.meetingName;

    const meetingDeleteBtn = document.createElement('button');
    meetingDeleteBtn.type = 'button';
    meetingDeleteBtn.classList.add('meeting__remove');
    meetingDeleteBtn.innerText = 'X';

    const fragemnt = document.createDocumentFragment();
    fragemnt.appendChild(meetingName);
    fragemnt.appendChild(meetingDeleteBtn);

    return fragemnt;
  }

  render(data) {
    this._data =  data;
    const markup = this._generateMarkup();

    const meetingCell = this._parentElement.querySelector(`[data-day='${this._data.day}'][data-time='${this._data.time}']`);
    meetingCell.appendChild(markup);
    meetingCell.classList.add('meeting__reserved');
  }
}

export default new MeetingView();