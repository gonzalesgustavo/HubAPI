# HubAPI - TypeScript/Express/Docker API Scaffold Project (Re-upload)

---

A bare bones structure to creating backend projects using TypeScript, Express Js, and currently Docker Mongo for the database.

## Run

---

```bash
# initialize docker container
yarn dok:actuve
# tare down Docker
yarn dok:deavtivate
# watch TypeScript
yarn watch:ts
# watch Node --> Currently has a bug where the service doesn't quit on exit.
yarn watch:node
```

### Setup

---

## **_Sample .env_**

```env
PORT=3001

NODE_ENV=local

# Development
MongoUserDev=root
MongoPassDev=example
MongoRootDbDev=
MongoHostDev=container ip
MongoPortDev=27017

# Beta
MongoUserBeta=
MongoPassBeta=
MongoRootDbBeta=
MongoHostBeta=
MongoPortBeta=

# Prod
MongoUserProd=
MongoPassProd=
MongoRootDbProd=
MongoHostProd=
MongoPortProd=

```

### Logging
---

Logging uses winston and has the option for to file and to console.

import logger

 'info' = console
 'logs' = file

 logs are ignored by gitignore and so is the public folder so if you want these you must alter the gitignore. 

in the Config/index.ts you can disable logging on startup. this will ignore the on run commands not the logs elswhere. 

turn logs: to true if you want startup logs to appear in console or false if you do not want them.

### Static files

---

Static files are defaulted to the root of the project in a folder named public, this is the default exposed to the public. Use for images etc.

### Controllers and Modules (Routes)

---

These are the routes and when created they need to be registered in the Registry (**module.registry.ts**).

Sample Module:

```typescript
import { Methods, Module, RouteObject } from '../../../core/types.core';
import HomeController from './Home.controller';

export default class HomeModule implements Module {
  baseURL: string;
  subRoutes: RouteObject[];
  constructor() {
    this.baseURL = '/';
    // Link subroutes here and match the methods using the provided enum.
    this.subRoutes = [
      {
        path: '/',
        method: Methods.GET,
        control: HomeController.index,
      },
    ];
  }
}
```

Sample Controller:

```typescript
import { Request, Response } from 'express';

export default class HomeController {
  // Controller methods need to be static methods
  static async index(req: Request, res: Response): Promise<void> {
    try {
      res.end('hello');
    } catch (error) {
      res.end('bad req');
    }
  }
}
```

In order for them to be mapped they need to be added to the registry following the schema below:

```typescript
import { Module } from '../../core/types.core';
import HomeModule from '../routing/Home/Home.module';

const Modules: Module[] = [new HomeModule()];

export default Modules;
```

### Adding App Level middleware

---

In the registry you will find app.middleware.registry.ts, here you will add all app level middleware (Cors, BodyParser, Etc):

```typescript
import Cors from 'cors';
import { urlencoded, json } from 'body-parser';

export default [Cors(), json(), urlencoded({ extended: false })];
```

#### Generating Routes using the generator

---

## Warning

----

The generator does not cache or store the models, routes, or tests created, running the generator will create a new file on each run so if you want to add routes to an existing file you need to add them manually. Running the script will overwrite the file and work is not saved. This is a feature to look into and possibly will be added in the future.  

## Setup

---

## **Initialize package:**

If Gen10-Generator (v0.1.0) not in the folder structure run (only needs to be run once):

```bash
yarn initialize
```

Then:

In the projects root directory add a file named g10.settings.json. This file contains the paths to where the models/controllers/modules will be created. These could change depending on OS currently.

```json
{
  "controllerDir": "../../src/src/Controllers/",
  "databaseHandler": "mongoose",
  "modelDir": "../../src/src/Models/"
}
```

The project comes with both Mongoose and MongoDb client, depending on which one you choose to use switch the "databaseHandler" to either mongoose or mongodb. This will generate models based of off a mongoose shema model or the inner Model to be used with mongodb client.

(If not already in scripts or deleted)
Creating a run script:

```json
  "scripts" : {
    "gen10": "node ./Gen10-Generator/index.js"
  }
```

## Use

---

Creating routes:

```bash
yarn gen10 r [Option] [Name]
```

Generating a Model:

```bash
yarn gen10 m [Name]
```

Name should start with a capital letter "Home"

### Options

---

