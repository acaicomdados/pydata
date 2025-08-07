# 📝 Guia de Atualização do Site PyData Pará

## 🎯 Como Atualizar o Site

### 1. Estrutura de Arquivos
- **Página principal**: `app/page.tsx`
- **Dados do evento**: Objeto `events` na linha ~40
- **Cronograma**: Array `schedule` na linha ~120

### 2. Deploy Automático
- Faça push para branch `main`
- GitHub Actions fará deploy automático
- Site disponível em: `https://username.github.io/pydata`

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