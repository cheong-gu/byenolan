import {
  ResultType,
  InfoResultType,
  ModalResultType,
  ModalQuestionType,
  DonutChartDataType,
} from './atoms.type';
import { atom } from 'recoil';

export const resultState = atom({
  key: 'resultState',
  default: {} as ResultType,
});

export const modalResultState = atom({
  key: 'modalResultState',
  default: {} as ModalResultType,
});

export const modalQuestionState = atom({
  key: 'modalQuestionState',
  default: {} as ModalQuestionType[],
});

export const donutChartState = atom({
  key: 'donutChartState',
  default: {} as DonutChartDataType,
});

export const ColumnChartState = atom({
  key: 'ColumnChartState',
  default: {} as InfoResultType[],
});
