# Blueprint JS project

This project aims to be the starting point for any new JS project in Archive Search with a minimum set of configuration and tools that are useful in any JS service and considered best practices from the community.
It will encourage consistency in our codebase of different services, optimise the Developer Experience (DX) and of course make easier the onboarding of new devs.

## Unit testing framework

[Jest](https://jestjs.iohttps://jestjs.io/) is a really popular unit testing framework that  supports snapshot testing and has a simple mocking API

    npm test

## ESLint configuration

Configured with [AirBnB's JS ESLint ](https://github.com/airbnb/javascript) popular config and [Prettier](https://prettier.io/) for a consistent code style.

    npm run lint

## Git Hooks 
It's already pre-configured with a **pre-commit hook** that's running the linting and the testing tasks to ensure code quality and consistency in every commit and minimize the code review effort.

It's can really easily re-configured and extended with other Git Hooks as well.
