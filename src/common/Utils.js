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

    static renderItemMonthPicker = () =>{
        var list = [];
        for(var i = 1 ; i <= 12 ; i++){
            var item = {
                label : "Tháng " + i.toString(),
                value : i.toString()
            }
            list.push(item);
        }
        return list;
    }

    static renderItemWeekPicker = () =>{
        var list = [];
        for(var i = 2 ; i <= 5 ; i++){
            var item = {
                label : "Tuần " + i.toString(),
                value : i.toString()
            }
            list.push(item);
        }
        return list;
    }
}