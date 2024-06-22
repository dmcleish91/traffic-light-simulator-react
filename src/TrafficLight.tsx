import React from 'react';
import Light from './Light';

type LightSettingKey = 'red' | 'yellow' | 'green';

const LightSettings = {
  red: {
    color: 'red',
    duration: 4000,
    nextColor: 'green',
  },
  yellow: {
    color: 'yellow',
    duration: 500,
    nextColor: 'red',
  },
  green: {
    color: 'green',
    duration: 3000,
    nextColor: 'yellow',
  },
};

function TrafficLight() {
  const [currentColor, setCurrentColor] = React.useState<string>('green');

  React.useEffect(() => {
    const { duration, nextColor } = LightSettings[currentColor as LightSettingKey];
    const timerId = setTimeout(() => {
      setCurrentColor(nextColor);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className='trafficstop'>
      {Object.keys(LightSettings).map((color) => (
        <Light style={{ backgroundColor: color === currentColor ? LightSettings[currentColor as LightSettingKey].color : 'darkgray' }} />
      ))}
    </div>
  );
}
export default TrafficLight;
