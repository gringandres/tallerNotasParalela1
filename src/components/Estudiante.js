import React from "react";

function Estudiante({ nombre, definitiva }) {
  return (
    <>
      <tr className="bg-gray-100">
        <td class="border px-4 py-2">{nombre}</td>
        <td class="border px-4 py-2">{definitiva}</td>
        <td class="border px-4 py-2">{definitiva >= 3 ? "Gano" : "Perdio"}</td>
      </tr>
    </>
  );
}

export default Estudiante;
