import { getIosPackageName } from '../../../utils';
import { replaceInFile } from '../../../services/file.processing';

export const changeIOSAppName = async (appName: string) => {
  const infoPlistPath = `./ios/${getIosPackageName()}/Info.plist`;
  const AppNamePattern = /(<key>CFBundleDisplayName<\/key>[ \t\n]*<string>)[a-zA-Z]+(<\/string>)/g;

  replaceInFile(infoPlistPath, infoPlistPath, [
    {
      oldContent: AppNamePattern,
      newContent: `$1${appName}$2`,
    },
  ]);
};
