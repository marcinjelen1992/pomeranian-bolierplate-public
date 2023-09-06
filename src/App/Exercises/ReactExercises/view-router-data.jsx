import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactOnClickRouterMetaData } from '../ReactOnClick/router-data';

import { ReactOnClick3RouterMetaData } from '../ReactOnClick3/router-data';

import { ReactOnClick4RouterMetaData } from '../ReactOnClick4/router-data';

import { ReactOnClick5RouterMetaData } from '../ReactOnClick5/router-data';

import { ReactOnClick6RouterMetaData } from '../ReactOnClick6/router-data';

import { materialUIRouterMetaData } from './materialUI/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  ReactOnClick3RouterMetaData,
  ReactOnClick4RouterMetaData,
  ReactOnClick5RouterMetaData,
  ReactOnClick6RouterMetaData,
  materialUIRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
