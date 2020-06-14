import React, { Component } from "react";
import ListadoNotas from "./ListadoNotas";
import FiltroNotas from "./FiltroNotas";
import { COLUMN_ROW, FLEX_GRID_ROW } from "./utils/Constance";

export class ListadoFiltro extends Component {
  state = {
    buscarEstudiante: "",
    filtroGanaron: false,
    filtroPerdieron: false,
    filtroTodos: true,
    filtroActivo: 0,
    filtroSubmitNombre: "",
  };

  onHandler = (e) => {
    e.preventDefault();
    const valor = e.target.value;

    this.setState({
      buscarEstudiante: valor,
    });
  };

  onHandlerCheck = (number) => {
    if (number === 1) {
      this.setState({
        filtroGanaron: true,
        filtroPerdieron: false,
        filtroTodos: false,
        filtroActivo: 5,
      });
    }
    if (number === 2) {
      this.setState({
        filtroGanaron: false,
        filtroPerdieron: true,
        filtroTodos: false,
        filtroActivo: 3,
      });
    }
    if (number === 3) {
      this.setState({
        filtroGanaron: false,
        filtroPerdieron: false,
        filtroTodos: true,
        filtroActivo: 0,
      });
    }
  };

  filtroSubmit = (e) => {
    e.preventDefault();
    this.setState({
      filtroSubmitNombre: this.state.buscarEstudiante,
    });
  };

  render() {
    const {
      filtroSubmitNombre,
      filtroGanaron,
      filtroPerdieron,
      filtroTodos,
      filtroActivo,
      buscarEstudiante,
    } = this.state;
    const { listadoEstudiantes } = this.props;
    return (
      <>
        <div className={FLEX_GRID_ROW}>
          <div className={COLUMN_ROW}>
            <FiltroNotas
              buscarEstudiante={buscarEstudiante}
              filtroGanaron={filtroGanaron}
              filtroPerdieron={filtroPerdieron}
              filtroTodos={filtroTodos}
              onHandler={this.onHandler}
              onHandlerCheck={this.onHandlerCheck}
              filtroSubmit={this.filtroSubmit}
            />
          </div>
          <div className={COLUMN_ROW}>
            <ListadoNotas
              listadoEstudiantes={listadoEstudiantes}
              filtroSubmitNombre={filtroSubmitNombre}
              filtroActivo={filtroActivo}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ListadoFiltro;
