// src/app/(home)/page.tsx


import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Domov | ZoškaSnap" };

export default async function HomePage() {
  // Fetch session on the server
  const session = await getServerSession(authOptions);

  if (session) {
    // Redirect authenticated users to the feed page
    redirect("/prispevok");
  }

  // Show the unauthenticated home view for non-authenticated users
  return (
    <Container>
      <Typography variant='h3'> Domovská stránka - NEprihlásený user </Typography>
      <Typography variant='h6'> Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil. </Typography>
    </Container>
  );
}

















