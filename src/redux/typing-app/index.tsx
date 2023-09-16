import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Article } from "@/components/types/typing-app";
import { GraphQLClient } from 'graphql-request';
import { ARTICLE_QUERY } from "@/components/gql/article.gql";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const graphcms = new GraphQLClient(
  'https://api-ap-southeast-2.hygraph.com/v2/clmlbn3mz1dec01uo9q2m96xy/master', {
  // 'https://api-ap-southeast-2.graphcms.com/v2/cl29v665s1jqg01yz63gsdva6/master', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTQ4Mjc4ODUsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbG1sYm4zbXoxZGVjMDF1bzlxMm05Nnh5L21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI5ZTI1Y2IyZC00ZmYwLTQ2OWMtOTU4MC02NjIwMDBiMjFlMTgiLCJqdGkiOiJjbG1sY3Joc3QxZGpnMDFydGd2cGRjeXA4In0.lJa961JOYoNSoNBcbLsX_g6c8LaujCWEP1ukyYeCkQsVwV9UlgKw_HWxzYrWJKSPEzyLDWmLR3QXXvtg_lzBjzkYMa_NAOMpJqOgT81IbBaS934NF-QDx8TV8dT_zG-M83WdcwG2-fq6w3CPMLgrfXWYr1rTc87T-fi9LCDR3Zcz6lkVkinScEtV4p-7dtUgwMfpQlrZ37T1Aprd_O-U9gBtO4Do1imkLROhKHCu8NCMZ7fc1o5pRFwtWCzTvOkCfTadoP3mq2cfh8qIVap_0MSWgA3Efe1C4Nw5KgLhtsrANWUfaKSdGPky7v1Bkw56YjrJO30D_KDmDOAA1Qwh834IcS5bpenWQF6N04Qeu1C9ySHSQbY80Ag5SodHGn5rBa4vSOsT18NA-xsRY8Wak2VqK64nlzgcNv84igEIlsf71A-ixEw8cYU_qPefGbsYXE36m0-7mlk7-0hmZ1vX_uSn_PR1QirYyzAjk-qyxr88ZKtX4uX42QwRr5poeJK-lnYdC1n4mtSJ30wbd_jGC9LxCX5IcT0U_Dbqphbl7IaVwY89xDlvlLFmurKJ_2nSSLKkLTGlhRghOpSX8yaDg67iIIavzKNSPpKvQ6jKXvzMBj7jCuIokAJuMzOWWz8bkYx9uHnjREqBpWScEo6jg67yktonGLueBYzU7EPeozU'
  },
});

const TypingHome = () => {

  const [article, setArticle] = useState<Article>();
  const articleRef = useRef<string>();

  useEffect(() => {
    (async () => {
      const res = await graphcms.request(ARTICLE_QUERY);
      setArticle(res.article);

      if (articleRef.current !== res.article.id) {
        articleRef.current = res.article.id;
      }

      // mock data if we cannot reach graphcms
    })().catch(e => {
      console.log('failed to query graphcms', e);

      setArticle({
        id: 'mock-id',
        headline: 'mock headline',
        contents: [
          {
            html: '<p>this is some text</p>',
            text: 'this is some text'
          }
        ]
      })
    });
  }, []);

  // where we capture the key strokes
  useEffect(() => {
    const keyup = (e: KeyboardEvent) => {
      console.log(e);
    }
    document.addEventListener('keyup', keyup);

    return () => {
      console.log('removing key listeners');
      document.removeEventListener('keyup', keyup);
    }
  }, [articleRef]);

  const contents = useMemo(() => {
    console.log('-- memo', article?.contents)
    return article?.contents;
  }, [article]);

  useEffect(() => {
    console.log('---', article?.contents);
  }, [article?.contents]);

  useEffect(() => {
    console.log('++ memoized contents', contents)
  }, [contents]);

  return (
    <Container>
      <Link href="/">Back</Link>

      <Box my={2}>
        <Typography variant="h5" component="h2">{article?.headline}</Typography>

        {article?.contents.map((a, i) => (
          <div key={`index-${i}`}>
            <Box px={2} py={1} my={1} bgcolor="wheat" id={`index-${i}`}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(a.html || '') }}
            />
            <span>{a.text}</span>
          </div>
        ))}
      </Box>
    </Container>
  );
}

export default TypingHome;