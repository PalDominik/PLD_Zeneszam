import { Belso } from "./componets/Adatok"
import { Fejlec } from "./componets/Zenetipus"
import './componets/Zenestyle.css'
function App() {
  return <>
    <h1>Zeneszámok</h1>
    <table className="belso">
      <Fejlec />
      <Belso>

      </Belso>
    </table>
  </>

}

export default App
