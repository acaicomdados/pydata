# 📝 Guia de Atualização do Site PyData Pará

## 🍴 Primeiro Passo: Fork do Repositório

### 1. Fazer Fork
1. Acesse: https://github.com/acaicomdados/pydata
2. Clique em **Fork** (canto superior direito)
3. Selecione sua conta/organização
4. Aguarde a criação do fork

### 2. Clonar Localmente
```bash
git clone https://github.com/acaicomdados/pydata
cd pydata
npm ci --force
```

### 3. Configurar GitHub Pages
1. Vá em **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Aguarde primeiro deploy

---

## 🔄 Git Flow para Contribuições

### 1. Configurar Upstream (Uma vez)
```bash
# Adicionar repositório original como upstream
git remote add upstream https://github.com/acaicomdados/pydata.git
git remote -v  # verificar remotes
```

### 2. Workflow de Atualização
```bash
# 1. Criar branch para mudanças
git checkout -b feature/atualizar-keynotes

# 2. Fazer alterações nos arquivos
# (editar app/page.tsx, adicionar logos, etc.)

# 3. Commit das mudanças
git add .
git commit -m "feat: atualizar keynotes e patrocinadores"

# 4. Push da branch
git push origin feature/atualizar-keynotes
```

### 3. Criar Pull Request
1. Vá para seu fork no GitHub
2. Clique em **Compare & pull request**
3. Base: `acaicomdados/pydata` → `main`
4. Compare: `seu-usuario/pydata` → `feature/atualizar-keynotes`
5. Adicione título e descrição
6. Clique em **Create pull request**

### 4. Sincronizar com Upstream
```bash
# Buscar mudanças do repositório original
git fetch upstream

# Voltar para main e atualizar
git checkout main
git merge upstream/main

# Atualizar seu fork
git push origin main
```

---

## 🎯 Como Atualizar o Site

### 1. Estrutura de Arquivos
- **Página principal**: `app/page.tsx`
- **Dados do evento**: Objeto `events` na linha ~40
- **Cronograma**: Array `schedule` na linha ~120

### 2. Deploy Automático

**Para testes no seu fork:**
```bash
# Deploy direto (apenas para testes)
git add .
git commit -m "test: atualizar conteúdo"
git push origin main
```

**Para contribuições oficiais:**
- Use o Git Flow acima (branches + PR)
- Deploy oficial após merge no repositório principal
- Site oficial: `https://acaicomdados.github.io/pydata`

---

## 🎤 Atualizando Keynotes

### Localização: `app/page.tsx` → `events["2025"].keynotes`

```javascript
keynotes: [
  {
    name: "Nome do Palestrante",
    title: "Cargo/Título",
    company: "Empresa",
    talk: "Título da Palestra",
    time: "13:10 - 14:45",
    photo: "/caminho/para/foto.jpg",
    description: "Descrição do palestrante",
    linkedin: "https://linkedin.com/in/usuario",
    instagram: "https://instagram.com/usuario",
    twitter: "https://twitter.com/usuario",
  }
]
```

### Passos:
1. Substitua os dados placeholder
2. Adicione foto em `public/`
3. Atualize links das redes sociais

---

## 🏢 Atualizando Patrocinadores

### Localização: `app/page.tsx` → `events["2025"].sponsors`

```javascript
sponsors: {
  gold: [
    {
      name: "Nome da Empresa",
      logo: "/logos/empresa.png",
      website: "https://empresa.com",
    }
  ],
  silver: [...],
  bronze: [...],
  community: [...]
}
```

### Cotas Disponíveis:
- **Ouro** (R$ 400): Logo grande + benefícios premium
- **Prata** (R$ 250): Logo médio + lightning talks
- **Bronze** (R$ 150): Logo pequeno + menção
- **Comunidade** (Gratuito): Menção nas redes

### Passos:
1. Adicione logo em `public/logos/`
2. Insira dados na cota correspondente
3. Remova comentários `//` para ativar

---

## ⏰ Atualizando Cronograma

### Localização: `app/page.tsx` → `schedule` array

```javascript
{
  time: "13h00 – 13h05",
  title: "Título da Atividade",
  speaker: "Nome do Palestrante", // opcional
  type: "keynote" | "talk" | "lightning" | "break" | "ceremony",
}
```

### Tipos de Atividade:
- **keynote**: Palestras principais (ícone estrela)
- **talk**: Palestras técnicas (ícone microfone)
- **lightning**: Palestras relâmpago (ícone raio)
- **break**: Intervalos (ícone relógio)
- **ceremony**: Cerimônias (ícone pessoas)

### Passos:
1. Atualize horários conforme necessário
2. Substitua "A definir" pelos nomes confirmados
3. Ajuste tipos para cores corretas

---

## 🚀 Comandos Úteis

```bash
# Instalar as dependências
npm ci --force

# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Verificar build
npm run start
```

---

## 📋 Checklist de Atualização

### Antes do Evento:
- [ ] Confirmar keynotes e palestrantes
- [ ] Atualizar logos dos patrocinadores
- [ ] Definir local do evento
- [ ] Ajustar cronograma final
- [ ] Testar todos os links

### Durante o Evento:
- [ ] Postar fotos em `events["2025"].photos`
- [ ] Atualizar status para "completed"

### Após o Evento:
- [ ] Adicionar próximo evento
- [ ] Arquivar evento atual
- [ ] Atualizar dropdown de eventos anteriores

---

## 🆘 Suporte

**Contato**: pydatapara@gmail.com  
**Repositório**: https://github.com/acaicomdados/pydata