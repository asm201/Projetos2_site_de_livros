// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'ifbooks-d59f4',
    appId: '1:996857983525:web:77461b153fd3695a0745cc',
    storageBucket: 'ifbooks-d59f4.appspot.com',
    apiKey: 'AIzaSyD4Oa16ZLva3RmZOfxOfBAjOr3nxldKGao',
    authDomain: 'ifbooks-d59f4.firebaseapp.com',
    messagingSenderId: '996857983525',
  },
  production: false,
  apiUrl: 'https://us-central1-ifbooks-d59f4.cloudfunctions.net', 
  stream:{
    key:'h2dash6jzcqh'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
