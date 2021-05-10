import 'core-js/stable';
import model from './model';
import calendarView from './views/calendarView';
import meetingView from './views/meetingView';
import addMeetingView from './views/addMeetingView';
import modalView from './views/modalView';

const controlAddMeeting = function (newMeeting) {
  if (model.checkIsTimeSlotFree(newMeeting)) {
    model.addMeeting(newMeeting);
    meetingView.render(newMeeting);
    return true;
  }
  return false;
};

const removeMeeting = function (day, time) {
  model.deleteMeeting(+day, +time);
};

const init = function () {
  calendarView.render();
  addMeetingView.addHandlerShowWindow(controlAddMeeting);
  modalView.addHandlerBtnConfirm(removeMeeting);
};

init();
