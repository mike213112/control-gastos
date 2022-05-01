import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto
}) => {
  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if(!presupuesto || presupuesto < 0) {
      setMensaje('No es un presupuesto válido')
      return
    }

    setMensaje('')
    setIsValidPresupuesto(true)
    // setPresupuesto(e)
  }

  return (
    <div className="contenedor-presupuesto">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Ingresa tu presupuesto"
            value={presupuesto === 0 ? '' : presupuesto}
            onChange={ e => setPresupuesto(Number(e.target.value)) }
          />

          <input type="submit" value="Añadir" />

          { mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje> }
        </div>
      </form>
    </div>
  )
}

export default NuevoPresupuesto
