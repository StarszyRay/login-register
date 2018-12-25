// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const myApiKey = config.MY_API_KEY;
export const environment = {
  production: false,
  firebase: {
    apiKey: myApiKey,
    authDomain: 'logreg-4297f.firebaseapp.com',
    databaseURL: 'https://logreg-4297f.firebaseio.com',
    projectId: 'logreg-4297f',
    storageBucket: 'logreg-4297f.appspot.com',
    messagingSenderId: '1098415701394'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.