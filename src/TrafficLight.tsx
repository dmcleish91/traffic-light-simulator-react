import React from 'react';
import Light from './Light';

type LightSettingKey = 'red' | 'yellow' | 'green';

interface LightSetting {
  color: string;
  duration: number;
  nextColor: LightSettingKey;
}

const LightSettings: { [key in LightSettingKey]: LightSetting } = {
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
  const [currentColor, setCurrentColor] = React.useState<LightSettingKey>('green');

  React.useEffect(() => {
    const { duration, nextColor } = LightSettings[currentColor];
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
        <Light
          style={{
            backgroundColor:
              color === currentColor ? LightSettings[currentColor].color : 'darkgray',
          }}
        />
      ))}
    </div>
  );
}
export default TrafficLight;
