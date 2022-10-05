import { Command } from '@react-native-community/cli';
import { logo } from '../../logo';
import { trackTask } from '../../services/analytics';
import { setNameTask } from './setName.task';

export const setNameCommand: Command = {
  name: 'set-name',
  func: trackTask('/set-name', setNameTask),
  description: logo + ' app name',
  options: [
    {
      name: '--name <string>',
      description: 'new name of your app',
    },
  ],
  examples: [
    {
      desc: 'set the app name',
      cmd: 'react-native set-name --name <new-app-name>',
    },
  ],
};
