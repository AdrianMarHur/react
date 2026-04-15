export type EstadoServidor =
  | { tipo: "ACTIVO" }
  | { tipo: "INACTIVO"; motivo: string };