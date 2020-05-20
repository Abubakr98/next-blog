import Head from "next/head";
import Layout from "../../components/layout";
import axios from "axios";
import { useInputChange } from "../../components/useInputChange";
import APIurl from "../../APIurl";
import styled from "styled-components";

function PostsFromServer() {
  const [input, handleInputChange,] = useInputChange();
  const createPost = (e: any) => {
    axios
      .post(APIurl.base + APIurl.posts, input)
      .then(function (response) {
        console.log(response);
        if (confirm("The post was created, Do you want to go to the created post?")) {
          window.location.pathname = "/";
        }
      })
      .catch(function (error) {
        alert("Something wrong dude :(. Don't worry it's not you")
        console.log(error);
      });
    e.preventDefault();
  };
  return (
    <Layout>
      <Head>
        <title>Create a new post</title>
      </Head>
      <section>
        <p>Hi, whats up! Create a new post</p>
        <Form>
          <Input
            type="text"
            name="title"
            onChange={handleInputChange}
            placeholder="Post title"
          />
          <Textarea
            name="body"
            onChange={handleInputChange}
            placeholder="Post body"
          />
          <Submit
            type="submit"
            onClick={createPost}
            value="create"
          />
        </Form>
      </section>
    </Layout>
  );
}

const Form = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;
const Input = styled.input<any>`
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font: inherit;
  font-size: 16px;
`;
const Textarea = styled.textarea<any>`
  min-width: 400px;
  max-width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font: inherit;
  font-size: 16px;
`;
const Submit = styled.input`
  width: 200px;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  font-size:18px;
  cursor: pointer;
  &:hover{
    background-color: #45a049;
  }
`;
export default PostsFromServer;
