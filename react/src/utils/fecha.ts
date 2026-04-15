import { differenceInDays } from "date-fns";

/**
 * Calcula los días transcurridos desde una fecha hasta hoy.
 */
export function diasDesde(fecha: Date): number {
  return differenceInDays(new Date(), fecha);
}