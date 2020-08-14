# Dawn

**Please branch off the dev branch!!**
GraphQL Endpoint for `master`/production: https://empowering-social-advocacy.herokuapp.com/v1/graphql

- Public website (based on `master` branch): https://social-advocacy.netlify.app/

GraphQL Endpoint for `dev`: https://social-advocacy.herokuapp.com/v1/graphql

- Dev website (based on `dev` branch): https://social-advocacy-dev.netlify.app/

Authentication will be added later.

## Setting Up

You will have to set up **Docker, Hasura, Node and React**.

1. Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
2. Configure and connect your Docker container to Hasura console: https://hasura.io/docs/1.0/graphql/manual/getting-started/docker-simple.html#docker-simple
   - Note you may need to use `sudo`
3. Set up Hasura database migrations: https://hasura.io/docs/1.0/graphql/manual/migrations/config-v1/manage-migrations.html#manage-migrations-v1
   - **IMPORTANT:** This is in the instructions, but you should set `HASURA_GRAPHQL_ENABLE_CONSOLE: "false"` in your Docker YAML.
   - Step 6 and beyond are not necessary at this time
   - Note that in general, you must use `hasura console` for Hasura development, otherwise migrations will not be tracked.
4. Set up Node: `cd nodejs-express && npm install`
5. Set up React: `cd .. && npm install`

## Starting up Your Environment

All relative to project root directory

- Start Docker: `docker-compose up -d`
  - Usually this is always running after running `docker-compose up -d` in Step 2
  - You can check by running `docker ps` or `sudo docker ps`. Look for a process running on port 8080.
- Start Hasura in another terminal: `cd hasura && hasura console`
  - Should be on port 9695
  - Again, **only develop in this Hasura console, not port 8080**
- Start Node in another terminal: `cd nodejs-express && npm start`
  - Should be on port 3001
- Start React in another terminal: `npm start`
  - Should be on port 3000

## Tech Stack

There are three components to our stack: front-end, GraphQL and business logic.

- Front-end is run on **React**
- GraphQL is run on **Hasura**. In order to develop a local Hasura environment, you must have a **Docker** container running GraphQL Engine locally.
  - Docker will help us develop in our own localized Hasura environment, no need to access a Heroku endpoint.
  - We will use Hasura only for CRUD actions in GraphQL. No database or backend server needed!
- Our business logic is run on a **Node-Express** server. This server will run Hasura Actions. Any CRUD operations associated with our Actions' business logic will also be triggered within this server.
  - For some functionalities, just having access to CRUD is not enough. Some examples being:
    - Emailing a person who just signed up on our platform
    - User authentication - check that their username and password is valid
  - Hasura Actions give us the opportunity to execute business logic alongside any Hasura CRUD operations.
  - Business logic will be handled in this Node server
