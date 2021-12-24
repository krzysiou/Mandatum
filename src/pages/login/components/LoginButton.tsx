import React from "react"

type Props = {
  slim: boolean,
  onPress: () => void
}

export function LoginButton({slim, onPress}:Props): JSX.Element {
  console.log(slim ? "yes":"no")
  const internalOnClick = () => {
    // you logic here 

    onPress()
  }

 return <button onClick={internalOnClick} className={ slim ? 'h-8': 'h-16'}>click me here</button>
}