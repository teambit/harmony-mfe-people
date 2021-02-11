import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { SymphonyReactAspect } from './mfe-people-react.aspect';

export class SymphonyReactMain {
  static runtime = MainRuntime;

  static dependencies = [ReactAspect, EnvsAspect];

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const symphonyReactEnv = envs.compose(react.reactEnv, [
      react.overrideDependencies({
        dependencies: {
          '@teambit/base-ui.hooks.use-graphql-light': {
            version: '0.0.4',
            resolveFromEnv: true,
          },
        },
      }),
    ]);
    envs.registerEnv(symphonyReactEnv);
    return new SymphonyReactMain();
  }
}

SymphonyReactAspect.addRuntime(SymphonyReactMain);
