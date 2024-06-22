interface LightProps {
  style?: React.CSSProperties;
}

function Light({ style }: LightProps) {
  return <div className='light' style={style}></div>;
}
export default Light;
