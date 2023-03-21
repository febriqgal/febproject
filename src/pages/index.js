import Layout from "@/components/layout";
import { auth } from "@/db/firebase";
import { Button } from "@nextui-org/react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import Styles from "../styles/Home.module.css";
export default function Home() {
  const user = auth.currentUser;
  const route = useRouter();
  return (
    <Layout>
      <main className={Styles.center}>
        <h1>{user?.email}</h1>
        {user ? (
          <Button
            onPress={async () => {
              await signOut(auth);
              route.replace("/");
            }}
            className="bg-sky-900"
          >
            Keluar
          </Button>
        ) : (
          <Button
            onPress={async () => {
              route.push("/auth/signIn");
            }}
            className="bg-sky-900"
          >
            Login
          </Button>
        )}
      </main>
    </Layout>
  );
}
