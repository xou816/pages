---
title: Silex Autowiring
repository:
  owner: xou816
  name: silex-autowiring
kind: projects
hidden: false
description: A simple library to autowire dependencies in Silex, inspired by the Java world. Note that Silex is no longer maintained.
tags:
  - cne
  - php
  - di
---

#### Background

I was involved for a year in the Junior Entreprise [Centrale Nantes Études](https://centralenantesetudes.fr/) (CNE) as a "Chief Information Officer" for lack of a better word (it sounds awfully pompous). At CNE, we built an API to connect all the services we use (Slack, MediaWiki, Owncloud, etc). Our goals where to ease authentication when possible, and automate some tasks related to our processes. This API is based on Silex.

Silex is a PHP framework based on Symfony. It uses a dependency injection library called Pimple. Pimple is powerful but fairly simple, and does not allow automatically injecting the "right" dependency in your services, like you would do using `@Autowired` with Spring for instance.

Here is how a service is created.

```php
$app['some_service'] = function () {
    return new Service();
};
```

What my library allows is to do this instead (which is not completely equivalent).
```php
$app['autowiring']->wire(Service::class);
```

This project is mostly dead, but the code is still available on Github.