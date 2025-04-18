import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PostContent } from "@/types/postContent";
import { fetchPosts } from "@/lib/api/postContent";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function BlogPostsSection() {
  const [posts, setPosts] = useState<PostContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar dados do CMS
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Buscar dados da API do CMS
        const postsData = await fetchPosts();
        
        setPosts(postsData);
      } catch (error) {
        console.error("Erro ao carregar postagens:", error);
        setError("Não foi possível carregar as postagens. Por favor, tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Formatar data para exibição
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      return new Date(dateString).toLocaleDateString('pt-BR', options);
    } catch (error) {
      console.error("Erro ao formatar data:", error);
      return dateString; // Retorna a string original em caso de erro
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-2">ARTIGOS E DICAS</h2>
            <p className="text-gray-600 max-w-2xl">
              Conteúdo exclusivo sobre saúde mental, desenvolvimento pessoal e bem-estar emocional.
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              Ver todos os artigos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="h-[380px] animate-pulse">
                <div className="h-40 bg-gray-200 rounded-t-lg"></div>
                <CardContent className="p-5">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10 border rounded-lg bg-gray-50">
            <p className="text-gray-500">{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-10 border rounded-lg bg-gray-50">
            <p className="text-gray-500">Nenhum artigo disponível no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.coverImage || "/blog-placeholder.jpg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/blog-placeholder.jpg";
                    }}
                  />
                  {post.category && (
                    <Badge className="absolute top-3 right-3 bg-white text-gray-800">
                      {post.category}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-5 flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</p>
                  <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-5 pb-5 pt-0">
                  <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-gray-800 hover:underline flex items-center gap-1">
                    Ler mais
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-10 md:hidden">
          <Link to="/blog">
            <Button variant="outline" className="w-full sm:w-auto">
              Ver todos os artigos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 