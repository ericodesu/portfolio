// Types
import { Project } from '../utils/interfaces';

export default [
    {
        name: 'Karikariyaki',
        repo: 'pepeien/karikariyaki',
        description: {
            'en-us': 'Order status portal for internal fast food management system',
            'ja-jp': 'ファーストフード社内管理システムポータル',
            'pt-br': 'Sistema de gerenciamento interno para portal de pedidos',
        },
        technologies: ['Angular JS', 'Typescript', 'Node JS', 'Socket.IO', 'Mongo DB'],
    },
    {
        name: 'Namah',
        repo: 'pepeien/namah',
        description: {
            'en-us': 'Blog/E-commerce mock app',
            'ja-jp': 'ブログ/Eコマースモックアプリ',
            'pt-br': 'Simulador de Blog/E-commerce',
        },
        technologies: ['React JS', 'Typescript', 'Node JS', 'Mongo DB'],
    },
    {
        name: 'Portfolio API',
        repo: 'pepeien/portfolio-api',
        description: {
            'en-us': 'Centralized micro-services provider',
            'ja-jp': '集中型マイクロサービス・プロバイダー',
            'pt-br': 'Provedor centralizado de micro serviços',
        },
        technologies: ['Angular JS', 'Typescript', 'Node js', 'NGINX', 'Docker'],
    },
] as Project[];