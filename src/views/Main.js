import React, { Component } from "react";
import CardDeNotas from "../components/CardDeNotas";
import ListadoFiltro from "../components/ListadoFiltro";
import { FLEX_GRID_COLUMN } from "../components/utils/Constance";
import "../styles/App.css";

export default class Main extends Component {
  state = {
    formulario: {
      documento: "",
      nombre: "",
      notaParcial: "",
      notaFinal: "",
      notaSeguimiento: "",
      definitiva: 0,
    },
    listadoEstudiantes: [],
    duplicado: false,
    guardando: false,
    alertaLlenarTodo: "Porfavor llenar todos los campos",
    alertaNumero: "La nota es entre 0 y 5",
    alertaDuplicado: "Este Estudiante ya existe",
  };

  onChange = (e) => {
    e.preventDefault();
    const { formulario, listadoEstudiantes } = this.state;
    const { documento } = formulario;
    const field = e.target.name;
    const valor = e.target.value;
    let noHayError = true;

    if (
      field === "notaParcial" ||
      field === "notaFinal" ||
      field === "notaSeguimiento"
    ) {
      noHayError = this.validar(valor);
    }

    listadoEstudiantes.find((estudiante) => {
      if (estudiante.documento === documento) {
        this.setState({
          duplicado: true,
        });
      } else {
        this.setState({
          duplicado: false,
        });
      }
      return null;
    });

    if (noHayError) {
      this.setState({
        formulario: {
          ...this.state.formulario,
          [field]: valor,
        },
      });
    } else {
      alert(this.state.alertaNumero);
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { formulario, duplicado } = this.state;
    const {
      documento,
      nombre,
      notaParcial,
      notaFinal,
      notaSeguimiento,
    } = formulario;

    if (
      documento === "" ||
      nombre === "" ||
      notaParcial === "" ||
      notaFinal === "" ||
      notaSeguimiento === ""
    ) {
      alert(this.state.alertaLlenarTodo);
    } else {
      if (!duplicado) {
        const notaDefinitiva =
          notaParcial * 0.25 + notaFinal * 0.25 + notaSeguimiento * 0.5;
        this.setState({
          formulario: {
            ...formulario,
            definitiva: notaDefinitiva,
          },
          guardando: true,
        });
        setTimeout(() => {
          this.setState({
            listadoEstudiantes: [
              ...this.state.listadoEstudiantes,
              {
                documento: documento,
                nombre: nombre,
                notaParcial: notaParcial,
                notaFinal: notaFinal,
                notaSeguimiento: notaSeguimiento,
                definitiva: notaDefinitiva,
              },
            ],
            formulario: {
              documento: "",
              nombre: "",
              notaParcial: "",
              notaFinal: "",
              notaSeguimiento: "",
              definitiva: 0,
            },
            guardando: false,
          });
        }, 4000);
      } else {
        alert(this.state.alertaDuplicado);
        this.setState({
          formulario: {
            documento: "",
            nombre: "",
            notaParcial: "",
            notaFinal: "",
            notaSeguimiento: "",
            definitiva: 0,
          },
        });
      }
    }
  };

  validar = (valor) => {
    return 0 <= valor && valor <= 5 ? true : false;
  };

  render() {
    const { formulario, guardando, listadoEstudiantes } = this.state;

    const {
      documento,
      nombre,
      notaParcial,
      notaFinal,
      notaSeguimiento,
      definitiva,
    } = formulario;
    return (
      <>
        <div className="p-8">
          <header className="bg-gray-200 text-center text-4xl">
            TALLER 1 REACT BASIC 2020
          </header>
        </div>
        <div className={FLEX_GRID_COLUMN}>
          <CardDeNotas
            documento={documento}
            nombre={nombre}
            notaParcial={notaParcial}
            notaFinal={notaFinal}
            notaSeguimiento={notaSeguimiento}
            definitiva={definitiva}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            guardando={guardando}
          />
          <ListadoFiltro listadoEstudiantes={listadoEstudiantes} />
        </div>
      </>
    );
  }
}
