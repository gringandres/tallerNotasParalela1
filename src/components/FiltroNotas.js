import React from "react";
import {
  INPUT_BUSCAR,
  BUTTON_BUSCAR,
  FLEX_GRID_COLUMN,
} from "./utils/Constance";

function FiltroNotas({
  buscarEstudiante,
  filtroGanaron,
  filtroPerdieron,
  filtroTodos,
  onHandler,
  onHandlerCheck,
  filtroSubmit,
}) {
  return (
    <>
      <div className="max-w-xl rounded overflow-hidden shadow-lg ">
        <div className="px-6 py-4">
          <div className={FLEX_GRID_COLUMN}>
            <input
              className={INPUT_BUSCAR}
              type="text"
              placeholder="Documento"
              onChange={(e) => onHandler(e)}
              value={buscarEstudiante}
            />
            <button onClick={(e) => filtroSubmit(e)} className={BUTTON_BUSCAR}>
              Buscar
            </button>
          </div>
          <div>
            <form className={FLEX_GRID_COLUMN}>
              <div className="mx-12">
                <input
                  className="mr-1 leading-tight"
                  type="checkbox"
                  onChange={() => onHandlerCheck(1)}
                  value={filtroGanaron}
                  checked={filtroGanaron}
                  name="filtroGanaron"
                />
                <span className="text-m">Ganaron</span>
              </div>
              <div className="mx-12">
                <input
                  className="mr-1 leading-tight"
                  type="checkbox"
                  onChange={() => onHandlerCheck(2)}
                  value={filtroPerdieron}
                  checked={filtroPerdieron}
                  name="filtroPerdieron"
                />
                <span className="text-m">Perdieron</span>
              </div>
              <div className="mx-12">
                <input
                  className="mr-1 leading-tight"
                  type="checkbox"
                  onChange={() => onHandlerCheck(3)}
                  value={filtroTodos}
                  checked={filtroTodos}
                  name="filtroTodos"
                  defaultChecked="true"
                />
                <span className="text-m">Todos</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FiltroNotas;
