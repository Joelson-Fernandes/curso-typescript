/* eslint-disable import/no-extraneous-dependencies */
import _ from 'lodash';

_.nul = (array: number[]): number => array.reduce((total, atual) => total * atual, 1);

global.MINHAGLOBAL = 'VALOR DA MINHA GLOBAL';

export default _;
