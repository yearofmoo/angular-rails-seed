# Angular Rails App

## Website

### Production

## Installation

1. Install RVM with Ruby v2.0.0
2. Create a gemset `rvm gemset create angular-rails-app`
3. Use the current Ruby version `rvm use 2.0.0`
4. Install the Gems `bundle`
5. Install Grunt: `sudo npm install -g grunt-cli`
6. Install local libraries: `./bin/install`
7. Create the local database: `rake db:create`
8. Create the testing database: `rake db:test:prepare`

## Development

Complete all installation steps then run: `rake dev`

## Testing

There are both client-side and server-side tests:

All tests can be run via: `rake test`.

### JS Unit Tests

#### Single Run Tests
Run: `rake karma:test`

#### Autorun Tests
Run: `rake karma:autotest`

#### Coverage
Run: `rake karma:coverage`

### RSpec Unit Tests

#### Single Run Tests
Run: `rake rspec:test`

#### Auto Run Tests
Run: `rake rspec:autotest`

## Deployment

Push to heroku: `rake deploy`
