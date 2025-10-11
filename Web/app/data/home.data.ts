import { v4 as uuidv4 } from 'uuid';
export const HOME_DATA = {
    hero: {
        section: 'Hero',
        title: [
            {
                _key: uuidv4(),
                en: 'Treat yourself to digital diligence',
                fr: 'Offrez-vous la diligence digitale'
            }
        ],
        subtitle: {
            en: 'Custom websites & applications designed for performance, clarity, and conversion',
            fr: 'Sites web & applications sur-mesure, pensés pour la performance, la clarté et la conversion'
        },
        ctaA: {
            text: {
                en: 'Book a strategy call',
                fr: 'Réserver un appel stratégique'
            },
            icon: "lucide:calendar",
            link: "/contact"
        },
        ctaB: {
            text: {
                en: 'Apply my project',
                fr: 'Soumettre mon projet'
            },
            icon: "lucide:arrow-right",
            link: "/contact"
        },
        link: '/videos/hero.mp4',
    },
    strategy: {
        section: 'Strategy',
        title: [
            {
                _key: uuidv4(),
                en: 'Diligency n’est pas une simple agence. C’est une méthode.',
                fr: 'Diligency is not just an agency. It’s a method.'
            }
        ],
        subtitle: {
            en: 'We transform your ideas into robust, elegant, and strategic digital solutions. Our approach is based on a deep understanding of your goals and the rigorous implementation of solutions tailored to your challenges. That’s what digital diligence is all about.',
            fr: 'Nous transformons vos idées en solutions digitales robustes, élégantes et stratégiques. Notre approche repose sur la compréhension profonde de vos objectifs, et la mise en œuvre rigoureuse de     solutions taillées pour vos enjeux. C’est ça, la diligence digitale.'
        }
    }
}