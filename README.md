# Grafana Faro React Implementation

## ENV setup
In the project root directory, create a `.env` file with the following keys

```
REACT_APP_FARO_APP_NAME=""
REACT_APP_FARO_APP_ID=""
REACT_APP_FARO_STACK_ID=""
REACT_APP_FARO_ENDPOINT=""
REACT_APP_FARO_API_KEY=""
REACT_APP_FARO_COLLECTOR_URL=""
```

## Grafana cloud setup
- Create an account on grafana cloud
- Navigate to **Frontend** and create a new project
- Copy the values of environment variables from instructions into `.env` file
- Navigate to **Cloud access policies** and create new Access Policy &rarr; give it a name and in scopes, search and add sourcemaps with *read*, *write* and *delete* access checked
- Once created, add token with your expiry time and copy the API Key into your `.env` file

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
