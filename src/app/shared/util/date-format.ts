import * as moment from 'moment'
export class DateFormat {

  static YYYYMMDD: string = 'YYYY/MM/DD';

  public static format(date: string | Date, format: string) {
    return moment(date).format(format);
  }
}
