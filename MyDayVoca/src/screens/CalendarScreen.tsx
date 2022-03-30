import { format } from 'date-fns';
import React, {useMemo, useState} from 'react';
import CalendarView from '~/component/CalendarView';
import WordList from '~/component/WordList';
import useWords from '~/hooks/useWords';

function CalendarScreen() {
    const words = useWords();
    const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'),);

    const markedDates = useMemo(() => words.reduce((acc: any, current) => {
            const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
            acc[formattedDate] = {marked: true};

            //console.log(acc);
            return acc;
        }, {}), [words],
    );

    const filteredWords = words.filter(
        (word) => format(new Date(word.date), 'yyyy-MM-dd') === selectedDate,
    );

    return (
        <WordList
            words={filteredWords}
            ListHeaderComponent={
                <CalendarView
                    markedDates={markedDates}
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                />
            }
        />
    );
}

export default CalendarScreen;