import 'core-js/stable';
import model from './model.js';
import calendarView from './views/calendarView.js';
import meetingView from './views/meetingView.js';
import addMeetingView from './views/addMeetingView.js';

const getMeetings = function() {
  return model.meetings; 
}

const controlAddMeeting = function(newMeeting) {
  if(model.checkIsTimeSlotFree(newMeeting)) {
    model.addMeeting(newMeeting);
    meetingView.render(newMeeting);
    
    return true;
  }

  return false;
}

const init = function() {
  calendarView.generateMarkup();
  addMeetingView.addHandlerShowWindow(controlAddMeeting);
}

init();