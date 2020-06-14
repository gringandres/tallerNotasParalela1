import React from "react";
import { LABEL_TITULO, INPUT_CARD, BUTTON_FORM } from "./utils/Constance";

function CardDeNotas({
  documento,
  nombre,
  notaParcial,
  notaFinal,
  notaSeguimiento,
  definitiva,
  onChange,
  onSubmit,
  guardando,
}) {
  return (
    <>
      <div className="max-w-xl rounded overflow-hidden shadow-2xl ml-8 w-1/2">
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl text-center mb-2">NOTAS</div>
          <form className="w-full max-w-sm" onSubmit={onSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className={LABEL_TITULO} htmlFor="inline-full-name">
                  CODIGO
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={INPUT_CARD}
                  type="text"
                  value={documento}
                  name="documento"
                  placeholder="Documento"
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className={LABEL_TITULO} htmlFor="inline-full-name">
                  ALUMNO
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={INPUT_CARD}
                  type="text"
                  value={nombre}
                  name="nombre"
                  placeholder="Nombre y Apellidos"
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className={LABEL_TITULO} htmlFor="inline-full-name">
                  PARCIAL
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={INPUT_CARD}
                  type="number"
                  value={notaParcial}
                  name="notaParcial"
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className={LABEL_TITULO} htmlFor="inline-full-name">
                  FINAL
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={INPUT_CARD}
                  type="number"
                  value={notaFinal}
                  name="notaFinal"
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className={LABEL_TITULO} htmlFor="inline-full-name">
                  SEGUIMIENTO
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={INPUT_CARD}
                  type="number"
                  value={notaSeguimiento}
                  name="notaSeguimiento"
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className={LABEL_TITULO} htmlFor="inline-full-name">
                  DEFINITIVA
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={INPUT_CARD}
                  type="number"
                  value={definitiva}
                  name="definitiva"
                  onChange={(e) => onChange(e)}
                  disabled
                />
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                {guardando ? (
                  <div className="loader">Loading...</div>
                ) : (
                  <input className={BUTTON_FORM} type="submit" />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CardDeNotas;
