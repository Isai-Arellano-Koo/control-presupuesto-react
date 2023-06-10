import { useState, useEffect } from "react";
import {CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ presupuesto, gastos, setGastos, setPresupuesto, setIsValidPresupuesto }) => {

  const [porcentaje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)



  useEffect(() => {
   const totalGastado = gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 )
   const totalDisponible = presupuesto - totalGastado
    // Calcular el porcentaje gastado
   const nuevoPorcentaje = (( (presupuesto-totalDisponible) / presupuesto ) * 100).toFixed(2)

   setTimeout( () => {
    setPorcentaje(nuevoPorcentaje)
   }, 450 )
    

   setGastado(totalGastado)
   setDisponible(totalDisponible)
  }, [gastos])
  


  const formatearCantidad = (cantidad) => {
    const presupuestoFormateado = cantidad.toLocaleString("es-ES", {
      style: "currency",
      currency: "PEN",
    });
    return presupuestoFormateado;
  };

  const handleResetApp = () => {
    const resultado = confirm('Deseas reiniciar presupuesto y gastos?')
    if(resultado) {
      setGastos([])
      setPresupuesto('')
      setIsValidPresupuesto(false)
    } 
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
        styles={buildStyles({
          pathColor: porcentaje > 100 ? '#d62626' : '#3b82f6',
          textColor:  porcentaje > 100 ? '#d62626' : '#3b82f6',
          trailColor: '#f5f5f5'
        })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={() => handleResetApp()}>
          Resetear App
        </button>
        <p>
          {" "}
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          {" "}
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>

        <p>
          {" "}
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
