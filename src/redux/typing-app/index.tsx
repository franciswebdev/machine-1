import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Article } from "@/components/types/typing-app";
import { GraphQLClient } from 'graphql-request';
import { ARTICLE_QUERY } from "@/components/gql/article.gql";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const graphcms = new GraphQLClient(
  'https://api-ap-southeast-2.graphcms.com/v2/cl29v665s1jqg01yz63gsdva6/master', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTE5NzU3ODUsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5ncmFwaGNtcy5jb20vdjIvY2wyOXY2NjVzMWpxZzAxeXo2M2dzZHZhNi9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJlZGQ5Y2Q3NS01MGUzLTQ5YjktYTk3MS1kYzdmMDU3OGZmNGEiLCJqdGkiOiJjbDJ3bnFhNXIxeXlyMDF3YjR3YzZkZjZ3In0.RF0zd43nWL2MTDOPmJaIL_rIv-HWEkIb_0qPMXNQXPHMvbMU0FUHAa6m9mn4vn0T3jf78z4S6-9K3BqeySzrrGBaW-pfylobpH7PlZY7oGpshT1hL7Fcwq10dwP2YFermC-uAgclB6_ftmUxXmo2nNSflU6xythdjqW8k1Lz0W3DbSuamnSFh7-_YfwRhnNnhov_jb753fksLgaLJgYisT-UQlV9W-pXf1-GWBMLIzHvdNKuKP0wdfvbleSeLiSuCNmmhTggj8nPSVg0nI8QUS7FdR4YlAyz2Tl-9MfYOBBtAb7QjQo8R6nP_9XphuDcdEUJ16oye2dyu7bWLKaNSbPAb8oqq81TBT0Q0aoiDkdq7BpCO3ag8CxI9Jc6MGMXjB8m1EMucDTshfvcXnRItSw5VniNWbEluWVuQXJHGhKNGJktXCYZHJ2bYwLmgCrH2WC7fB63GYfE4x_JL6-3_bf1wlndjxnDBmmdiFN6y8xeazIM9vDag2aozSVkZsP6SWwRDzM-d5fiWe34rCPi5aCcsuGCMoRJTaeJ8qiTtJ-tJrYOTKx7tDVleIpwHGXQHP1qM_zp27Kor0irAZWdt7Mw54AE4bRotgXW6tpmZMn5GqPN9e3J2McRiParrqJFhdce7rBEEzXfTfcVg1NpIjIG4KjYVUBDv6pl94UKMSM'
  },
}
);

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


    })();
  }, []);

  useEffect(() => {
    const keyup = (e: KeyboardEvent) => {
      console.log(e);
    }
    document.addEventListener('keyup', keyup);

    return () => {
      document.removeEventListener('keyup', keyup);
    }
  }, []);

  useEffect(() => {
    console.log('---', article?.contents);
  }, [ article ])

  return (
    <Container>
      <Link href="/">Back</Link>

      <Box my={2}>
        <Typography variant="h5" component="h2">{article?.headline}</Typography>

        {article?.contents.map((a, i) => (
          <>
            <Box px={2} py={1} my={1} bgcolor="wheat" id={`index-${i}`}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(a.html || '') }}
            />
            <span>{a.text}</span>
          </>
        ))}
      </Box>
    </Container>
  );
}

export default TypingHome;