import Layout from "../../components/layout";
import Head from "next/head";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import { Posts } from '../../interfaces/index'
import axios from "axios";
import API from '../../APIurl'


function Create({
  posts,
}: {
  posts: Posts;
}) {
  return (
    <Layout>
      <Head>
        <title>{posts.title}</title>
      </Head>
      <Article>
        <h1>{posts.title}</h1>
        <LightText>
          {posts.body}
        </LightText>
      </Article>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params !== undefined) {
    const res = await axios.get(API.base + API.posts + "/" + params.id);
    const posts = await res.data;
    return { props: { posts } };
  }
  const res = await axios.get(API.base + API.posts);//
  const posts = await res.data;
  return { props: { posts } };
};
const Article = styled.article`
  & > h1 {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
    text-align: center;
  }
`;
const LightText = styled.small`
  color: #676767;
`;
export default Create;
