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
    const currentDate = dayjs().utc(true).format('YYYY-MM-DD')
    return currentDate
  }
  getCurrentTime() {
    const currentTime = dayjs().utc(true).format('HH:mm:ss')
    return currentTime
  }
}
