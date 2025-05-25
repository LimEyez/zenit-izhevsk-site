export const MonthsNames = [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
    'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
];

const monthsNamesGenitive = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];
export function formatToRuDayMonthYear(date: Date | string, showNameOfMonth: boolean = false): string | null {


    let parsedDate: Date;

    if (date instanceof Date) {
        parsedDate = date;
    } else {
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            parsedDate = new Date(date + "T00:00:00");
        } else {
            parsedDate = new Date(date);
        }
    }

    if (isNaN(parsedDate.getTime())) {
        return null;
    }

    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = showNameOfMonth
        ? monthsNamesGenitive[parsedDate.getMonth()]
        : String(parsedDate.getMonth() + 1).padStart(2, '0');
    const separator = showNameOfMonth ? ' ' : '.';
    const year = parsedDate.getFullYear();

    return `${day}${separator}${month}${separator}${year}`;
}

export function formatToRuTimeDayMonthYear(date: Date | string, showNameOfMonth: boolean = false): string | null {
    let parsedDate: Date;

    if (date instanceof Date) {
        parsedDate = date;
    } else {
        // Проверим, если строка соответствует формату 'yyyy-mm-dd', то это только дата
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            parsedDate = new Date(date + "T00:00:00"); // добавляем время по умолчанию (00:00)
        } else {
            parsedDate = new Date(date);
        }
    }

    if (isNaN(parsedDate.getTime())) {
        return null; // Невалидная дата
    }

    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = showNameOfMonth ? monthsNamesGenitive[parsedDate.getMonth()] : String(parsedDate.getMonth() + 1).padStart(2, '0');
    const year = parsedDate.getFullYear();
    const separator = showNameOfMonth ? ' ' : '.'

    // Получаем время из parsedDate
    const hours = String(parsedDate.getHours()).padStart(2, '0');
    const minutes = String(parsedDate.getMinutes()).padStart(2, '0');

    // Если время не указано, возвращаем только дату
    const time = hours === '00' && minutes === '00' ? '' : `${hours}:${minutes}`;

    // Возвращаем дату с временем, если оно есть
    return time ? `${time}, ${day}${separator}${month}${separator}${year}` : `${day}${separator}${month}${separator}${year}`;
}


