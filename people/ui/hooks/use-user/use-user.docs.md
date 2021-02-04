---
labels: ['react', 'hooks', 'user', 'scopes']
description: 'A React hooks to get user data.'
---

import { useEffect } from 'react';
import { useUser } from './use-user';

This hooks gives you user details: name, image, scopes list with components amount.  
How to use:

```js live
() => {
  const [getUser, scopes, user, isLoading, error] = useUser();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div>{JSON.stringify(scopes)}</div>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
};
```
