import * as download from 'download';
import { rm } from 'fs/promises';
import { platform } from 'os';
import { join } from 'path';

const PREFIX = 'https://cdn.iflyos.cn/public/lisa-binary/ninja/';

const SUFFIX = (() => {
  switch (platform()) {
    case 'win32': return 'win';
    case 'darwin': return 'mac';
    default: return 'linux';
  }
})();

const NAME = `ninja-v1.10.2-${SUFFIX}.zip`;
const HOME = join(__dirname, '..', 'binary');

(async () => {

  try {
    await rm(HOME, { recursive: true });
  } catch (e) {
  }

  await download(`${PREFIX}${NAME}`, HOME, {
    extract: true,
  });

})();
