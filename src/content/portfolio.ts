export const portfolio = {
  metrics: [{ value: "300+", label: "agentes de IA" }, { value: "~3K", label: "documentos / mês" }, { value: "20+", label: "certificações em tecnologia" }, { value: "04", label: "evoluções profissionais" }],
  projects: [
    { title: "Ecossistema Inteligente de Operações", kind: "IA corporativa", description: "Um ecossistema de agentes especializados e fluxos automatizados de documentos.", stack: ["LLMs", "Python", "APIs"] },
    { title: "DferrStore", kind: "Plataforma de comércio", description: "E-commerce end-to-end que conecta experiência de compra, pagamentos via Mercado Pago e cálculo de frete pelos Correios.", stack: ["Next.js", "Pagamentos", "APIs de frete"] },
    { title: "Inteligência de Jurisprudência", kind: "Sistema de validação", description: "Validação de jurisprudência em tempo real com análise por LLM, busca, fontes judiciais e cruzamento de informações para reduzir riscos de alucinação.", stack: ["LLMs", "Busca web", "Score de confiança"] },
    { title: "Identificador de Fraude Documental", kind: "Inteligência documental", description: "Aplicação voltada à análise de documentos e identificação de sinais que exigem validação adicional no fluxo operacional.", stack: ["IA", "Processamento documental", "Validação"] },
  ],
  experiences: [
    { period: "Mai 2026 — Atual", role: "Desenvolvedor Júnior", description: "Desenvolvimento full stack de produtos internos, com Next.js, TypeScript, Python, APIs, aplicações de IA, automações e evolução de sistemas em produção." },
    { period: "Ago 2025 — Mai 2026", role: "Assistente de Desenvolvimento", description: "Desenvolvimento web, APIs e automações, ampliando a atuação para soluções baseadas em IA e aplicações integradas." },
    { period: "Dez 2024 — Ago 2025", role: "Estagiário em Desenvolvimento", description: "Sistemas web, automações em Python, RPA e integrações para operações internas." },
    { period: "Jul 2024 — Dez 2024", role: "Jovem Aprendiz em Suporte de TI", description: "Suporte de infraestrutura, troubleshooting, atendimento a usuários e primeira experiência em ambiente corporativo de tecnologia." },
  ],
  skills: [
    { name: "Engenharia de IA", items: ["APIs de LLM", "OpenAI", "Agentes de IA", "RAG", "Saídas estruturadas", "Orquestração de agentes"] },
    { name: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Interfaces corporativas"] },
    { name: "Backend e Dados", items: ["Python", "FastAPI", "Flask", "APIs REST", "Pandas", "Processamento assíncrono"] },
    { name: "Automação e Infraestrutura", items: ["Playwright", "Selenium", "RPA", "Docker", "Redis", "CI/CD"] },
  ],
  principles: [
    { title: "Construir para produção", description: "Protótipo é ponto de partida, não linha de chegada." }, { title: "Automatizar o repetitivo", description: "Trabalho repetível merece um fluxo confiável." }, { title: "IA precisa de validação", description: "Contexto, guardrails e observabilidade acompanham o modelo." }, { title: "Arquitetura importa", description: "A segunda versão deve ser mais sustentável do que a primeira." }, { title: "Produto, não só funcionalidade", description: "O objetivo é o fluxo resolvido, não uma implementação isolada." },
  ],
  contacts: { email: "elisonfelipe16@gmail.com", github: "https://github.com/ellinfeh", linkedin: "https://www.linkedin.com/in/elison-felipe-72a6a7261/" },
} as const;
