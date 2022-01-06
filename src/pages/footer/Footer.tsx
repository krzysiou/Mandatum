import './Footer.css';

export function Footer():JSX.Element {

  return (
    <div className='outer-container'>
      <div className="footer-container">
        <p className='footer-text'>Mandatum developed by krzysiou.</p>
        <a className='footer-link' onClick={() => window.open('https://github.com/krzysiou', '_blank')}>Follow my github here</a>
      </div>
    </div>
  )
}