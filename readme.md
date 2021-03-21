# Warbler Solution

## Getting started

1.  In the `warbler-server` folder

    * `npm install`
    * `nodemon` (if installed) or `node index.js`

2.  In the `warbler-client` folder

    * `npm install`
    * `npm start`

# store/reducers

index.js is the root reducer that we export out

# what reducers do we need

let's start with errors.js

# actionTypes.js

add an error and remove an error

load messages

actionType set current user

logged in currently

# errors.js

import add error and remove error

# initialize state

in errors.js

(state = {message: null})

# errors.js

if we need to add an error or remove an error

# create a new file currentUser.js

user: {} 

user starts to an empty Object

when logged out set user to an empty object and isAuthenticated to false

switch on an action type

# how we are going to change state

current user.js

isAuthenticated: Object.keys(action.user).length > 0

returns a boolean

## !!Object.keys(action.user).length

turns an empty object into false 

or if there are keys turns into into true

same as using Boolean(Object.keys(action.user).length) here

Boolean constuctor

# then bundle those together in index.js

review rootReducer



