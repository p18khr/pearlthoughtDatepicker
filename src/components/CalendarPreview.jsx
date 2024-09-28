import { useDatePicker } from './DatePickerContext';

const CalendarPreview = () => {
  const { selectedDates } = useDatePicker();

  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold mb-2">Selected Dates</h3>
      <p>{selectedDates?.startDate || 'No Start Date'} - {selectedDates?.endDate || 'No End Date'}</p>
    </div>
  );
};

export default CalendarPreview;
