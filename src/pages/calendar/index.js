import React from 'react'
import FullCalendar from '@fullcalendar/react'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

export default class Calendar extends React.Component{
    
    render() {
        return(
            <div>
                <FullCalendar schedulerLicenseKey="XXX" plugins={[ resourceTimelinePlugin ]} />
            </div>
        )
    }
}