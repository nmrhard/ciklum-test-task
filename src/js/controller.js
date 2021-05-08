import 'core-js/stable';
import model from './model';
import calendarView from './views/calendarView';
import meetingView from './views/meetingView';
import addMeetingView from './views/addMeetingView';

const controlAddMeeting = function (newMeeting) {
  if (model.checkIsTimeSlotFree(newMeeting)) {
    model.addMeeting(newMeeting);
    meetingView.render(newMeeting);
    return true;
  }

  return false;
};

const init = function () {
  calendarView.generateMarkup();
  addMeetingView.addHandlerShowWindow(controlAddMeeting);
};

init();
