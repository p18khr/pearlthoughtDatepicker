import { useDatePicker } from './DatePickerContext';

const CustomizationForm = () => {
  const { recurrence, customOptions, setCustomOptions } = useDatePicker();

  const handleCustomChange = (e) => {
    const { name, value } = e.target;
    setCustomOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Customize Recurrence</label>
      {recurrence === 'weekly' && (
        <div>
          <label>Repeat Every</label>
          <input
            type="number"
            name="weeks"
            value={customOptions.weeks || 1}
            onChange={handleCustomChange}
            className="w-full p-2 border rounded"
          />
        </div>
      )}
      {recurrence === 'monthly' && (
        <div>
          <label>On the nth day (e.g., second Tuesday)</label>
          <input
            type="text"
            name="nthDay"
            value={customOptions.nthDay || ''}
            onChange={handleCustomChange}
            className="w-full p-2 border rounded"
          />
        </div>
      )}
    </div>
  );
};

export default CustomizationForm;
