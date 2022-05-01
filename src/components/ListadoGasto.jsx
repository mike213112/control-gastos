import React from 'react'
import Gastos from './Gastos'

const ListadoGasto = ({ gastos }) => {
  return (
    <div className='listado-gastos'>
      <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aún'}</h2>

      {gastos.map(gasto => (
        <Gastos
          key={gasto.id}
          gasto={gasto}
        />
      ))}
    </div>
  )
}

export default ListadoGasto
