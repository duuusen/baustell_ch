import * as React from "react"
import "./isSomeoneAtBaustell.css"

const IsSomeoneAtBaustell = () => {
  const [isSomeoneThere, setIsSomeoneThere] = React.useState(false)
  const [gotData, setGotData] = React.useState(false)

  React.useEffect(() => {
    fetch("https://api.npoint.io/e8c29d40ddd7ec77bcea").then(res =>
      res.json().then(nPointObj => {
        setIsSomeoneThere(nPointObj.isSomeoneAtBaustell)
        setGotData(true)
      })
    )
  }, [])
  return (
    gotData && (
      <div className="is-someone-there">
          {isSomeoneThere ? "someone is at baustell 🏗" : "baustell is empty 🛑"}
      </div>
    )
  )
}
export default IsSomeoneAtBaustell