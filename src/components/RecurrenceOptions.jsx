import { useDatePicker } from './DatePickerContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useDatePicker();

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Recurrence</label>
      <select
        className="w-full p-2 border rounded"
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
