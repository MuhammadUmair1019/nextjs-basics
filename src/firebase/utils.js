const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");
const { doc, getDoc, setDoc } = require("firebase/firestore");
const { firebaseDb } = require("./init");

export const firebaseLogin = async ({ email, password }) => {
  try {
    const auth = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return auth;
  } catch (error) {
    return { error: "invalid Username or password" };
  }
};

export const firebaseGetUserInfoFromDb = async (id) => {
  try {
    const docRef = doc(firebaseDb, "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    console.error(error);
  }
};

export const firebaseRegister = async ({ username, email, password }) => {
  try {
    const userInfos = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    ).then(async (userCredential) => {
      const user = userCredential.user;
      const displayName = username || user.email.split("@")[0];
      const userInfoFromDb = await firebaseGetUserInfoFromDb(user.uid);

      if (!userInfoFromDb) {
        const infos = {
          displayName: username,
          email: user.email,
          uid: user.uid,
          createdAt: serverTimestamp(),
        };
        await setDoc(doc(firebaseDb, "users", user.uid), infos);
        return {
          name: `${displayName}`,
          uid: user.uid,
          email: user.email,
          accessToken: user.accessToken,
        };
      }
    });
    return { ...userInfos };
  } catch (error) {
    const errorCode = error?.code;
    if (errorCode === "auth/weak-password") {
      return { error: "Password should be at least 6 characters" };
    } else {
      return { error: error };
    }
  }
};

export const firebaseLogout = async () => {
  await firebaseAuth.signOut();
};
