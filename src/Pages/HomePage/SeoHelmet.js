import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async'


export default function SeoHelmet({ Api }) {

    const [titleseo, setTitleSeo] = useState("");
    const [descseo, setDescseo] = useState("");
    const [keywordseo, setKeywordSeo] = useState("");

    useEffect(() => {
        fetch(`${Api}/seo/showseo/1`)
            .then((res) => res.json())
            .then((data) => {
                setTitleSeo(data.title_seo)
                setDescseo(data.description_seo)
                setKeywordSeo(data.keywords_seo)
            })

    }, [])
    return (
        <div>
            <Helmet>
                <title>{titleseo}</title>
                <meta name="description" content={descseo} />
                <meta name="keywords" content={keywordseo} />
            </Helmet>
        </div>
    )
}
