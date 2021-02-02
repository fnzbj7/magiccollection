# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Adding the virst version of foil cards, still could change later
- Adding shining for the foil cards (it's still on development)
- When in the card list screen don't have showable card, then you will see message like this: "There is no avaliable card, make less strict filtering"
- In the card list page and the calendar page you can use left and right swipe to change page (powered with HammerJs)

### Changed

- The login and registering dialog now cahnged to screens. The logic stas the same
- The mobile menu style and order

### Fixed

- In log in when you give wrong password, the error message was not shown properly

## [1.1.0] - 2021-01-22

### Added

- There is a (plain-looking) order button on Adding/Removing card
- Adding grouping button to Adding/Removing card
- After uploading cards you can check if you added new cards (need a UI upgrade in the future)
- Added a new Normal card layout for the card modal and refactored the whole code (to create all the urls in the same place)
- Adding information tooltip to the rarity filter (CURM) in the card list page
- Change pagination size to bigger on mobile screen to be easier to use
- Now you can add foil cards: you just need to add a star (\*) after the card number (the display part will be created later)
- Adding KHM cards

### Changed

- Separate the backend and frontend projects. (It happend because i want to create test cases for backend and frontend too)
- Adding Proxy to the localhost dev enviroment and removing cors from backend

## [1.0.0] - 2020-09-23

### Added

- Different layouts to card modal, like split, aftermath or melt layouts
- Adding ZNR cards

### Changed

- Updated all npm package to the newest

### Fixed

- Adding registration screen error messages and checks. Even Translated to hungarian
- Fixing card amount upon log in/log out
