import React from 'react';
import { DatePickerProvider } from './DatePickerContext';
import RecurrenceOptions from './RecurrenceOptions';
import CustomizationForm from './CustomizationForm';
import CalendarPreview from './CalendarPreview';
import DateRangePicker from './DateRangePicker';

const DatePicker = () => {
  return (
    <DatePickerProvider>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Select Recurring Dates</h2>
        <RecurrenceOptions />
        <CustomizationForm />
        <DateRangePicker />
        <CalendarPreview />
      </div>
    </DatePickerProvider>
  );
};

export default DatePicker;
