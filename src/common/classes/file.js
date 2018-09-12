import { promisify } from 'util';
import { readFile } from 'fs';

export const readFileAsync = path => promisify(readFile)(path, { encoding: `utf-8` });
