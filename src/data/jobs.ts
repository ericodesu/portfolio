import { Job } from '../utils/interfaces';

export default [
    {
        startDate: new Date('2021-07-15'),
        company: 'Prodemge',
        positions: ['Developer'],
        description: {
            'en-us':
                'Designed government fast and secure applications, managed document processing and implemented UI based on client-established patterns.',
            'ja-jp':
                '政府の高速で安全なアプリケーションを設計し、文書処理を管理し、クライアントが確立したパターンに基づいてUIを実装しました。',
            'pt-br':
                'Projetei aplicativos seguros e performáticos para o governo e implementei processamento de documentos, ciriei UIs com base em padrões estabelecidos pelo cliente.',
        },
        technologies: ['Springboot', 'Java', 'Angular', 'Typescript', 'Mainframe'],
    },
    {
        startDate: new Date('2021-04-15'),
        endDate: new Date('2021-07-15'),
        company: 'Kukac',
        positions: ['Developer Intern'],
        description: {
            'en-us':
                'Enhanced IBM Watson powered applications, focusing on chatbot development, optimized Watson Assistant algorithms and implemented DevOps.',
            'ja-jp':
                'IBM Watson搭載アプリケーションの強化 チャットボットス開発、Watson Assistantアルゴリズムの最適化、DevOpsの導入に注力。',
            'pt-br':
                'Aprimorei aplicativos com tecnologia IBM Watson com foco no desenvolvimento de chatbots, implementei e otimizei algoritmos do Watson Assistant em conjunto DevOps.',
        },
        technologies: ['Node JS', 'Angular', 'Typescript', 'IBM Watson', 'Docker'],
    },
] as Job[];