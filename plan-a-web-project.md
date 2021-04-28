# Plan a web project

## User stories

1. As a user, I want to create an event with event name, paticipants, date and time, so I can keep a log events with all paticipants;

2. As a user, I want to see all events for all paticipants, so I can see which time days are reserved;

3. As a user, I want to see events by participant, so I can see which time and days are reserved by participant;

4. As a user, I want to have ability to delete event, so I can manage events (if plans has been changed);

5. As a user, I want to see all events for all partipicants when I leave the app and come back later, so that I can keep using there app over time;

## Features

1. On a “Calendar” screen user should be able to see all meetings scheduled for the meeting room;

2. User should be able to filter meetings by person;

3. In order to create new meeting user should click “New Event+” button at “Calendar” screen, after that he should be transferred to “Create event” screen. At that screen user should enter meeting title, select participants (can be multiple), select day (Mon-Fri), select time (10:00-18:00);

4. The meeting can be successfully created if and only if the time slot for that day and time is free. Otherwise the error bar should be shown.

5. After successful creation of an event, the user should be transferred back to the “Calendar” screen where new event should already be displayed.

6. In order to delete a meeting user has to click the delete icon near the meeting title at “Calendar” screen and then confirm his action in a confirmation dialog.
