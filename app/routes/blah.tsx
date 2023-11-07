import Component, { frontmatter } from "../content/blah.mdx";

export default function About() {
  return (
    <>
      <h1>frontmatter.title: {frontmatter.title}</h1>
      <Component />
    </>
  );
}
