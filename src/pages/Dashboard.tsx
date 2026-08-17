import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { BookOpen, LogOut } from "lucide-react";
import { useNavigate, Link } from "react-router";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-background px-5 py-10 text-ink">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-ink/60">
              Mon espace ForceMaman
            </p>
            <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">
              Bonjour{user?.name ? `, ${user.name}` : " et bienvenue"} 🤍
            </h1>
          </div>
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer gap-2 self-start border-2 border-ink text-ink"
            onClick={handleSignOut}
          >
            <LogOut className="size-4" />
            Se déconnecter
          </Button>
        </header>

        <Card className="border-2 border-ink bg-card shadow-bold rounded-3xl">
          <CardHeader>
            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-secondary text-primary border-2 border-ink">
              <BookOpen className="size-5" />
            </div>
            <CardTitle className="font-display text-2xl text-ink">
              Mes guides
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-ink/70">
            Tes guides achetés apparaîtront ici. Tu pourras les télécharger à
            nouveau à tout moment depuis ton espace personnel.
          </CardContent>
        </Card>

        <Card className="border-2 border-ink bg-secondary/40 shadow-bold rounded-3xl">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-ink">
              Découvrir les guides
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink/70">
              Trois guides bienveillants pour t'accompagner dans le post-partum,
              ou le Pack Complet avec 23% de réduction.
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground border-2 border-ink shadow-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <Link to="/guides">Voir la boutique</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
