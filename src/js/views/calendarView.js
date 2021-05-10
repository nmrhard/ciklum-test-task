import { WORK_DAYS, SLOTS_TIME_COUNT } from '../config';

class CalendarView {
  _parentElement = document.querySelector('.meeting__data');

  _innerPage = document.querySelector('.page-main--inner');

  _createTableElement(el, count, time, day = 0) {
    let meetingDay = day;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const newEl = document.createElement(el);
      if (time >= 0) {
        newEl.setAttribute('data-time', time);
        newEl.setAttribute('data-day', meetingDay++);
      }
      fragment.appendChild(newEl);
    }

    return fragment;
  }

  _generateMarkup() {
    const rows = this._createTableElement('tr', SLOTS_TIME_COUNT);
    const rowsTime = rows.querySelectorAll('tr');

    const fragment = document.createDocumentFragment();
    rowsTime.forEach((row, index) => {
      const colName = document.createElement('td');
      const time = index + 10;
      colName.innerText = `${time}:00`;

      fragment.appendChild(colName);
      fragment.appendChild(this._createTableElement('td', WORK_DAYS, time));
      row.appendChild(fragment);
    });

    return rows;
  }

  render() {
    if (!this._innerPage) {
      this._parentElement.appendChild(this._generateMarkup());
    }
  }
}

export default new CalendarView();
