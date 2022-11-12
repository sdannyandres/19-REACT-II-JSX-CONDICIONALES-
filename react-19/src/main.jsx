import {createRoot} from 'react-dom/client'

const root = document.getElementById('root')
const rootReat =createRoot(root)
const sesion = {
  usuario: "usuario"
}


rootReat.render(
  <div>
    {sesion ? <p>{sesion.usuario}</p> : <p>Ir al login</p>}
  </div>
)

