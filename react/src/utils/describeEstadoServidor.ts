import type { EstadoServidor } from "../types/EstadoServidor";

export function describeEstadoServidor(
  estado: EstadoServidor
): string {
  switch (estado.tipo) {
    case "ACTIVO":
      return "Servidor en funcionamiento";

    case "INACTIVO":
      return `Servidor inactivo: ${estado.motivo}`;

    default: {
      const _exhaustivo: never = estado;
      return _exhaustivo;
    }
  }
}