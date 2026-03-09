import LoginFormClient from "@/components/LoginFormClient";

interface LoginPageProps {
  searchParams: Promise<{ redirect?: string; action?: string; club?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <LoginFormClient
      redirect={params.redirect || "/profile"}
      action={params.action}
      clubId={params.club}
    />
  );
}
