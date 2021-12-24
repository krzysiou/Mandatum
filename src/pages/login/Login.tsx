import { useState } from "react";
import { LoginButton } from "./components/LoginButton";

export function Login():JSX.Element {
  const [count, setCount] = useState(0)

  const onClick = () => {
    alert("test")
    setCount(count + 1)
  }

  return (
    <div>
      <LoginButton slim={false} onPress={onClick}/>
      <a href="#">{count}</a>
    </div>
  )
}