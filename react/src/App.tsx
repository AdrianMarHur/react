import { useState } from "react";
import { DataTable } from "./components/DataTable";
import type { Columna } from "./components/DataTable";
import type { Servidor } from "./types/Servidor";
import { diasDesde } from "./utils/fecha";
import type { EstadoServidor } from "./types/EstadoServidor";
import { describeEstadoServidor } from "./utils/describeEstadoServidor";

const servidoresIniciales: Servidor[] = [
  {
    id: "1",
    nombre: "Servidor A",
    ip: "192.168.1.10",
    estado: "ACTIVO",
    creadoEn: new Date(),
  },
  {
    id: "2",
    nombre: "Servidor B",
    ip: "192.168.1.11",
    estado: "INACTIVO",
    creadoEn: new Date(),
  },
];

const columnas: Columna<Servidor>[] = [
  { clave: "nombre", encabezado: "Nombre" },
  { clave: "ip", encabezado: "IP" },
  { clave: "estado", encabezado: "Estado" },
  { clave: "creadoEn", encabezado: "Creado hace (días)" },
];

const estadoActual: EstadoServidor = {
  tipo: "INACTIVO",
  motivo: "Actualización del sistema",
};

function App() {
  const [servidores] = useState<Servidor[]>(servidoresIniciales);
  const [edicion, setEdicion] = useState<Partial<Servidor> | null>(null);

  function iniciarEdicion(fila: Servidor) {
    setEdicion({ ...fila });
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Gestión de Servidores</h1>
      <p>
        Estado actual del sistema:{" "}
      <strong>{describeEstadoServidor(estadoActual)}</strong>
      </p>

      <DataTable
        datos={servidores}
        columnas={columnas}
        onEditar={iniciarEdicion}
      />
      <ul>
        {servidores.map((s) => (
      <li key={s.id}>
      { s.nombre} creado hace {diasDesde(s.creadoEn)} días
      </li>
          ))}
      </ul>

      {edicion && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Editando servidor</h2>

          <input
            type="text"
            placeholder="Nombre"
            value={edicion.nombre ?? ""}
            onChange={(e) =>
              setEdicion({ ...edicion, nombre: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="IP"
            value={edicion.ip ?? ""}
            onChange={(e) =>
              setEdicion({ ...edicion, ip: e.target.value })
            }
          />

          <div style={{ marginTop: "0.5rem" }}>
            <button onClick={() => setEdicion(null)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;