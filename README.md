# Koekie

The **zero-dependency** ~_330B_ cookie manager for your Javascript projects.

# Install

```
npm install --save koekie
```

# Usage

```
import { setCookie, getCookie, getAllCookies, cookieExists, removeCookie } from 'koekie';

// Set a specific cookie, with a given value.
setCookie(name, value, { expires: 1, in: 'hours' });

// Get a specific cookie. Returns false if non-existent
getCookie(name);

// Returns an array with all available cookies
getAllCookies();

// Surprisingly, returns a bool true/false if a cookie exists
cookieExists(name);

// Removes a cookie
removeCookie(name)
```

# Options

You can pass an options parameter to `setCOokie`, which will allow you to control the expiration date for the given cookie. By default, a cookie wil be stored for
one hour. The `in` property accepts four different types; `hours`, `days`, `months` and `years` (plural!).

When you want to set a cookie for one month, pass `{ expires: 1, in: 'months' }`. This will use the Javascript `Date()` function to calculate the length and set it for
the correct time.

_By default, the cookie will be stored for one hour!_

# Demo

Code demo [can be found here](https://codesandbox.io/s/23vr2nkp4p)

# License

[MIT](https://oss.ninja/mit/mjanssen/)
