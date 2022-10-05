import { ANDROID_MAIN_RES_PATH } from '../../config';
import { replaceInFile } from '../../../services/file.processing';

export const changeAndroidAppName = async (appName: string) => {
  replaceInFile(
    `${ANDROID_MAIN_RES_PATH}/values/strings.xml`,
    `${ANDROID_MAIN_RES_PATH}/values/strings.xml`,
    [
      {
        oldContent: /<string name="app_name">.*<\/string>/gm,
        newContent: `<string name="app_name">${appName}</string>`,
      },
    ]
  );
};
