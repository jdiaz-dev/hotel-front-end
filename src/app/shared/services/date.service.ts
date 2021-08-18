import { Injectable } from '@angular/core';

import * as dayjs from "dayjs";
import * as utc from 'dayjs/plugin/utc'
import * as localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(utc)
dayjs.extend(localizedFormat)

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  getCurrentDate() {
    const currentDate = dayjs().utc(true).format('DD/MM/YYYY          LT')
    return currentDate
  }
  getCurrentDateWithSpace(): string {
    const currentDate = dayjs().utc(true).format('DD/MM/YYYY          LT')
    return currentDate
  }
}
