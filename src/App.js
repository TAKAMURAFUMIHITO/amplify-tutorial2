// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import Amplify from 'aws-amplify';
// import awsExports from './aws-exports';

// Amplify.configure(awsExports);

// function App() {
//   return (
//     <div>
//       <h1>Notes App</h1>
//       <AmplifySignOut />
//     </div>
//   );
// }

// export default withAuthenticator(App);


import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
   return (
    <div>
      <h1>Help!</h1>
      <AmplifySignOut />
    </div>
   );
}

export default withAuthenticator(App);