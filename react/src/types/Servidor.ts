export interface Servidor {
  id: string;
  nombre: string;
  ip: string;
  estado: "ACTIVO" | "INACTIVO";
  creadoEn: Date;
}