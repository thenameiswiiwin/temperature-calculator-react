import { scaleNames } from './utilites/index.js';

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const handleChange = (e) => onTemperatureChange(e.target.value);

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
