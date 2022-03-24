import { BaseContent, BlogTag, Container } from "common/Common";
import { BlogRepository } from "_database_/blog-repository";
import { BlogType } from "page/blog/BlogPage.type";
import { Title, TagsContainer, ContentContainer, H2, RefLink, H3 } from "../_common_/blog-common";
import { CopyBlock, dracula } from "react-code-blocks";
import MenuBar from "common/components/menu/MenuBar";

const ID = "20220324-01";
export const BlogPage2022032401 = () => {

  const blog: BlogType = BlogRepository.fetchBlogById(ID);

  return (
    <Container className="container">
      <MenuBar />
      <BaseContent className="base-content">
        <Title>{ blog.title }</Title>
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
          <RefLink className="20220324-01__introduction mg-t-8" target="_blank" href="https://leetcode.com/problems/unique-paths/">Click here to go to leetcode-problem</RefLink>
          <p className="mg-t-16">There is a robot on an <code className="leetcode">m x n</code> grid. The robot is initially located at the <strong>top-left corner</strong> (i.e., <code className="leetcode">grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code className="leetcode">grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.</p>
          <p className="mg-t-16">Given the two integers <code className="leetcode">m</code> and <code className="leetcode">n</code>, return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.</p>
          <p className="mg-t-16">The test cases are generated so that the answer will be less than or equal to <code className="leetcode">2 * 10<sup>9</sup></code>.</p>
          
          <H3 className="mg-t-16">Example:</H3>
          <pre className="leetcode mg-t-8">
            <p><strong>Input:</strong>m = 3, n = 2</p>
            <p><strong>Output:</strong> 3</p>
            <p><strong>Explanation:</strong></p>
            <p>From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:</p>
            <p>1. Right -&gt; Down -&gt; Down</p>
            <p>2. Down -&gt; Down -&gt; Right</p>
            <p>3. Down -&gt; Right -&gt; Down</p>
          </pre>

          <H2 className="mg-t-20">Solution</H2>
          <H3 className="mg-t-16">Công thức:</H3>
          <pre className="leetcode">
          <p>f[m, n] =</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;1 if m == 0 || n == 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;f[m - 1][n] + f[m][n - 1] otherwise</p>
          </pre>
          <H3 className="mg-t-16">Java solution</H3>
          <CopyBlock
            language={"javascript"}
            text={`// JAVA
class Solution {
    public int uniquePaths(int m, int n) {
        int[][] memoi = new int[m][n];
        f(m - 1, n - 1, memoi);
        return memoi[m - 1][n - 1];
    }

    /**
     f[m, n] =
     _  f[m - 1][n] + f[m][n - 1]
     _  1 if m == 0 || n == 0
     */
    int f(int m, int n, int[][] memoi) {
        if (m == 0 || n == 0) {
            memoi[m][n] = 1;
            return 1;
        }

        if (memoi[m][n] != 0) {
            return memoi[m][n];
        }

        memoi[m][n] += f(m - 1, n, memoi);
        memoi[m][n] += f(m, n - 1, memoi);
        return memoi[m][n];
    }
}
`}
            // showLineNumbers={ true }
            theme={dracula}
            wrapLines={true}
            codeBlock
          />    
        </ContentContainer>
      </BaseContent>
    </Container>
  );
}