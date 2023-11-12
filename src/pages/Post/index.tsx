import React from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// Types
import { HttpStatusCode } from '../../utils/enums';

// Context
import { LangContext } from '../../context';

// Components
import PostPageLoader from './index.loader';
import { StatusPage } from '..';

const PostPage = () => {
    const { id } = useParams();

    const [selectedLang, _] = React.useContext(LangContext);

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [postData, setPostData] = React.useState<string>('');

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (!id) {
            setIsLoading(false);

            return;
        }

        setIsLoading(true);

        fetch(
            `${
                process.env.REACT_APP_GITHUB_CDN ?? ''
            }/portfolio/master/.github/posts/${id.trim()}/${
                selectedLang['LANGUAGE_LOCALE_URL']
            }.md`,
        )
            .then((res) => res.text())
            .then((data) => {
                setIsLoading(false);

                if (data === '404: Not Found') {
                    setPostData('');

                    return;
                }

                setPostData(data);
            })
            .catch(() => {
                setPostData('');
                setIsLoading(false);
            });
    }, [selectedLang]);

    if (isLoading) {
        return <PostPageLoader />;
    }

    if (!id || !postData) {
        return <StatusPage httpStatusCode={HttpStatusCode.NOT_FOUND} />;
    }

    return (
        <main className='post --page --flex-column'>
            <section className='post__banner'>
                <div className='post__banner__wrapper'>
                    <div
                        className='post__banner__image'
                        style={{
                            backgroundImage: `url("${
                                process.env.REACT_APP_GITHUB_CDN ?? ''
                            }/portfolio/master/.github/posts/${id.trim()}/thumbnail.png")`,
                        }}
                    />
                </div>
            </section>
            <section className='post__content --flex-column'>
                <Markdown className='markdown-body --flex-column' rehypePlugins={[rehypeRaw]}>
                    {postData}
                </Markdown>
                <svg
                    className='post__content__footer'
                    viewBox='0 0 1440 420'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <defs>
                        <linearGradient id='sw-gradient' x1='0' x2='0' y1='1' y2='0'>
                            <stop stopColor='rgba(52, 52, 52, 1)' offset='0%'></stop>
                            <stop stopColor='rgba(71, 69, 84, 1)' offset='100%'></stop>
                        </linearGradient>
                    </defs>
                    <path
                        fill='url(#sw-gradient)'
                        d='M0,336L60,315C120,294,240,252,360,196C480,140,600,70,720,91C840,112,960,224,1080,231C1200,238,1320,140,1440,147C1560,154,1680,266,1800,273C1920,280,2040,182,2160,161C2280,140,2400,196,2520,224C2640,252,2760,252,2880,259C3000,266,3120,280,3240,238C3360,196,3480,98,3600,56C3720,14,3840,28,3960,49C4080,70,4200,98,4320,98C4440,98,4560,70,4680,112C4800,154,4920,266,5040,266C5160,266,5280,154,5400,91C5520,28,5640,14,5760,42C5880,70,6000,140,6120,175C6240,210,6360,210,6480,231C6600,252,6720,294,6840,308C6960,322,7080,308,7200,252C7320,196,7440,98,7560,84C7680,70,7800,140,7920,168C8040,196,8160,182,8280,182C8400,182,8520,196,8580,203L8640,210L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z'
                    ></path>
                </svg>
            </section>
        </main>
    );
};

export default PostPage;