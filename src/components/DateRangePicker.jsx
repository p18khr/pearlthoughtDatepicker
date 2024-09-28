import { useState } from 'react';
import { useDatePicker } from './DatePickerContext';

const DateRangePicker = () => {
  const { setSelectedDates } = useDatePicker();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateChange = () => {
    setSelectedDates({ startDate, endDate });
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Date Range</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button onClick={handleDateChange} className="w-full p-2 mt-2 bg-blue-500 text-white rounded">
        Set Date Range
      </button>
    </div>
  );
};

export default DateRangePicker;
