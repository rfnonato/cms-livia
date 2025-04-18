
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-center">
              <Mail className="h-6 w-6 mx-auto mb-2" />
              Receba conteúdo exclusivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1"
              />
              <Button type="submit">
                Inscrever-se
              </Button>
            </form>
            <p className="text-sm text-center text-muted-foreground mt-4">
              Receba dicas, artigos e novidades sobre bem-estar e desenvolvimento pessoal.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
