# AVE - PROJECT INTRODUCTION

## The purpose of AVE

AVE stands for Angular Visual Editor, the purpose of this project is to create an engine to develop custom CMS with Angular framework. The final result must garantuee these objectives:

1. It must be optimized
2. It must be stateless
3. It must be testable (automatically and/or manually)
4. It must be customizable

## Development steps

1. [0.0.1] Deploy a demo of the editor including:
    * UI interface
    * Simple routing management
    * Simple styling
2. [0.0.2] Deploy a functional demo of the editor including:
    * Project management
    * Save / Load data
    * Deploy
3. [0.0.3] Deploy a functional demo of the editor including:
    * Table / Form management
    * REST API management
    * State management

... and others in the future

## Boostrap

This app is created using https://github.com/maximegris/angular-electron.

## Running

### Frontend

```bash
cd frontend
npm run ng:serve:web
```

### Backend

#### node

```bash
cd backend
npm run devStart
```

#### mongod
!!! you need to set mongod PATH env variable (https://dangphongvanthanh.wordpress.com/2017/06/12/add-mongos-bin-folder-to-the-path-environment-variable/).
```bash
cd backend
mongod --dbpath ./data
```