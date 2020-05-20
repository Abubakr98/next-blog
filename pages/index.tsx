import { useEffect } from 'react';
import Head from "next/head";
import { siteTitle } from "../components/layout";
import Layout from "../components/layoutHome";
import Card from "../components/card";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import { Posts, Func } from '../interfaces/index'
import axios from "axios";
import API from '../APIurl';
import { connect } from 'react-redux';
import { iRootState, Dispatch } from '../store'

function Home({
  posts,
  storePosts,
  setPosts
}: {
  posts: Posts[];
  storePosts: Posts[];
  setPosts: Func;
}) {
  useEffect(() => {
    setPosts(posts);
  }, [])
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <Cards>
          {
            storePosts ? (
              storePosts.map((el) => (
                <Card key={el.id} post={el}></Card>
              ))
            ) : ('loading...')
          }
        </Cards>
      </Section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(API.base + API.posts);
  const posts = await res.data;
  return { props: { posts } };
};
const Cards = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Section = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding-top: 20px;
`;

const mapState = (state: iRootState) => ({
  storePosts: state.posts
})

const mapDispatch = (dispatch: Dispatch): any => ({
  setPosts: (data: Posts[]) => dispatch.posts.setPosts(data)
})

export default connect(mapState, mapDispatch)(Home);