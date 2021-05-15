import 'core-js/stable';
import model from './model';
import calendarView from './views/calendarView';
import meetingView from './views/meetingView';
import addMeetingView from './views/addMeetingView';
import modalView from './views/modalView';
import filterView from './views/filterView';

const controlAddMeeting = function (newMeeting) {
  if (model.checkIsTimeSlotFree(newMeeting)) {
    model.addMeeting(newMeeting);
    meetingView.render(newMeeting);
    return true;
  }
  return false;
};

const controlRemoveMeeting = function (day, time) {
  model.deleteMeeting(+day, +time);
};

const controlFilterMeeting = function (user) {
  const filteredByUser = model.filterByUser(user);
  meetingView.clearMeeting();
  filteredByUser.forEach((meeting) => meetingView.render(meeting));
};

const controlMeetings = function () {
  model.meetings.forEach((meeting) => {
    meetingView.render(meeting);
  });
};

const init = function () {
  calendarView.render();
  meetingView.addHandlerRender(controlMeetings);
  addMeetingView.addHandlerShowWindow(controlAddMeeting);
  modalView.addHandlerBtnConfirm(controlRemoveMeeting);
  filterView.addHandlerChangeUser(controlFilterMeeting);
};

init();
