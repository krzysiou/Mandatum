import { Button } from '../button/Button'
import { redirect } from '../../../utilities/functions/globalFunctions'
import './NotLogged.css'

type Props = {
  label: string;
}

export function NotLogged( { label } : Props ): JSX.Element {

  return (
    <div className="not-logged">
      <div className='oops-top'>
        <h1 className='oops-header'>Oops . . .</h1>
        <p className='oops-header-message'>Seems like you are not logged in.<br/>To proceed to <b>{ label }</b>, first <b>Log In</b> by hitting the button below.</p>
        <p className='oops-header-message-h'>You are not logged in. Proceed to <b>{ label } </b> by logging on.</p>
      </div>
      <div className='oops-bot'>
        <Button width="8rem" label='log in' onPress={redirect('login')} />
      </div>
    </div>
  )
}