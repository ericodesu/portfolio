'use client';

import React from 'react';

const BLUR_COEFFICIENT = 20;

const Mountains = () => {
    const [scrollY, setScrollY] = React.useState<number>(0);
    const [innerHeight, setInnerHeight] = React.useState<number>(0);

    React.useEffect(() => {
        addEventListener('scroll', () => {
            setScrollY(window.scrollY);
            setInnerHeight(window.innerHeight);
        });

        return () => {
            removeEventListener('scroll', () => {
                setScrollY(window.scrollY);
                setInnerHeight(window.innerHeight);
            });
        };
    }, [scrollY]);

    return (
        <div className='mountains --flex-column'>
            <svg
                viewBox='0 0 1440 420'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                    transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
                    filter: `blur(${((scrollY * 0.3) / innerHeight) * BLUR_COEFFICIENT}px)`,
                }}
            >
                <defs>
                    <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
                        <stop stopColor='rgba(67, 101, 90, 1)' offset='0%'></stop>
                        <stop stopColor='rgba(190, 193, 198, 1)' offset='100%'></stop>
                    </linearGradient>
                </defs>
                <path
                    fill='url(#sw-gradient-0)'
                    d='M0,168L60,147C120,126,240,84,360,105C480,126,600,210,720,217C840,224,960,154,1080,112C1200,70,1320,56,1440,77C1560,98,1680,154,1800,182C1920,210,2040,210,2160,175C2280,140,2400,70,2520,70C2640,70,2760,140,2880,147C3000,154,3120,98,3240,84C3360,70,3480,98,3600,119C3720,140,3840,154,3960,147C4080,140,4200,112,4320,91C4440,70,4560,56,4680,98C4800,140,4920,238,5040,252C5160,266,5280,196,5400,140C5520,84,5640,42,5760,28C5880,14,6000,28,6120,42C6240,56,6360,70,6480,126C6600,182,6720,280,6840,266C6960,252,7080,126,7200,119C7320,112,7440,224,7560,259C7680,294,7800,252,7920,231C8040,210,8160,210,8280,203C8400,196,8520,182,8580,175L8640,168L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z'
                ></path>
            </svg>
            <svg
                viewBox='0 0 1440 420'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                    transform: `translate3d(0, ${scrollY * 0.25}px, 0)`,
                    filter: `blur(${((scrollY * 0.22) / innerHeight) * BLUR_COEFFICIENT}px)`,
                }}
            >
                <defs>
                    <linearGradient id='sw-gradient-1' x1='0' x2='0' y1='1' y2='0'>
                        <stop stopColor='rgba(1, 56, 33, 1)' offset='0%'></stop>
                        <stop stopColor='rgba(82, 113, 113, 1)' offset='100%'></stop>
                    </linearGradient>
                </defs>
                <path
                    fill='url(#sw-gradient-1)'
                    d='M0,168L60,203C120,238,240,308,360,287C480,266,600,154,720,119C840,84,960,126,1080,147C1200,168,1320,168,1440,147C1560,126,1680,84,1800,91C1920,98,2040,154,2160,154C2280,154,2400,98,2520,119C2640,140,2760,238,2880,231C3000,224,3120,112,3240,91C3360,70,3480,140,3600,168C3720,196,3840,182,3960,182C4080,182,4200,196,4320,224C4440,252,4560,294,4680,315C4800,336,4920,336,5040,329C5160,322,5280,308,5400,315C5520,322,5640,350,5760,301C5880,252,6000,126,6120,84C6240,42,6360,84,6480,112C6600,140,6720,154,6840,140C6960,126,7080,84,7200,63C7320,42,7440,42,7560,35C7680,28,7800,14,7920,42C8040,70,8160,140,8280,168C8400,196,8520,182,8580,175L8640,168L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z'
                ></path>
            </svg>
        </div>
    );
};

export default Mountains;