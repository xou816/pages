---
title: Simple (and fancy) internationalization in React
description: How to make a simple internationalization component in React using Proxy.
date: "2019-05-25"
hidden: false
kind: blog
tags:
  - edt-ecn
  - ecn
  - javascript
  - react
---

As part of the redesign of their website, [Centrale Nantes](https://ec-nantes.fr) decided to make their website english-first -- even though most of our courses are taught in French. I had therefore no choice but to follow along and make sur my [timetable](https://edt-ecn.herokuapp.com) was properly translated! Fortunately, there is not much to translate.

However, I have chosen not to go with any i18n library for React. They all seemed all too complicated for what I wanted to do. Additionally, I wanted to avoid modifying my markup all that much. For instance, I wanted to avoid injecting an extra prop everywhere, or play with context too explicitly. **Here is what I ended up doing.**

I went from

```jsx
<Button label="Sélectionner des calendriers"/>
<span>3 calendriers sélectionnés</span>
```

to

```jsx
<Button label={<T.SelectCalendars/>}/>
<span><T.NSelectedCalendars n={3}/></span>
```

where `SelectCalendars` and `NSelectedCalendars` are translations keys -- mapping to either strings, or functions.

```js
let s = n => n > 1 ? 's' : '';

export default {
    fr: {
        // more keys here
        SelectCalendars: 'Sélectionner des calendriers',
        NSelectedCalendars: ({n}) => `${n} calendrier${s(n)} sélectionné${s(n)}`,
    },
    en: {
        // more keys here
        SelectCalendars: 'Select calendars',
        NSelectedCalendars: ({n}) => `${n} selected calendar${s(n)}`,
    }
};
```

### How does it work ?

All the `T.*` components have access to some context holding the translations from the file above. From there, it is easy enough to create a `Consumer` :

```jsx
<Translation for="SelectCalendars"/>
```

but this is not _sexy_ enough (although handy when the translation key is not known ahead of time, of course!). 

The trick here is to use a [ES2015 Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). A proxy is created using two arguments, a _target_ object to decorate and a _handler_ object. In my case, the _handler_ was an object with a `get` key. A proxy defined as such behaves similarly to a Python class which defines [the `__getattr__` method](https://docs.python.org/3/reference/datamodel.html#object.__getattr__) : that is, attempts to access members of the _target_ object (say, `target.foo`) will in turn call the function at `handler.get`. The latter should be a function taking the targeted object as its first argument and the key as its second argument.

```js
const T = new Proxy({}, {
    get: (obj, key) => {
      // do something
    }
};
```

This explains the magical `T.*` components! When React attempts to create some `T.Key` component, our function is called with that particular key. All we need to do is to create the correct `Translation` component. 

Alternatively, one could simply create the `T` object by iterating over all the keys in our translation object, creating the matching components ahead of time, but this is far from ideal (we probably don't need to have all those components in memory!). Additionally, this lets us gracefully handle an attempt to add an unknown translation. In my case, whenever some key has not been translated, a warning is logged to the console and the `T.*` component falls back to just displaying the key.

### Further reading

The full code for the `T` object is in the repository. Note that a proxy can do much more than that, as can be seen on MDN! It is moreover [rather well supported](https://caniuse.com/#feat=proxy).