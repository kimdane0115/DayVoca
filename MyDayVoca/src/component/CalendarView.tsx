import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';

interface CalendarViewProps {
    markedDates: any;
    selectedDate: string;
    onSelectDate(day: string): void;
}

function CalendarView({markedDates, selectedDate, onSelectDate}: CalendarViewProps){

    const markedSelectedDate = {
        ...markedDates,
        [selectedDate]: {
            selected: true,
            marked: markedDates[selectedDate]?.marked,
        },
    };
    console.log(markedSelectedDate);

    return (
        <Calendar
            style={styles.calendar}
            markedDates={markedSelectedDate}
            hideExtraDays={true}
            onDayPress={(day) => {
                onSelectDate(day.dateString);
            }}
            theme={{
                selectedDayBackgroundColor: '#009688',
                arrowColor: '#009688',
                dotColor: '#009688',
                todayTextColor: '#009688',    
            }}
        />
    );
}

const styles = StyleSheet.create({
    calendar: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },
});

export default CalendarView;