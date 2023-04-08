import { render } from '@testing-library/react';
import moment from 'moment';
import EventCard from './index';

describe('EventCard', () => {
  const date = moment().format('D');
  const month = moment().format('MMM');
  const startTime = moment().format('h:mm A');
  const endTime = moment().add(2, 'hours').format('h:mm A');

  const dummyevent1 = {
    id: 11,
    name: 'React Day',
    description: 'SOME',
    location: 'sad',
    startTime: startTime,
    endTime: endTime,
    ownerId: 1,
    eventTypeId: 1,
    calendarId: 1,
    isDeleted: false,
    attendees: [
      {
        attendee: {
          email: 'ankur@rcal.com',
        },
      },
    ],
    eventType: {
      name: 'event',
    },
  };

  const dummyevent2 = {
    id: 11,
    name: 'React Day',
    description: 'SOME',
    location: 'sad',
    startTime: startTime,
    endTime: endTime,
    ownerId: 1,
    eventTypeId: 1,
    calendarId: 1,
    isDeleted: false,
    attendees: [
      {
        attendee: {
          email: 'ankur@rcal.com',
        },
      },
      {
        attendee: {
          email: 'ankur@rcal.com',
        },
      },
    ],
    eventType: {
      name: 'event',
    },
  };

  it('should render the event name', () => {
    const { getByText } = render(<EventCard {...dummyevent1} />);
    const eventName = getByText(dummyevent1.name);
    expect(eventName).toBeInTheDocument();
  });

  it('should render the number of attendees when there are less than one number of attendee', () => {
    const { getByText } = render(<EventCard {...dummyevent1} />);
    const attendeesText = `${dummyevent1.attendees.length} ${
      dummyevent1.attendees.length > 1 ? 'Participants' : 'Participant'
    }`;
    const attendees = getByText(attendeesText);
    expect(attendees).toBeInTheDocument();
  });

  it('should render the number of attendees when there are more than one number of attendees', () => {
    const { getByText } = render(<EventCard {...dummyevent2} />);
    const attendeesText = `${dummyevent2.attendees.length} ${
      dummyevent2.attendees.length > 1 ? 'Participants' : 'Participant'
    }`;
    const attendees = getByText(attendeesText);
    expect(attendees).toBeInTheDocument();
  });

  it('should render the correct date', () => {
    const { getByText } = render(<EventCard {...dummyevent1} />);
    const dateText = `${date}`;
    const eventDate = getByText(dateText);
    expect(eventDate).toBeInTheDocument();
  });

  it('should render the correct month', () => {
    const { getByText } = render(<EventCard {...dummyevent1} />);
    const monthText = `${month}`;
    const eventMonth = getByText(monthText);
    expect(eventMonth).toBeInTheDocument();
  });

  it('should render the correct time', () => {
    const { getByText } = render(<EventCard {...dummyevent1} />);
    const timeText = `${dummyevent1.startTime} to ${dummyevent1.endTime}`;
    const eventTime = getByText(timeText);
    expect(eventTime).toBeInTheDocument();
  });
});
