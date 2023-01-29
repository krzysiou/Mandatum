import './Button.css';

type Props = {
  label: string,
  width: string,
  onPress: () => void
}

export function Button({label, width, onPress}:Props): JSX.Element {
  return (
    <div className='button-component-div' style={{width: width}}>
      <a className='button-component' onClick={ onPress }>{ label }</a>
    </div>
  );
}