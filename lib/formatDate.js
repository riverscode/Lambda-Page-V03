import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (date) => {
  return format(parseISO(date), "d MMMM, yyyy", {
    locale: es,
  });
};
