import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanRouterMetaData as booleanRouterMetaData } from './Boolean/router-data';
import { jsNumbersRouterMetaData as jsNumbersRouterMetaData } from './JSNumbers/router-data';
import { mathInJSRouterMetaData as mathInJSRouterMetaData } from './MathInJS/router-data';
import { mathInJS2RouterMetaData as mathInJS2RouterMetaData } from './MathInJS2/router-data';
import { jsNumbersTrainingRouterMetaData as jsNumbersTrainingRouterMetaData } from './JSNumbersTraining/router-data';
import { jsStringCodingRouterMetaData as jsStringCodingRouterMetaData } from './JsStringCoding/router-data';
import { jsStringTrainingRouterMetaData as jsStringTrainingRouterMetaData } from './JsStringTraining/router-data';
import { jsStringConversionRouterMetaData as jsStringConversionRouterMetaData } from './JsStringConversion/router-data';
import { jsArrayBasicsRouterMetaData as jsArrayBasicsRouterMetaData } from './JsArrayBasics/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanRouterMetaData,
  jsNumbersRouterMetaData,
  mathInJSRouterMetaData,
  mathInJS2RouterMetaData,
  jsNumbersTrainingRouterMetaData,
  jsStringCodingRouterMetaData,
  jsStringTrainingRouterMetaData,
  jsStringConversionRouterMetaData,
  jsArrayBasicsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
