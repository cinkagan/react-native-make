import { UserDependencyConfig } from '@react-native-community/cli';
import { setIconCommand, setNameCommand, setSplashScreenCommand } from './modules';

const v2Config: UserDependencyConfig = {
  commands: [setIconCommand, setNameCommand, setSplashScreenCommand],
};

export const rnPluginConfig: any = v2Config;
