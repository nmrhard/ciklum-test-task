class Calendar {
  constructor() {
    this.meetings = JSON.parse(localStorage.getItem('meetings')) || [];
  }

  _persistMeeting() {
    localStorage.setItem('meetings', JSON.stringify(this.meetings));
  }

  addMeeting(newMeeting) {
    const meeting = {
      id: Date.now().toString().slice(-10),
      meetingName: newMeeting.meetingName,
      user: newMeeting.user,
      day: +newMeeting.day,
      time: +newMeeting.time,
    };

    this.meetings.push(meeting);
    this._persistMeeting();
  }

  deleteMeeting(day, time) {
    this.meetings = this.meetings.filter(
      (meeting) => meeting.day !== day || meeting.time !== time
    );

    this._persistMeeting();
  }

  filterByUser(user) {
    return user === 'any'
      ? this.meetings
      : this.meetings.filter((meeting) => meeting.user === user);
  }

  checkIsTimeSlotFree(newMeeting) {
    for (let i = 0; i < this.meetings.length; i++) {
      if (
        this.meetings[i].day === +newMeeting.day &&
        this.meetings[i].time === +newMeeting.time
      ) {
        return false;
      }
    }

    return true;
  }
}

export default new Calendar();
