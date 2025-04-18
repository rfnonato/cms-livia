# Componentes UI do ContentMinimal CMS

Este documento detalha os componentes de interface de usuário disponíveis no ContentMinimal CMS, baseados na biblioteca shadcn/ui com Tailwind CSS.

## Índice

- [Componentes de Formulário](#componentes-de-formulário)
- [Componentes de Layout](#componentes-de-layout)
- [Componentes de Feedback](#componentes-de-feedback)
- [Componentes de Navegação](#componentes-de-navegação)
- [Componentes de Visualização de Dados](#componentes-de-visualização-de-dados)
- [Utilitários UI](#utilitários-ui)
- [Como Usar](#como-usar)

## Componentes de Formulário

### Button

O componente Button possui diversas variantes e tamanhos, permitindo flexibilidade em diferentes contextos.

**Variantes:**
- `default`: Botão principal com cor primária
- `destructive`: Botão para ações destrutivas (vermelho)
- `outline`: Botão com contorno
- `secondary`: Botão secundário
- `ghost`: Botão sem fundo
- `link`: Botão em estilo de link

**Tamanhos:**
- `default`: Tamanho padrão
- `sm`: Pequeno
- `lg`: Grande
- `icon`: Para botões com apenas ícone

**Exemplo:**
```tsx
<Button variant="default" size="default">
  Clique aqui
</Button>

<Button variant="destructive" size="sm">
  Excluir
</Button>

<Button variant="outline" size="icon">
  <Plus className="h-4 w-4" />
</Button>
```

### Input

Campo de entrada de texto básico.

**Exemplo:**
```tsx
<Input type="text" placeholder="Digite aqui..." />
<Input type="email" placeholder="Email" disabled />
```

### Textarea

Campo para entrada de texto multilinha.

**Exemplo:**
```tsx
<Textarea
  placeholder="Escreva sua descrição aqui..."
  rows={5}
/>
```

### Select

Componente para seleção de opções.

**Exemplo:**
```tsx
<Select>
  <SelectTrigger id="category">
    <SelectValue placeholder="Selecione uma categoria" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="tutorials">Tutoriais</SelectItem>
    <SelectItem value="news">Notícias</SelectItem>
  </SelectContent>
</Select>
```

### Checkbox

Caixa de seleção para opções booleanas.

**Exemplo:**
```tsx
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Aceitar termos</Label>
</div>
```

### Switch

Alternador de estado (toggle).

**Exemplo:**
```tsx
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Modo avião</Label>
</div>
```

## Componentes de Layout

### Card

Container para agrupar informações relacionadas.

**Subcomponentes:**
- `Card`: Container principal
- `CardHeader`: Cabeçalho do card
- `CardTitle`: Título do card
- `CardDescription`: Descrição do card
- `CardContent`: Conteúdo principal
- `CardFooter`: Rodapé do card

**Exemplo:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Configurações da Conta</CardTitle>
    <CardDescription>Gerencie suas preferências</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Conteúdo aqui */}
  </CardContent>
  <CardFooter>
    <Button>Salvar Alterações</Button>
  </CardFooter>
</Card>
```

### Dialog

Modal para interações focadas.

**Subcomponentes:**
- `Dialog`: Container principal
- `DialogTrigger`: Elemento que abre o modal
- `DialogContent`: Conteúdo do modal
- `DialogHeader`: Cabeçalho do modal
- `DialogTitle`: Título do modal
- `DialogDescription`: Descrição do modal
- `DialogFooter`: Rodapé do modal

**Exemplo:**
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Adicionar Nova Mídia</DialogTitle>
      <DialogDescription>Upload de arquivo ou link</DialogDescription>
    </DialogHeader>
    {/* Conteúdo do modal */}
    <DialogFooter>
      <Button type="submit">Adicionar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Separator

Linha horizontal ou vertical para separar conteúdo.

**Exemplo:**
```tsx
<div className="space-y-4">
  <div>Seção 1</div>
  <Separator />
  <div>Seção 2</div>
</div>
```

## Componentes de Feedback

### Toast

Notificações temporárias.

**Exemplo:**
```tsx
// No componente
import { useToast } from "@/components/ui/toast";

function MyComponent() {
  const { toast } = useToast();
  
  const handleClick = () => {
    toast({
      title: "Sucesso!",
      description: "Ação realizada com sucesso."
    });
  };
  
  return <Button onClick={handleClick}>Mostrar Toast</Button>;
}

// No App.tsx
<ToastProvider />
```

### Badge

Indicador visual para status, categorias, etc.

**Variantes:**
- `default`: Estilo padrão
- `secondary`: Estilo secundário
- `outline`: Estilo com contorno
- `destructive`: Estilo destrutivo (vermelho)

**Exemplo:**
```tsx
<Badge>Novo</Badge>
<Badge variant="outline">Em Breve</Badge>
<Badge variant="destructive">Erro</Badge>
```

## Componentes de Navegação

### Tabs

Navegação por abas.

**Subcomponentes:**
- `Tabs`: Container principal
- `TabsList`: Lista de abas
- `TabsTrigger`: Botão da aba
- `TabsContent`: Conteúdo da aba

**Exemplo:**
```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Conta</TabsTrigger>
    <TabsTrigger value="password">Senha</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Conteúdo da aba Conta</TabsContent>
  <TabsContent value="password">Conteúdo da aba Senha</TabsContent>
</Tabs>
```

### DropdownMenu

Menu suspenso para ações contextuais.

**Subcomponentes:**
- `DropdownMenu`: Container principal
- `DropdownMenuTrigger`: Elemento que abre o menu
- `DropdownMenuContent`: Conteúdo do menu
- `DropdownMenuItem`: Item do menu
- `DropdownMenuLabel`: Rótulo para itens
- `DropdownMenuSeparator`: Separador entre itens

**Exemplo:**
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <MoreHorizontal className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Ações</DropdownMenuLabel>
    <DropdownMenuItem>Editar</DropdownMenuItem>
    <DropdownMenuItem>Duplicar</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Componentes de Visualização de Dados

### Table

Tabela para visualização de dados estruturados.

**Subcomponentes:**
- `Table`: Container principal
- `TableHeader`: Cabeçalho da tabela
- `TableBody`: Corpo da tabela
- `TableFooter`: Rodapé da tabela
- `TableRow`: Linha da tabela
- `TableHead`: Célula de cabeçalho
- `TableCell`: Célula da tabela

**Exemplo:**
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Título</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Data</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Meu primeiro post</TableCell>
      <TableCell>Publicado</TableCell>
      <TableCell>01/01/2023</TableCell>
    </TableRow>
    {/* Mais linhas */}
  </TableBody>
</Table>
```

### Avatar

Representação visual de usuário ou entidade.

**Subcomponentes:**
- `Avatar`: Container principal
- `AvatarImage`: Imagem do avatar
- `AvatarFallback`: Fallback quando a imagem não carrega

**Exemplo:**
```tsx
<Avatar>
  <AvatarImage src="/avatar.png" alt="Usuário" />
  <AvatarFallback>UI</AvatarFallback>
</Avatar>
```

## Utilitários UI

### Label

Rótulo para campos de formulário.

**Exemplo:**
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>
```

### Tooltip

Dica de informação ao passar o mouse.

**Subcomponentes:**
- `Tooltip`: Container principal
- `TooltipTrigger`: Elemento que ativa a dica
- `TooltipContent`: Conteúdo da dica

**Exemplo:**
```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Info className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Adicione uma mídia ao seu post</p>
  </TooltipContent>
</Tooltip>
```

## Como Usar

Para utilizar esses componentes no projeto, importe-os do diretório de componentes:

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <CardHeader>Formulário de Exemplo</CardHeader>
      <CardContent>
        <Input placeholder="Nome" className="mb-4" />
        <Button>Enviar</Button>
      </CardContent>
    </Card>
  );
}
```

### Estilização Adicional

Todos os componentes podem ser estilizados adicionalmente usando classes do Tailwind ou a função utilitária `cn()`:

```tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function CustomButton({ className, ...props }) {
  return (
    <Button 
      className={cn("rounded-full", className)} 
      {...props} 
    />
  );
}
```

### Acessibilidade

Os componentes são construídos em cima da biblioteca Radix UI, que fornece recursos avançados de acessibilidade. Ao usar esses componentes, você já obtém:

- Suporte a navegação por teclado
- ARIA labels apropriados
- Foco gerenciado para modais
- Suporte a leitores de tela 