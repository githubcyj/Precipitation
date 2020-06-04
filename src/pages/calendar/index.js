import React from 'react'
import FullCalendar from '@fullcalendar/react'
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import '../../style/calendar.css'

export default class Calendar extends React.Component{
    dateformat = (date, str) => {
        let year = date.getFullYear();
        let mon = date.getMonth() + 1;
        let month = mon < 10 ? "0" + mon : mon;
        let da = date.getDate();
        let day = da < 10 ? "0" + da : da;
        let allDate = year + str + month + str + day;
        return allDate;
    }
    timeformat = (date) => {
        let Hour = date.getHours();
        let minute = date.getMinutes() < 10 ? "00" : date.getMinutes();
        let sec = date.getSeconds() < 10 ? "00" : date.getSeconds();
        return Hour + ":" + minute + ":" + sec;
    }
    // 计算该日期是当年的第几周
    getYearWeek = (date1) => {
        // let date1 = new Date();
        let date2 = new Date(date1.getFullYear(), 0, 1);
        let d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
        return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7);
    }
    // 计算该日期是当月的第几周
    getMonthWeek = (date) => {
        // let date = new Date();
        let day = date.getDay();
        let d = date.getDate();
         if(day==0){
             day=7;
         }
         var config={
             getMonth:date.getMonth()+1,
             getYear:date.getFullYear(),
             getWeek:Math.ceil((d + 6 - day) / 7),
         }
         console.log(Math.ceil((d + 6 - day) / 7));
         return Math.ceil((d + 6 - day) / 7);
    }
    
    getWeekByDate(str) {
        str = Date.parse(str);
        let date = new Date(str);
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let dateN=new Date(str);
        // 月份第一天
        dateN=new Date(dateN.setDate(1));
        let w1=dateN.getDay();
        // 将字符串转为标准时间格式
        let w = date.getDay();// 周几
        if (w===0&&w1!==0) {
            // 当月第一天不是周天，当前日期是周天
            w=7;
        }
        let we1 = date.getDate() + 6;
        let week = Math.ceil(( we1 - w) / 7);
        // 当月第一天不是周一
        if (w1!==1) { week = Math.ceil((we1 - w) / 7); }
        let cNum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        if (week === 0) {
            // 第0周归于上月的最后一周
            month = date.getMonth();
            if (month===0) {
            // 跨年
                month=12;
                year -= 1;
            }
            let dateLast = new Date(date);
            let dayLast = new Date(year, month, 0).getDate();
            let timestamp = new Date(year, month - 1, dayLast);
            w = new Date(timestamp).getDay();// 周几
            if (w === 0) {
                w = 7;
            }
            let we2 = timestamp.getDate() + 6;
            week = Math.ceil(( we2 - w) / 7) - 1;
        }
        week=cNum[week];
        let time = year+"年"+month + "月第" + week + "周";
        console.log(time);
    }
    
    
    // 计算该月共几周
    getWeeks(year, month) {
        let d = new Date();
        // 该月第一天
        d.setFullYear(year, month-1, 1);
        let w1 = d.getDay();
        if (w1 === 0) w1 = 7;
        // 该月天数
        d.setFullYear(year, month, 0);
        let dd = d.getDate();
        // 第一个周一
        let d1;
        if (w1 !== 1) {
            d1 = 9 - w1;
        } else { d1 = 1; }
        let gs = dd - d1;
        let weekCount = Math.ceil(( gs + 1)/7);
        console.log(weekCount)
        return weekCount;
    }
    // getMonthWeeks(a, b, c) {
    //     let date = new Date(a, b - 1, c);
    //     let w = date.getDay();
    //     let d = date.getDate();
    //     let g = d + 6;
    //     console.log(Math.ceil((g - w) / 7))
    //     return Math.ceil(
    //         (g - w) / 7
    //         );
    // }
    // 计算该月第几周的第一天和最后一天（以周一为第一天）
    // caclValue() {
        // let date = new Date();
        // let year = date.getFullYear();
        // let month = date.getMonth() + 1;
        // let day = date.getDate();
        // console.log(year+'-'+month+'-'+day);
        // 该月有几周
        // let weeks = this.getWeeks(year, month);
        // console.log(weeks);
        // 当日是该月的第几周
        // let week = this.getMonthWeek(year, month, day);
        // let week = this.getWeekByDate('2020-05-10');
        // console.log(week);
        // 该月的第几周的第一天和最后一天
        // this.showDate();
    // }
    // 当前日期几月第几周
    // showDate() {
    //     let that = this;
    //     let d = this.getMonDate();
    //     let ds=new Date();
    //     let arr=[];
    //     for (let i=0; i<7; i++) {
    //         let weekDay=this.getDayName(d.getDay());
    //         let date=d.getDate()+'日';
    //         if (weekDay==='周一') {
    //         let beginTime=ds.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    //         that.state.beginTime = beginTime;
    //     }
    //     if (weekDay==='周日') {
    //         let endTime=ds.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    //         that.state.endTime = endTime;
    //     }
    //     arr.push({ weekDay:weekDay, date:date });
    //     d.setDate(d.getDate()+1);
    //     }
    //     let month=ds.getMonth()+1;
    //     let weeks=this.getMonthWeek(ds.getFullYear(), month, ds.getDate())-1;
    //     // 每月周一日期
    //     let oneDate=that.getMondayTime(ds.getFullYear(), month, 1);
    //     if (ds.getDate()<oneDate) {
    //     month=ds.getMonth();
    //     weeks=this.getWeeks(ds.getFullYear(), month);
    //     }
    //     console.log('month:', month, 'weeks:', weeks);
    // }
    //获取当月每周的第一天
    getWeekDay(year, month,weekday) {
        var d = new Date();
        // 该月第一天
        d.setFullYear(year, month-1, 1);
        var w1 = d.getDay();
        if (w1 == 0) w1 = 7;
        // 该月天数
        d.setFullYear(year, month, 0);
        var dd = d.getDate();
        // 第一个周一
        let d1;
        if (w1 != 1) d1 = 7 - w1 + 2;
        else d1 = 1;
        var monday = d1+(weekday-1)*7;
        console.log(monday)
        return monday;
    }
    
    componentDidMount() {
        this.getWeekDay(2020,3,1)
        this.getWeekDay(2020,4,1)
        this.getWeekDay(2020,5,1)
        this.getWeekDay(2020,6,1)
        // this.showDate();
        // this.getMonthWeek(new Date(2020,4,1));
        // this.getMonthWeek(new Date(2020,2,8));
        // this.getWeekByDate('2020-3-1');
        // this.getWeekByDate('2020-3-8');
        // this.getYearWeek(new Date());
        // this.getWeeks(2020,3)
        // this.getWeeks(2020,4)
        // this.getWeeks(2020,5)
        // this.getMonthWeeks(2020,3,1)
        // this.getMonthWeeks(2020,4,1)
        // this.getMonthWeeks(2020,5,1)
    }
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
