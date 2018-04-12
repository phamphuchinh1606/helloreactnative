import React from 'react';
import Moment from 'moment';

export default class Utils{
    static formatDate = (date, format = 'DD-MM-YYYY') =>{
        Moment.locale('en');
        return Moment(date).format(format);
    }

    static dayOfWeekDate = (date) => {
        const dayOfWeek = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6" , "Thứ 7"];
        var index = Moment(date).weekday();
        return dayOfWeek[index];
    }
}