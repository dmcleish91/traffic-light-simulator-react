import React from 'react';
import Light from './Light';

interface LightSetting {
  color: string;
  duration: number;
  nextColor: string;
}

const LIGHTSETTINGS: { [key: string]: LightSetting } = {
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
    const { duration, nextColor } = LIGHTSETTINGS[currentColor];
    const timerId = setTimeout(() => {
      setCurrentColor(nextColor);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className='trafficstop'>
      {Object.keys(LIGHTSETTINGS).map((color) => (
        <Light
          style={{
            backgroundColor:
              color === currentColor ? LIGHTSETTINGS[currentColor].color : 'darkgray',
          }}
        />
      ))}
    </div>
  );
}
export default TrafficLight;
