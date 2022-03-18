import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signInWithGooglePopup = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, provider);
};
