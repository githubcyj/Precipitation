import React from 'react'
import FullCalendar from '@fullcalendar/react'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import '../../style/calendar.css'

export default class Calendar extends React.Component{
    
    render() {
        const buttonText = {
                                today: '今天',
                                month: '月',
                                week: '周',
                                day: '天'
                            };
        const calendarPlugins = [ // plugins must be defined in the JS
            timeGridPlugin,
            dayGridPlugin,
            interactionPlugin // needed for dateClick
        ];
        return(
            <div>
                {/* <FullCalendar schedulerLicenseKey="XXX" plugins={[ resourceTimelinePlugin ]} /> */}
                {/* <FullCalendar defaultView="dayGridWeek" plugins={[ dayGridPlugin ]} /> */}
                <FullCalendar
                defaultView="timeGridWeek"
                plugins={calendarPlugins}
                selectable="true"
                locale="zh-cn"
                buttonText= {buttonText}
                eventLimitText="更多"
                />
            </div>
        )
    }
}
