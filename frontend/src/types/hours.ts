export interface Subcategory {
  id: string;
  title: string;
  description: string;
  maxHours: number;
  calculateHours: (inputHours: number) => number;
}

export interface Category {
  id: string;
  title: string;
  subcategories: Subcategory[];
}

export interface UploadedFile {
  id: string;
  file: File;
  subcategoryId: string;
  categoryId: string;
  inputHours: number;
  calculatedHours: number;
  name: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'grupo1',
    title: 'Grupo I – Atividades de iniciação à docência e pesquisa',
    subcategories: [
      {
        id: 'monitoria',
        title: 'Exercício de monitoria',
        description: '100 horas-aula',
        maxHours: 100,
        calculateHours: (input) => Math.min(input, 100)
      },
      {
        id: 'pesquisa',
        title: 'Participação em pesquisas e projetos institucionais',
        description: '100 horas-aula (até 50 h/semestre por atividade)',
        maxHours: 100,
        calculateHours: (input) => Math.min(input, 100)
      }
    ]
  },
  {
    id: 'grupo2',
    title: 'Grupo II – Congressos, seminários, conferências e outras atividades assistidas',
    subcategories: [
      {
        id: 'congressos',
        title: 'Congressos, Seminários, conferências (+ 3h)',
        description: 'Serão computados 50% da carga horária total do evento',
        maxHours: 50,
        calculateHours: (input) => Math.min(input * 0.5, 50)
      },
      {
        id: 'palestras',
        title: 'Seminários, conferências e palestras (- 3h)',
        description: '01 hora-aula por evento',
        maxHours: 50,
        calculateHours: (input) => Math.min(input, 50)
      },
      {
        id: 'defesas',
        title: 'Defesas de dissertação/tese assistidas',
        description: '02 horas-aula por defesa',
        maxHours: 10,
        calculateHours: (input) => Math.min(input * 2, 10)
      },
      {
        id: 'monografias',
        title: 'Apresentação de monografias/TCC assistidas',
        description: '01 hora por apresentação',
        maxHours: 10,
        calculateHours: (input) => Math.min(input, 10)
      },
      {
        id: 'visitas',
        title: 'Visitas técnicas coordenadas',
        description: 'Até 05 horas-aula por visita',
        maxHours: 30,
        calculateHours: (input) => Math.min(input * 5, 30)
      }
    ]
  },
  {
    id: 'grupo3',
    title: 'Grupo III – Publicações e apresentação de trabalhos em eventos científicos',
    subcategories: [
      {
        id: 'artigos-referee',
        title: 'Artigos em revistas com referee',
        description: '40 horas-aula por artigo, 20 horas-aula por aluno',
        maxHours: 120,
        calculateHours: (input) => Math.min(input * 20, 120)
      },
      {
        id: 'artigos-sem-referee',
        title: 'Artigos em revistas sem referee',
        description: 'Até 20 horas-aula por artigo, 20 horas-aula por aluno',
        maxHours: 100,
        calculateHours: (input) => Math.min(input * 20, 100)
      },
      {
        id: 'apresentacoes',
        title: 'Apresentação de trabalhos em eventos',
        description: '30 pontos por trabalho, 30 horas-aula cada um',
        maxHours: 120,
        calculateHours: (input) => Math.min(input * 30, 120)
      },
      {
        id: 'concursos',
        title: 'Participação em concursos, exposições e mostras',
        description: '10 horas-aula por participação',
        maxHours: 50,
        calculateHours: (input) => Math.min(input * 10, 50)
      }
    ]
  },
  {
    id: 'grupo4',
    title: 'Grupo IV – Vivência profissional complementar',
    subcategories: [
      {
        id: 'estagio-nao-curricular',
        title: 'Estágio não curricular',
        description: '40 horas-aula, 20h/semanais por mínimo 4 meses',
        maxHours: 80,
        calculateHours: (input) => Math.min(input, 80)
      },
      {
        id: 'empresa-junior',
        title: 'Estágio em Empresa Júnior/Incubadora',
        description: 'Até 40 horas-aula, 20h/semanais por mínimo 4 meses',
        maxHours: 80,
        calculateHours: (input) => Math.min(input, 80)
      },
      {
        id: 'projetos-sociais',
        title: 'Participação em projetos sociais',
        description: 'Até 30 horas-aula por semestre de participação',
        maxHours: 60,
        calculateHours: (input) => Math.min(input * 30, 60)
      },
      {
        id: 'atividade-profissional',
        title: 'Atividade profissional específica na área',
        description: 'Até 40 horas-aula, mínimo de 4 meses',
        maxHours: 80,
        calculateHours: (input) => Math.min(input, 80)
      },
      {
        id: 'representacao-estudantil',
        title: 'Participação em entidade de representação estudantil',
        description: '10 horas-aula por período mínimo de 6 meses',
        maxHours: 40,
        calculateHours: (input) => Math.min(input * 10, 40)
      },
      {
        id: 'outras-vivencias',
        title: 'Outras atividades de vivência profissional',
        description: 'A critério da Diretoria Acadêmica',
        maxHours: 80,
        calculateHours: (input) => Math.min(input, 80)
      }
    ]
  },
  {
    id: 'grupo5',
    title: 'Grupo V – Cursos de formação complementar',
    subcategories: [
      {
        id: 'cursos-ufsc',
        title: 'Cursos UFSC na área do curso',
        description: 'Serão computados 80% da carga horária até 50 horas-aula',
        maxHours: 80,
        calculateHours: (input) => Math.min(input * 0.8, 80)
      },
      {
        id: 'cursos-externos-area',
        title: 'Cursos externos na área do curso',
        description: 'Serão computados até 50% da carga horária total',
        maxHours: 80,
        calculateHours: (input) => Math.min(input * 0.5, 80)
      },
      {
        id: 'cursos-externos-outras',
        title: 'Cursos externos fora da área',
        description: 'Serão computados até 30% da carga horária total',
        maxHours: 80,
        calculateHours: (input) => Math.min(input * 0.3, 80)
      }
    ]
  }
];