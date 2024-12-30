# 3-Layer Application with Kubernetes and Helm

This project demonstrates a 3-layer application architecture deployed on Kubernetes using Helm. The application consists of a frontend, backend, and a MySQL database.

## Components

### Frontend

- **Description**: A simple HTML page served by Nginx.
- **Files**:
  - [index.html](webapp/frontend/index.html)
  - [frontend-deployment.yaml](webapp/frontend/frontend-deployment.yaml)
  - [frontend-service.yaml](webapp/frontend/frontend-service.yaml)
  - [frontend-configmap.yaml](webapp/frontend/frontend-configmap.yaml)
  - [Dockerfile](webapp/frontend/Dockerfile)

### Backend

- **Description**: An Express.js server that connects to the MySQL database.
- **Files**:
  - [server.js](webapp/backend/server.js)
  - [package.json](webapp/backend/package.json)
  - [backend-deployment.yaml](webapp/backend/backend-deployment.yaml)
  - [backend-service.yaml](webapp/backend/backend-service.yaml)
  - [Dockerfile](webapp/backend/Dockerfile)

### Database

- **Description**: A MySQL database initialized with a `tasks` table.
- **Files**:
  - [db.sql](webapp/db/db.sql)
  - [mysql-deployment.yaml](webapp/db/mysql-deployment.yaml)
  - [mysql-service.yaml](webapp/db/mysql-service.yaml)
  - [mysql-secret.yaml](webapp/db/mysql-secret.yaml)
  - [Dockerfile](webapp/db/Dockerfile)

## Helm Chart

The Helm chart is located in the `3-layer-app` directory and includes templates for deploying the frontend, backend, and database components.

- **Files**:
  - [Chart.yaml](3-layer-app/Chart.yaml)
  - [values.yaml](3-layer-app/values.yaml)
  - [backend-deployment.yaml](3-layer-app/templates/backend-deployment.yaml)
  - [backend-service.yaml](3-layer-app/templates/backend-service.yaml)
  - [frontend-configmap.yaml](3-layer-app/templates/frontend-configmap.yaml)
  - [frontend-deployment.yaml](3-layer-app/templates/frontend-deployment.yaml)
  - [frontend-service.yaml](3-layer-app/templates/frontend-service.yaml)
  - [mysql-deployment.yaml](3-layer-app/templates/mysql-deployment.yaml)
  - [mysql-secret.yaml](3-layer-app/templates/mysql-secret.yaml)
  - [mysql-service.yaml](3-layer-app/templates/mysql-service.yaml)

## Deployment

### Prerequisites

- Kubernetes cluster
- Helm installed

### Steps

1. **Clone the repository**:

    ```sh
    git clone https://github.com/emansarahafi/K8S-webapp.git
    cd 3-layer-app
    ```

2. **Deploy the Helm chart**:

    ```sh
    helm install 3-layer-app .
    ```

3. **Verify the deployment**:

    ```sh
    kubectl get all
    ```

## Accessing the Application

- **Frontend**: Access the frontend service using the NodePort specified in the values.yaml file.
- **Backend**: The backend service is proxied by the frontend Nginx server.
- **Database**: The MySQL service is accessible within the cluster.

## Cleanup

To delete the deployment, run:

```sh
helm uninstall 3-layer-app
```
