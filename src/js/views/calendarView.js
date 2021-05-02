import { WORK_DAYS, SLOTS_TIME_COUNT } from './../config.js';

class calendarView {
  _parentElement = document.querySelector('.meeting__data');

  _createTableElement(el, count, time, day = 0) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const newEl = document.createElement(el);
      if (time >= 0) {
        newEl.setAttribute('data-time', time);
        newEl.setAttribute('data-day', day++);
      }
      fragment.appendChild(newEl);
    }

    return fragment;
  }

  generateMarkup() {
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

    this._parentElement.appendChild(rows);
  }
}

export default new calendarView();