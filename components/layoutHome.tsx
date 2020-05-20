import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { BackToHome, Header } from './layoutStyles'

const name = "Abubakr Fazilov";
export const siteTitle = "The Next.js blog";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;

}) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        <img src="/images/profile.jpg" alt={name} />
        <h1>{name}</h1>
        <BackToHome>
          <Link href="/posts/new">
            <a>Create post</a>
          </Link>
        </BackToHome>
      </Header>
      <main>{children}</main>
    </Container>
  );
}
const Container = styled.div`
  max-width: 56rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

