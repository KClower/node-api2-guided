# Node API 2 Guided Project Starter Code

Guided project starter code for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

- a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] clone this repository.
- [ ] **CD into the folder** where you cloned the repo.
- [ ] type `npm i` to download dependencies.

Please follow along as the instructor builds the API step by step:

| Not using REST                               | Using REST                                       |
| -------------------------------------------- | ------------------------------------------------ |
| POST `http://localhost:9000/listAllAdopters` | GET    `http://localhost:9000/adopters`          |
| POST `http://localhost:9000/createAdopter`   | POST   `http://localhost:9000/adopters`          |
| POST `http://localhost:9000/updateAdopter`   | PUT    `http://localhost:9000/adopters/:id`      |
| POST `http://localhost:9000/deleteAdopter`   | DELETE `http://localhost:9000/adopters/:id`      |
| POST `http://localhost:9000/listAdopterDogs` | GET    `http://localhost:9000/adopters/:id/dogs` |



## Query String:

https://www.google.com
/search
?                  <---- (marks the beginning of the query string)
q=mdn+query+string <-----(key/value pair)
&                  <---- (seperates key/value pair)
rlz=1C1VDKB_enUS1101US1101
&
oq=mdn+quert
&gs_lcrp=EgZjaHJvbWUqCQgDEAAYDRiABDIGCAAQRRg5MgkIARAAGA0YgAQyCQgCEAAYDRiABDIJCAMQABgNGIAEMggIBBAAGA0YHjIICAUQABgNGB4yCAgGEAAYDRgeMggIBxAAGA0YHjIICAgQABgNGB4yCggJEAAYCBgNGB7SAQk5OTU3ajFqMTWoAgmwAgE
&
sourceid=chrome
&
ie=UTF-8

```js
req.query = {
    q: "mdn+query+string",
    rlz: "1C1VDKB_enUS1101US1101",
    oq: "mdn+quert",
}

## Sub Routes:

Chat

-org
    -channels
            -message
                -reactions --> emoji


- /orgs CRUD
- /channels {ordid: 1, ...channelData}, POST, GET /orgs/23/channels; DELETE /channels/23
- /messages
- /reactions ->>>> sub route candidate, it does not make sense outside of a message.
- /emojis