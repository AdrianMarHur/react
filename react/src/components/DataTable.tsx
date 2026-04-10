//import React from "react"; // No es necesario importar React en versiones modernas de React

export interface Columna<T extends object> {
  clave: keyof T;
  encabezado: string;
}

interface DataTableProps<T extends object> {
  datos: T[];
  columnas: Columna<T>[];
  onEditar?: (fila: T) => void;
}

export function DataTable<T extends object>({
  datos,
  columnas,
  onEditar,
}: DataTableProps<T>) {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          {columnas.map((col) => (
            <th key={String(col.clave)}>
              {col.encabezado}
            </th>
          ))}
          {onEditar && <th>Acciones</th>}
        </tr>
      </thead>

      <tbody>
        {datos.map((fila, index) => (
          <tr key={index}>
            {columnas.map((col) => (
              <td key={String(col.clave)}>
                {String(fila[col.clave])}
              </td>
            ))}

            {onEditar && (
              <td>
                <button onClick={() => onEditar(fila)}>
                  Editar
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}