import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactOnClickRouterMetaData } from '../ReactOnClick/router-data';

import { ReactOnClick3RouterMetaData } from '../ReactOnClick3/router-data';

import { ReactOnClick4RouterMetaData } from '../ReactOnClick4/router-data';

import { ReactOnClick5RouterMetaData } from '../ReactOnClick5/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  ReactOnClick3RouterMetaData,
  ReactOnClick4RouterMetaData,
  ReactOnClick5RouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
