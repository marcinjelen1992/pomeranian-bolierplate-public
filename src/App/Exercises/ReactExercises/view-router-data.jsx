import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactOnClickRouterMetaData } from '../ReactOnClick/router-data';

import { ReactOnClick3RouterMetaData } from '../ReactOnClick3/router-data';

import { ReactOnClick4RouterMetaData } from '../ReactOnClick4/router-data';

import { ReactOnClick5RouterMetaData } from '../ReactOnClick5/router-data';

import { ReactOnClick6RouterMetaData } from '../ReactOnClick6/router-data';

import { materialUIRouterMetaData } from './materialUI/router-data';

import { selectsPrevRouterMetaData } from './SelectsPrev/router-data';

import { useEffectsRouterMetaData as useEffectsRouterMetaData } from './UseEffects/router-data';

import { todoWithServerRouterMetaData as todoWithServerRouterMetaData } from './TodoWithServer/router-data';

import { reactUseRefRouterMetaData as reactUseRefRouterMetaData } from './ReactUseRef/router-data';

import { reactUseRefExerciseRouterMetaData as reactUseRefExerciseRouterMetaData } from './ReactUseRefExercise/router-data';

import { formsRouterMetaData as formsRouterMetaData } from './Forms/router-data';

import { basicFormRouterMetaData as basicFormRouterMetaData } from './BasicForm/router-data';

import { firebaseExerciseRouterMetaData as firebaseExerciseRouterMetaData } from './FirebaseExercise/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  ReactOnClick3RouterMetaData,
  ReactOnClick4RouterMetaData,
  ReactOnClick5RouterMetaData,
  ReactOnClick6RouterMetaData,
  materialUIRouterMetaData,
  selectsPrevRouterMetaData,
  useEffectsRouterMetaData,
  todoWithServerRouterMetaData,
  reactUseRefRouterMetaData,
  reactUseRefExerciseRouterMetaData,
  formsRouterMetaData,
  basicFormRouterMetaData,
  firebaseExerciseRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
