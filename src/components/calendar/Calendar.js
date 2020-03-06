import React, { useRef, useState } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import { IoIosCalendar, IoMdAdd } from 'react-icons/io';
import { azCalendarEvents } from './calendarEvents';

const Calendar = () => {
    const [calendarEvents, setCalendarEvents] = useState(true);

    const calendarComponentRef = useRef();

    const getCurrentDate = (separator = ' ') => {
        const newDate = new Date();
        const date = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();

        return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`;
    };

    const onDateClick = arg => {
        // modal
        if (alert(`Would you like to add an event to ${arg.dateStr} ?`)) {
            setCalendarEvents(azCalendarEvents);
        }
    };

    return (
        <Scrollbars style={{ height: '90%' }}>
            <div className="az-content">
                <div className="az-content az-content-calendar">
                    <div className="az-content-left az-content-left-calendar">
                        <div id="dateToday" className="az-content-label az-content-label-sm">
                            {getCurrentDate()}
                        </div>
                        <h2 className="az-content-title">My Calendar</h2>

                        <div className="fc-datepicker az-datepicker"></div>

                        <label className="az-content-label">Event List</label>

                        <nav className="nav az-nav-column az-nav-calendar-event">
                            <a href="#" className="nav-link">
                                <IoIosCalendar />
                                <div>Smart Oak Project</div>
                            </a>
                            <a href="#" className="nav-link">
                                <IoIosCalendar />
                                <div>NeuroN Foundation</div>
                            </a>
                            <a href="#" className="nav-link">
                                <IoIosCalendar />
                                <div>Oak Atlantis</div>
                            </a>
                            <li>
                                <p className="nav-link add-mail">
                                    <IoMdAdd /> dodaj kolejnego maila
                                </p>
                            </li>
                        </nav>
                    </div>
                    <div className="az-content-body az-content-body-calendar">
                        <div className="az-calendar">
                            <FullCalendar
                                className="az-calendar"
                                defaultView="dayGridMonth"
                                header={{
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                                }}
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                ref={calendarComponentRef}
                                weekends={azCalendarEvents}
                                events={azCalendarEvents}
                                dateClick={onDateClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Scrollbars>
    );
};

export default Calendar;
