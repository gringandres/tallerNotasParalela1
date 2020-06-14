import React from "react";
import Estudiante from "./Estudiante";

function ListadoNotas({
  listadoEstudiantes,
  filtroSubmitNombre,
  filtroActivo,
}) {
  const estudianteFiltrado = listadoEstudiantes.filter((filtro) =>
    filtro.documento.toLowerCase().includes(filtroSubmitNombre.toLowerCase())
  );
  const estudiantesFiltrados = estudianteFiltrado.filter((filtro) => {
    debugger;
    if (0 <= filtro.definitiva && filtro.definitiva < 3 && filtroActivo === 3) {
      return filtro;
    }
    if (
      3 <= filtro.definitiva &&
      filtro.definitiva <= 5 &&
      filtroActivo === 5
    ) {
      return filtro;
    }
    if (filtroActivo === 0) {
      return filtro;
    }
    return null;
  });
  return (
    <>
      <div className="max-w-xl rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Listado!</div>
          {estudiantesFiltrados.length > 0 ? (
            <table className="table-fixed ml-2">
              <thead>
                <tr>
                  <th className="w-1/2 px-4 py-2">Alumno</th>
                  <th className="w-1/3 px-4 py-2">Nota</th>
                  <th className="w-1/3 px-4 py-2">Estado</th>
                </tr>
              </thead>
              <tbody>
                {estudiantesFiltrados.map((estudiante) => (
                  <Estudiante
                    key={estudiante.documento}
                    nombre={estudiante.nombre}
                    definitiva={estudiante.definitiva}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            "No Hay Estudiantes"
          )}
        </div>
      </div>
    </>
  );
}

export default ListadoNotas;
