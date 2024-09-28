import { createContext, useContext, useState } from 'react';

// Create the context
const DatePickerContext = createContext();

// Custom hook to use the context
export const useDatePicker = () => {
  return useContext(DatePickerContext);
};

// Provider component
export const DatePickerProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState('daily');
  const [customOptions, setCustomOptions] = useState({});
  const [selectedDates, setSelectedDates] = useState({});

  const value = {
    recurrence,
    setRecurrence,
    customOptions,
    setCustomOptions,
    selectedDates,
    setSelectedDates,
  };

  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  );
};
