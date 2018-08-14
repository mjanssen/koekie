# Koekie
[![npm](https://img.shields.io/npm/v/koekie.svg)](http://npm.im/koekie)
[![gzip size](http://img.badgesize.io/https://unpkg.com/koekie/dist/koekie.js?compression=gzip)](https://unpkg.com/koekie/dist/koekie.js)

The **zero-dependency** ~_280B_ cookie manager for your Javascript projects.

# Install

```
npm install --save koekie
```

# Usage

```
import { setCookie, getCookie, getAllCookies, cookieExists, removeCookie } from 'koekie';

// Options are optional. Every cookie expires after one hour by default.
const options = {
  expires: 3600, // one hour
};

// Set a specific cookie, with a given value. Stores for one hour.
setCookie(name, value, options);

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
