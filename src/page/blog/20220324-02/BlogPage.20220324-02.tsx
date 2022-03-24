import { BaseContent, BlogTag, Container } from "common/Common";
import { BlogRepository } from "_database_/blog-repository";
import { BlogType } from "page/blog/BlogPage.type";
import { Title, TagsContainer, ContentContainer, H2, RefLink, H3 } from "../_common_/blog-common";
import { CopyBlock, dracula } from "react-code-blocks";
import MenuBar from "common/components/menu/MenuBar";

const ID = "20220324-02";
export const BlogPage2022032402 = () => {

  const blog: BlogType = BlogRepository.fetchBlogById(ID);

  return (
    <Container className="container">
      <MenuBar />
      <BaseContent className="base-content">
        <Title>{ blog.title }</Title>
        <p style={ { color: 'red' } }> Note: chưa pass hết test cases &#128514; </p>
        <TagsContainer>
          <span className="text-bold">Tags: </span>
          <BlogTag to="/">#all</BlogTag>
          {
            blog.tags.map(tag => {
              return (
                <BlogTag className="blog-tag" to={ `/home?tag=${tag.name}` } key={ tag.name } style={ tag.tagStyles } >{ tag.name }</BlogTag>
              )
            })
          }
        </TagsContainer>
        <ContentContainer>
          <H2>Description</H2>
          <RefLink className="20220324-01__introduction mg-t-8" target="_blank" href="https://leetcode.com/problems/container-with-most-water/">Click here to go to leetcode-problem</RefLink>
          <p className="mg-t-16">You are given an integer array <code className="leetcode">height</code> of length <code className="leetcode">n</code>. There are <code className="leetcode">n</code> vertical lines drawn such that the two endpoints of the <code className="leetcode">i<sup>th</sup></code> line are <code className="leetcode">(i, 0)</code> and <code className="leetcode">(i, height[i])</code>.</p>
          <p className="mg-t-16">Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>
          <p className="mg-t-16">Return <em>the maximum amount of water a container can store</em>.</p>
          <p className="mg-t-16"><strong>Notice</strong> that you may not slant the container.</p>
          <H3 className="mg-t-16">Example:</H3>

          <img className="img width-50 mg-t-8" src={ require('./resources/example.jpeg') } alt="" />

          <pre className="leetcode mg-t-8">
            <p><strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]</p>
            <p><strong>Output:</strong> 49</p>
            <p><strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.</p>
          </pre>

          <H2 className="mg-t-20">Solution</H2>
          <H3 className="mg-t-16">Công thức:</H3>
          <CopyBlock
            language={"java"}
            text={`// recursive
f[l, r] = Max {
  area(l, r),
  f[l + 1, r],
  f[l, r - 1]
}`}
            theme={dracula}
            wrapLines={true}
            showLineNumbers={ false }
            codeBlock
          />
          <p className="mg-t-16">Trong đó, công thức tính area như sau: </p>
          <CopyBlock
            language={"java"}
            text={`// JAVA
int area(int l, int r, int[] height) {
    return (r - l) * Integer.min(height[l], height[r]);
}
`}
            showLineNumbers={ true }
            theme={dracula}
            wrapLines={true}
            codeBlock
          />

          <H3 className="mg-t-16">Java Solution </H3>
          <CopyBlock
            language={"java"}
            text={`// JAVA
int dp(int[] height) {
    int n = height.length;
    int[][] mem = new int[n][n];
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < n - i; j++) {
            mem[j][j + i] = area(j, j + i, height);
            mem[j][j + i] = Math.max(mem[j][j + i], mem[j][j + i - 1]);
            mem[j][j + i] = Math.max(mem[j][j + i], mem[j + 1][j + i]);
        }
    }
    return mem[0][n - 1];
}

int area(int l, int r, int[] height) {
    return (r - l) * Integer.min(height[l], height[r]);
}
`}
            showLineNumbers={ true }
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </ContentContainer>
      </BaseContent>
    </Container>
  );
}