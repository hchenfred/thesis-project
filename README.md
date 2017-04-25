# Project Name

> An iOS app which allows user to create events and invite friends to events

## Team

  - Huan Chen
  - Stephen Makowski 
  - Tayo Jolaosho

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- Node 6.4.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Roadmap

View the project roadmap [here](https://docs.google.com/document/d/1tJq9zj5AP2UCyE2M4mSyZ2UbmC5HB3WWCl2WYJIGBa0/edit)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Run Tests
Before running any server tests, please load schema to setup friendlyTest server. 
mysql -u root -p < schemaTest.sql
- run mocha in terminal for testing server
- run npm run test -- --verbose in terminal for testing React Native components
