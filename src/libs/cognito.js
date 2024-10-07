import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
} from "amazon-cognito-identity-js";

// const userPoolId = process.env.REACT_APP_USERPOOL_ID;
// const clientId = process.env.REACT_APP_CLIENT_ID;

// if (!userPoolId || !clientId) {
//   throw new Error(
//     "User Pool ID or Client ID is not defined in the environment variables."
//   );
// }

const poolData = {
  UserPoolId: "eu-west-2_zsNqXZHOi",
  ClientId: "4o1si691159tnsljsl2dnar7i3",
};

const userPool = new CognitoUserPool(poolData);
let currentUser = userPool.getCurrentUser();

export function getCurrentUser() {
  return currentUser;
}

function getCognitoUser(username) {
  const userData = {
    Username: username,
    Pool: userPool,
  };
  return new CognitoUser(userData);
}

export async function getSession() {
  if (!currentUser) {
    currentUser = userPool.getCurrentUser();
  }

  return new Promise((resolve, reject) => {
    currentUser.getSession((err, session) => {
      if (err) {
        reject(new Error(`Failed to get session: ${err.message}`));
      } else {
        resolve(session);
      }
    });
  });
}

export async function signUpUserWithEmail(
  email,
  password,
  given_name,
  family_name
) {
  return new Promise((resolve, reject) => {
    const attributeList = [
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      }),
      // new CognitoUserAttribute({
      //   Name: "password",
      //   Value: password,
      // }),
      new CognitoUserAttribute({
        Name: "given_name",
        Value: given_name,
      }),
      new CognitoUserAttribute({
        Name: "family_name",
        Value: family_name,
      }),
    ];

    userPool.signUp(email, password, attributeList, [], (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

export async function verifyCode(username, code) {
  return new Promise((resolve, reject) => {
    const cognitoUser = getCognitoUser(username);

    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        reject(new Error(`Failed to confirm registration: ${err.message}`));
      } else {
        resolve(result);
      }
    });
  });
}

export async function signInWithEmail(username, password) {
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    currentUser = getCognitoUser(username);

    currentUser.authenticateUser(authenticationDetails, {
      onSuccess: (res) => {
        resolve(res);
      },
      onFailure: (err) => {
        reject(new Error(`Failed to sign in: ${err.message}`));
      },
    });
  });
}

export function signOut() {
  if (currentUser) {
    currentUser.signOut();
    currentUser = null; // Clear the current user reference
  }
}

export async function getAttributes() {
  return new Promise((resolve, reject) => {
    currentUser.getUserAttributes((err, attributes) => {
      if (err) {
        reject(new Error(`Failed to get user attributes: ${err.message}`));
      } else {
        resolve(attributes);
      }
    });
  });
}

export async function setAttribute(attribute) {
  return new Promise((resolve, reject) => {
    const attributeList = [new CognitoUserAttribute(attribute)];

    currentUser.updateAttributes(attributeList, (err, res) => {
      if (err) {
        reject(new Error(`Failed to update attribute: ${err.message}`));
      } else {
        resolve(res);
      }
    });
  });
}

export async function sendCode(username) {
  return new Promise((resolve, reject) => {
    const cognitoUser = getCognitoUser(username);

    if (!cognitoUser) {
      reject(new Error(`Could not find user: ${username}`));
      return;
    }

    cognitoUser.forgotPassword({
      onSuccess: (res) => {
        resolve(res);
      },
      onFailure: (err) => {
        reject(new Error(`Failed to send code: ${err.message}`));
      },
    });
  });
}

export async function forgotPassword(username, code, password) {
  return new Promise((resolve, reject) => {
    const cognitoUser = getCognitoUser(username);

    if (!cognitoUser) {
      reject(new Error(`Could not find user: ${username}`));
      return;
    }

    cognitoUser.confirmPassword(code, password, {
      onSuccess: () => {
        resolve("Password updated");
      },
      onFailure: (err) => {
        reject(new Error(`Failed to confirm password: ${err.message}`));
      },
    });
  });
}

export async function changePassword(oldPassword, newPassword) {
  return new Promise((resolve, reject) => {
    currentUser.changePassword(oldPassword, newPassword, (err, res) => {
      if (err) {
        reject(new Error(`Failed to change password: ${err.message}`));
      } else {
        resolve(res);
      }
    });
  });
}
