# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o Portfólio Gil Lemos! Este documento fornece diretrizes para contribuições.

## 📋 Como Contribuir

### 🐛 Reportando Bugs

1. **Verifique se o bug já foi reportado** nos [Issues](https://github.com/seu-usuario/gillemosai-portfolio/issues)
2. **Crie um novo issue** com:
   - Título claro e descritivo
   - Descrição detalhada do problema
   - Passos para reproduzir
   - Screenshots (se aplicável)
   - Informações do ambiente (browser, OS, etc.)

### 💡 Sugerindo Melhorias

1. **Verifique se a sugestão já existe** nos Issues
2. **Crie um novo issue** com:
   - Título claro começando com "Feature Request:"
   - Descrição detalhada da funcionalidade
   - Justificativa para a melhoria
   - Mockups ou exemplos (se aplicável)

### 🔧 Contribuindo com Código

#### Configuração do Ambiente

1. **Fork o repositório**
2. **Clone seu fork**
```bash
git clone https://github.com/seu-usuario/gillemosai-portfolio.git
cd gillemosai-portfolio
```

3. **Instale dependências**
```bash
npm install
```

4. **Crie uma branch para sua feature**
```bash
git checkout -b feature/nome-da-feature
```

#### Padrões de Código

- **JavaScript/React**: Siga as configurações do ESLint
- **CSS**: Use Tailwind CSS sempre que possível
- **Commits**: Use mensagens claras e descritivas
- **Componentes**: Mantenha componentes pequenos e reutilizáveis

#### Estrutura de Commits

```
tipo(escopo): descrição

[corpo opcional]

[rodapé opcional]
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, ponto e vírgula, etc.
- `refactor`: Refatoração de código
- `test`: Adição de testes
- `chore`: Tarefas de build, configuração, etc.

**Exemplos:**
```
feat(portfolio): adicionar nova seção de certificações
fix(navigation): corrigir scroll suave no mobile
docs(readme): atualizar instruções de instalação
```

#### Pull Request

1. **Certifique-se que o código funciona**
```bash
npm run dev
npm run build
```

2. **Execute os lints**
```bash
npm run lint
```

3. **Commit suas mudanças**
```bash
git add .
git commit -m "feat: adicionar nova funcionalidade"
```

4. **Push para sua branch**
```bash
git push origin feature/nome-da-feature
```

5. **Abra um Pull Request** com:
   - Título claro e descritivo
   - Descrição detalhada das mudanças
   - Screenshots (se aplicável)
   - Referência aos issues relacionados

## 🎨 Diretrizes de Design

### Cores
- **Primária**: Azul (#3B82F6)
- **Secundária**: Roxo (#8B5CF6)
- **Accent**: Ciano (#06B6D4)
- **Background**: Gradiente escuro

### Tipografia
- **Títulos**: Font weight bold
- **Corpo**: Font weight normal
- **Destaque**: Font weight medium

### Componentes
- Use componentes do Shadcn/ui quando possível
- Mantenha consistência visual
- Implemente animações suaves com Framer Motion

## 📱 Responsividade

- **Mobile First**: Desenvolva primeiro para mobile
- **Breakpoints**: Use os padrões do Tailwind CSS
- **Teste em múltiplos dispositivos**

## ⚡ Performance

- **Otimize imagens**: Use formatos modernos (WebP)
- **Lazy loading**: Para imagens não críticas
- **Code splitting**: Mantenha bundles pequenos
- **Lighthouse Score**: Mantenha acima de 90

## 🧪 Testes

- Teste em diferentes navegadores
- Verifique responsividade
- Teste performance com Lighthouse
- Valide acessibilidade

## 📝 Documentação

- Atualize o README.md se necessário
- Documente novas funcionalidades
- Mantenha comentários no código quando necessário

## ❓ Dúvidas

Se tiver dúvidas sobre como contribuir:

1. Verifique a documentação existente
2. Procure em issues fechados
3. Abra um novo issue com a tag "question"
4. Entre em contato: gillemos@gmail.com

## 🙏 Reconhecimento

Todos os contribuidores serão reconhecidos no README.md do projeto.

---

**Obrigado por contribuir! 🚀**
