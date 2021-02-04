import { useState } from 'react';

export const useUser = (): [() => void, any, any, boolean, string] => {
  const [scopes, setScopes] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getUser = () => {
    setIsLoading(true);
    try {
      const scopesData = [
        {
          id: 'teambit.base-ui',
          description:
            'A collection of minimal, bare, and well-crafted UI elements.',
          componentCount: '68',
          visibility: 'Public',
        },
        {
          id: 'teambit.base-ui',
          description:
            'A collection of minimal, bare, and well-crafted UI elements.',
          componentCount: '68',
          visibility: 'Public',
        },
        {
          id: 'teambit.evangelist',
          description: 'Reusable UI components for marketing projects.',
          componentCount: '54',
          visibility: 'Public',
        },
        {
          id: 'teambit.evangelist',
          description: 'Reusable UI components for marketing projects.',
          componentCount: '54',
          visibility: 'Public',
        },
      ];
      const userData = {
        name: 'Josh',
        image:
          'https://s.gravatar.com/avatar/87749023bcfc8c6237d21cf36ebb9188?rating=g&default=blank&size=122&w=122&h=122&fill=fillmax&bg=fff',
      };
      setScopes(scopesData);
      setUser(userData);
      if (error) setError('');
      setIsLoading(false);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };
  return [getUser, scopes, user, isLoading, error];
};
