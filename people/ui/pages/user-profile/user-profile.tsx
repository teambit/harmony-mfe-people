import React, { useEffect } from 'react';
import classNames from 'classnames';
import { LoaderRibbon } from '@teambit/base-ui.loaders.loader-ribbon';
import { Error } from '@teambit/base-ui.input.error';
import { ScopeList } from '@harmony-mfe/scopes.ui.scopes.scopes-list';
import { capitalize } from '@harmony-mfe/toolbox.string.capitalize';
import { Hero } from '@harmony-mfe/people.ui.user-profile.hero';
import { useUser } from '@harmony-mfe/people.ui.hooks.use-user';
import styles from './user-profile.module.scss';

export type UserProfileProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const UserProfile = ({ className, ...rest }: UserProfileProps) => {
  const [getUser, scopes, user, isLoading, error] = useUser();

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) return <LoaderRibbon active={isLoading} />;
  return (
    <div className={classNames(styles.userProfile, classNames)} {...rest}>
      <Hero
        title={capitalize(`${user.name}'s top scopes`)}
        description={capitalize('Yes, he got some scopes!')}
        userName={user.name}
        profileImage={user.image}
      />
      {error !== '' ? <Error>{error}</Error> : <ScopeList list={scopes} />}
    </div>
  );
};
