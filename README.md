# Koekie

The **zero-dependency** ~_260B_ cookie manager for your Javascript projects.

# Install

```
npm install --save koekie
```

# Usage

```
import { setCookie, getCookie, getAllCookies, cookieExists, removeCookie } from 'koekie';

// Set a specific cookie, with a given value.
setCookie(name, value);

// Get a specific cookie. Returns false if non-existent
getCookie(name);

// Returns an array with all available cookies
getAllCookies();

// Surprisingly, returns a bool true/false if a cookie exists
cookieExists(name);

// Removes a cookie
removeCookie(name)
```

# Demo

Code demo [can be found here](https://codesandbox.io/s/23vr2nkp4p)

# License

[MIT](https://oss.ninja/mit/mjanssen/)
