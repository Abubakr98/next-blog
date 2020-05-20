import Link from "next/link";
import styled from "styled-components";
import { Posts } from "../interfaces/index";
import Truncate from "react-truncate";
function Post({ post }: { post: Posts }) {
  const { id, title, body } = post;
  return (
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <Card>
        <HeadingLg>{title}</HeadingLg>
        <LightText>
          <Truncate lines={3} ellipsis={<span>...</span>}>
            {body}
          </Truncate>
        </LightText>
      </Card>
    </Link>
  );
}
const HeadingLg = styled.h2`
  font-size: 1.2rem;
  line-height: 1.4;
  margin: 1rem 0;
`;
const Card = styled.article`
  position: relative;
  display: flex;
  -webkit-box-flex: 1;
  flex: 1 1 301px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  overflow: hidden;
  margin: 0 0 40px;
  padding: 0 20px 40px;
  background-size: cover;
  cursor: pointer;
  background-color: #f2f2f2;
  border-radius: 5px;
  max-width: 300px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  &:hover{
    background-color: #e9e9e9;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;
const LightText = styled.div`
  font-size: 16px;
  color: #757575;
`;

export default Post;
