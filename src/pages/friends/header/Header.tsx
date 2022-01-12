import './Header.css'

export function Header(): JSX.Element {
  return (
    <div className="friends-header">
      <div className='friend-box'>
        {/* will display searchbar component */}
        {/* will repeat to display FriendTab component with info from server */}
        {/* will display add button to add friends */}
      </div>
      <div className='account-box'>
        <div className='profile-picture-box'>
          {/* will display profile picture inside round parent div */}
          {/* will display edit button overlayed inside round parent div */}
        </div>
        <div className='profile-name-box'>
          {/* will display username */}
          {/* will display edit button */}
        </div>
      </div>
    </div>
  )
}