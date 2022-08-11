- React calls the function specifed as `onChange` on the DOM `<input>`. In our case, this is the `handleChange` method in the `TemperatureInput` component.

- The `handleChange` method in the `TemperatureInput` component calls `onTemperatureChange()` props with the new desired value. Its props, including `onTemperatureChange`, were provided by its parent component, the `Calculator`.

- When it previously renderd, the `Calculator` had specifed that `onTemperatureChange` of the Celsius `TemperatureInput` of the Fahrenheit `TemperatureInput` is the `Calculator`'s `handleFahrenheitChange` method. So either of these two `Calculator` methods get called depending on which input we edited.

- Inside methods, the `Calculator` component asks React to re-render itself by calling `setState()`
