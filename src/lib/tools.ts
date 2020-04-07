import moment from 'moment';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { DATEFORMAT, DATEFORMATDISPLAY } from '../lib/config';

export const getTodaysDate = () => {
  const date = moment().format(DATEFORMAT);
  return date;
};

export const getDisplayDate = (inputDate: string) => {
  const date = moment(inputDate, DATEFORMAT).format(DATEFORMATDISPLAY);
  return date;
};

export const getTodoID = () => {
  const id = uuidv4();
  return id;
};
