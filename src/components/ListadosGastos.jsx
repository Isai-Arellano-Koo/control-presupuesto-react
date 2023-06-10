import Gasto from "./Gasto";

const ListadosGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length ? "Gastos" : "No hay Gastos para esta categoria"}
          </h2>
          <p className="parrafo-indicacion">
            {gastosFiltrados.length
              ? "Desliza a la derecha para EDITAR y a la izquierda para ELIMINAR"
              : ""}
          </p>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos aún"}</h2>
          <p className="parrafo-indicacion">
            {gastos.length
              ? "Desliza a la derecha para EDITAR y a la izquierda para ELIMINAR"
              : ""}
          </p>
          {gastos.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadosGastos;
