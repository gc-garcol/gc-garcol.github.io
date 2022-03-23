import { BaseContent, BlogTag, Container } from "common/Common";
import { BlogRepository } from "_database_/blog-repository";
import { BlogType } from "page/blog/BlogPage.type";
import { Title, TagsContainer, ContentContainer, H2 } from "../_common_/blog-common";
import { CopyBlock, dracula } from "react-code-blocks";

const ID = "20220323-01";
export const BlogPage202203201 = () => {

  const blog: BlogType = BlogRepository.fetchBlogById(ID);

  return (
    <Container className="container">
      <BaseContent className="base-content">
        <Title>{ blog.title }</Title>
        <TagsContainer>
          <span>Tags: </span>
          {
            blog.tags.map(tag => {
              return (
                <BlogTag className="blog-tag" to={ `/home?tag=${tag.name}` } key={ tag.name } style={ tag.tagStyles } >{ tag.name }</BlogTag>
              )
            })
          }
        </TagsContainer>
        <ContentContainer>
          <H2>Giới thiệu</H2>
          <p className="mg-t-16">Úi, nhớ lại thời học về những phép toán <b>Bitwise</b>, giảng viên ném công thức này vào mặt mình &#128580;</p>

          <img className="img width-50 mg-t-8" src={ require('./resouces/bitwise.png') } alt="" />

          <H2 className="mg-t-20">Explain</H2>
          <p className="mg-t-16">Thật ra thì không cần phải nhớ hết 12 kết quả trên, chỉ cần hiểu ý nghĩa của những phép toán đó:</p>
          <ul>
            <li className="mg-l-16">Muốn đảo bit: <b>XOR</b> với <b>1</b></li>
            <li className="mg-l-16">Muốn set bit về 1: <b>OR</b> với <b>1</b></li>
            <li className="mg-l-16">Muốn set bit về 0: <b>AND</b> với <b>0</b></li>
            <li className="mg-l-16">Những phép toán còn lại, sẽ giữ nguyên bit</li>
          </ul>
          
          <H2 className="mg-t-20">Example</H2>
          <p className="mg-t-16">Đề bài: <b>Đảo</b> các bit x1001xx của '1100100' (decimal = 100)</p>
          <p className="mg-t-8">Hướng giải quyết: dùng phép <b>XOR</b> với mark là ...0111100</p>
          <p className="mg-t-8"></p>
          <CopyBlock
            language={"javascript"}
            text={`// Javascript
let pattern = parseInt('1100100', 2); // pattern === 100 && Number(100).toString(2) === '1100100'
let mark = parseInt('1111', 2) << 2; // mark === 60 && Number(60).toString(2) === '111100'
let result = pattern ^ mark; // result === 88 && Number(88).toString(2) === '1011000'
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