| Option | CRUD initialization                                                                |
| ------ | ---------------------------------------------------------------------------------- |
| S      | Simple (Default) Route with an index endpoint setup (Get)                          |
| C      | Route with an index and Create endpoint (Get) (Post)                               |
| R      | Route with an index and Read endpoint (Get) (Get/:id)                              |
| U      | Route with an index and Update endpoint (Get) (Patch) (Put)                        |
| D      | Route with an index and Delete endpoint (Get) (Delete)                             |
| CR     | Route with an index, Create, and Read (Get) (Post) (Get/:id)                       |
| CD     | Route with an index, Create, and Delete (Get) (Post) (Delete)                      |
| CU     | Route with an index, Create, and Update (Get) (Post) (Patch) (Put)                 |
| CRU    | Route with an index, Create, Read, and Update (Get) (Post) (Get/:id) (Patch) (Put) |
| CRUD   | Route with an index, Read, Update, Delete (Get) (Get/:id) (Patch) (Put) (Delete)   |
| RU     | Route with an index, Update, and Read (Get) (Get/:id) (Patch) (Put)                |
| UD     | Route with an index, Update, and Delete (Get) (Patch) (Put) (Delete)               |

### Async Options

---

| Option | CRUD initialization                                                                |
| ------ | ---------------------------------------------------------------------------------- |
| AS     | Simple (Default) Route with an index endpoint setup (Get)                          |
| AC     | Route with an index and Create endpoint (Get) (Post)                               |
| AR     | Route with an index and Read endpoint (Get) (Get/:id)                              |
| AU     | Route with an index and Update endpoint (Get) (Patch) (Put)                        |
| AD     | Route with an index and Delete endpoint (Get) (Delete)                             |
| ACR    | Route with an index, Create, and Read (Get) (Post) (Get/:id)                       |
| ACD    | Route with an index, Create, and Delete (Get) (Post) (Delete)                      |
| ACU    | Route with an index, Create, and Update (Get) (Post) (Patch) (Put)                 |
| ACRU   | Route with an index, Create, Read, and Update (Get) (Post) (Get/:id) (Patch) (Put) |
| ACRUD  | Route with an index, Read, Update, Delete (Get) (Get/:id) (Patch) (Put) (Delete)   |
| ARU    | Route with an index, Update, and Read (Get) (Get/:id) (Patch) (Put)                |
| AUD    | Route with an index, Update, and Delete (Get) (Patch) (Put) (Delete)               |

## Generating Tests

---

If you want a test to be generated after all put the type of test you want to generate.

```bash
yarn gen10 r [Option] [Name] [test option]
```

If you want to generate a just a test.

```bash
yarn gen10 t [Option] [Name]
```

| Option | Type             |
| ------ | ---------------- |
| u      | Unit test        |
| i      | Integration Test |
| ui     | iu               | Unit and Integration Test |

### Responses with Responder

These make responding easier and controlled. All responses should use this to stay consistant but they are optional.

To respond we create a ResponseBuilder and pass in a object that follows the custom Response:

```typescript
export interface RequestInfo {
  method: string;
  url: string;
  body?: unknown;
  params?: string | undefined;
}

export interface CustomResponse {
  results: null | unknown[];
  length?: number | 0;
  success: boolean;
  status?: number;
  message?: string;
  error?: object | null | undefined | string | unknown;
  info: RequestInfo;
}
```

**Sample Response**

```typescript
const response = {
  success: true,
  results: await test.toArray(),
  info: {
    method: 'GET',
    params: undefined,
    url: `${req.protocol}://${req.get('host')}/${req.url}`
  };
Responder.Accepted({res, payload:response)});
```

We then must use the Responder which is setup to make life easier. All methods are static so they will be accessed
by the name Responder.method. they take an object:

```typescript
{
  res: Response,
  payload: CustomResponse,
}
```

There is a plethora of available responses built in. You can enter them by their name

Responder.success()

or you can enter by the response number:

Responder.r200()

To use the responder see sample below:

```typescript
async index(req: Request, res: Response): Promise<void> {
		try {
			const { trial } = req.app.locals.mongo;
			const test = trial.find({});
			const response = {
				success: true,
				results: await test.toArray(),
				info: {
					method: 'GET',
					params: undefined,
					url: `${req.protocol}://${req.get('host')}/${req.url}`
				};
			Responder.Accepted({res, payload:response)});
		} catch (error) {
			const response = {
				success: false,
				results: [],
				error: error.message,
				info: {
					method: 'POST',
					params: undefined,
					body: {
            id: {
              type: "string",
              required: true
            },
          }
					url: req.url
			};
			Responder.BadRequest({res, payload: response });
		}
	}

```

### Image Upload

Currently there is a setup using multer for image uploading. All utils should be setup in the Utils folder.

**Note**: Multers path might change since multer is a middleware and should be in the middleware folder

### Post install Cleanup:

---

Depending on what you desire to use for the database, either mongoose or mongodb client you may want to uninstall packages/types for the one you are not useing.

## Current Support

---

Database suppots:

- Mongoose (MongoDb)

## Bugs

---

Concurrently causes a lingering issue when running:

```bash
yarn watch
```

Cntrl C twice stops the server.

this is a known issue with concurrently at the moment. 