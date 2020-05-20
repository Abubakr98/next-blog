import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d MMMM y", { locale: ru })}
    </time>
  );
}
