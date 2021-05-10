class Calendar {
  constructor() {
    this.meetings = [
      {
        id: 1,
        meetingName: 'Daily Standup',
        user: 'smith',
        day: 0,
        time: 11,
      },
      {
        id: 2,
        meetingName: 'Plaining session',
        user: 'smith',
        day: 1,
        time: 11,
      },
    ];
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
  }

  deleteMeeting(day, time) {
    this.meetings = this.meetings.filter(
      (meeting) => meeting.day !== day || meeting.time !== time
    );
  }

  filterByUser(user) {
    const filteredMeeting = this.meetings.filter(
      (meeting) => meeting.user === user
    );
    return filteredMeeting;
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
