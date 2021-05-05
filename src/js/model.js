class Meeting {
  constructor(name, user, day, time) {
    this.id = (Date.now() + '').slice(-10),
    this.meetingName = name,
    this.user = user,
    this.day = day,
    this.time = time
  }
}

class Calendar {
  constructor() {
    this.meetings = [
      { id: 1, meetingName: 'Daily Standup', user: 'smith', day: 0, time: 10 },
      { id: 2, meetingName: 'Plaining session', user: 'smith', day: 1, time: 11 }
    ]
  }

  addMeeting(newMeeting) {
    const meeting = {
      meetingName: newMeeting.meetingName, 
      user: newMeeting.user, 
      day: newMeeting.day, 
      time: newMeeting.time
    };

    console.log(meeting);
    this.meetings.push(meeting);
  }

  deleteMeeting(id) {
    this.meetings = this.meetings.filter(meeting => meeting.id !== id);
  }

  filterByUser() {
    const filteredMeeting = this.meetings.filter(meeting => meeting.user === user);
    return filteredMeeting;
  }
}

export default new Calendar();

