import { Config } from '@react-native-community/cli';
import { changeAndroidAppName } from './android/service';
import { changeIOSAppName } from './ios/service';

export const setNameTask = async (argv: string[], config: Config, args: Record<string, any>) => {
  const { name } = args;
  await changeAndroidAppName(name);
  await changeIOSAppName(name);
};
