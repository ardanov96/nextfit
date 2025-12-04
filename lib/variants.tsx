import { Variants } from 'framer-motion';

export const fadeIn = (direction: string, delay: number): Variants => {
    return {
        hidden: {
            y: direction === 'up' ? -40 : direction === 'down' ? -40 : 0,
            opacity: 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            transition: {
                type: 'tween',
                duration: 1.4,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.4,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}

export const statsContainerVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // sesuaikan
            duration: 0.5,       // sesuaikan
            ease: 'linear',      // UBAH DARI TIPE STRING UMUM KE LITERAL STRING
        },
    },
};