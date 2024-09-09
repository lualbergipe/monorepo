# Monorepo para Popup Management y Main App

Este proyecto es un **monorepo** que contiene dos componentes principales:

- **Main App**: Aplicación principal ubicada en `apps/main-app`.
- **PopupsProvider**: Librería de componentes para la gestión de popups, ubicada en `libs/PopupsProvider`.

## Estructura del proyecto

La estructura del proyecto sigue las convenciones de un monorepo organizado con Nx:

├── apps/
│   └── main-app/         # Aplicación principal construida en React
├── PopupsProvider/
│   └── src/ 
        └── lib/          # Librería de componentes de Popup
├── dist/                 # Carpeta de salida generada por el build
├── nx.json               # Configuración de Nx
├── package.json          # Dependencias y scripts del monorepo
└── .github/
│   └── ci.yml 

               # Pipeline de CI/CD con GitHub Actions

## Scripts disponibles

En este proyecto, puedes utilizar los siguientes comandos desde la raíz del repositorio:

### `npm start`
Inicia el servidor de desarrollo para la **Main App**.

### `npm test`
Ejecuta las pruebas unitarias con **Jest**.

### `npm run build`
Compila la aplicación principal **Main App**.


## Implementación de CI/CD

### Test Components
Cada vez que se realiza un **commit** y **push** en la rama `dev` y afecta los archivos dentro de `PopupsProvider`, se ejecutan las pruebas unitarias de **Jest**, en primera instancia se ejecutan en la terminal cuando se hace el commit, esto gracias a **husky** y la configuracion de pre-commit, en segunda instancia cuando se hace el push se ejecutan nuevamente gracias a las actions de **git hub**

### Deploy Main App
Cada vez que se realiza un **push** a la rama `main`, si los archivos dentro de `apps/main-app` son afectados, se ejecuta el proceso de despliegue a **Vercel** utilizando las configuraciones establecidas en las actions de **git hub**

## Configuración del deploy en Vercel

Para realizar el despliegue en Vercel:

1. Necesitas configurar los secretos en GitHub Actions, incluyendo `VERCEL_TOKEN`, `VERCEL_PROJECT_ID`, y `VERCEL_ORG_ID`.
2. Configura el archivo `ci.yml` para que el despliegue solo se ejecute cuando los cambios afecten la aplicación principal en la rama `main`.

### Configuración de variables de entorno

Debes agregar las siguientes variables de entorno en tu repositorio o en las configuraciones de CI:

- `VERCEL_TOKEN`: Token de acceso para desplegar en Vercel.
- `VERCEL_PROJECT_ID`: ID del proyecto en Vercel.
- `VERCEL_ORG_ID`: ID de la organización en Vercel.

## Requisitos previos

- **Node.js** versión 16 o superior.
- **Nx** como herramienta de monorepo.
- **Vercel CLI** para despliegue a producción.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/lualbergipe/monorepo
