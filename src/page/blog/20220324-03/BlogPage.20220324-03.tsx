import { BaseContent, BlogTag, Container } from "common/Common";
import { BlogRepository } from "_database_/blog-repository";
import { BlogType } from "page/blog/BlogPage.type";
import { Title, TagsContainer, ContentContainer, H2, RefLink, H3 } from "../_common_/blog-common";
import { CopyBlock, dracula } from "react-code-blocks";
import MenuBar from "common/components/menu/MenuBar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const ID = "20220324-03";
export const BlogPage2022032403 = () => {

  const blog: BlogType = BlogRepository.fetchBlogById(ID);

  return (
    <Container className="container">
      <MenuBar />
      <BaseContent className="base-content">
        <Title>{ blog.title }</Title>
        <p style={ { } }> Bài viết tham khảo ở tài liệu Trí tuệ nhân tạo - Lập trình tiến hoá của <b>Ts. Nguyễn Đình Thúc</b> </p>
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
          <H2>Khái niệm cơ bản</H2>
          <p className="mg-t-16"><b>Generic Algorithm</b> là một loại giải thuật mô phỏng các hiện tượng tự nhiên: <b>kế thừa</b> và <b>đấu tranh sinh tồn </b> 
            để cải tiến lời giải và khảo sát không gian lời giải</p>
          <p className="mg-t-12">Ví dụ về sự tiến hoá của quần thể thỏ: </p>
          <p className="mg-t-8">Có một quần thể thỏ. Trong số đó sẽ có những con nhanh nhẹn và thông minh hơn những con khác(<b>alpha thỏ</b>).
          Thỏ alpha có xác suất bị cáo ăn thịt nhỏ hơn, do đó chúng tồn tại lâu hơn để <b>Tạo thêm nhiều thỏ tốt</b>. 
          Dĩ nhiên, một số thỏ chậm chạp đần đồn cũng sống chỉ vì may mắn. Quần thể những chú thỏ sống sát sẽ bắt đầu sinh sản. 
          Việc sinh sản này sẽ tạo ra một hỗn hợp tốt về "nguyên liệu di truyền thỏ".
          Thiên nhiên thỉnh thoảng lại ném vào một con thỏ "hoang dã" bằng cách làm đột biến nguyên liệu di truyền thỏ. 
          Những con Thỏ này sẽ nhanh hơn và thông minh hơn những con trong quần thể gốc vì có nhiều bố mẹ nhanh nhẹn và thông mình hơn đã thoát chết khỏi cáo chồn.
          </p>

          <H2>Ví dụ về tối ưu hàm một biến</H2>
          <p className="mg-t-16">Xét bài toàn tối ưu không ràng buộc sau:</p>
          <MathJaxContext>
            <MathJax>{ "\\(\\max f(x) = x * \\sin(10\\pi * x) \\) + 1.0, trong đó: \\(x \\in [-1, 2]  \\)" }</MathJax>
          </MathJaxContext>
          <img className="img width-50 mg-t-8" src={ require("./resources/001_graph.png") } alt="" />
          {/* <p>Đạo hàm bất nhất: </p>
          <p>f'(x) = sin(10&pi;x) + 10&pi;x + cos(10&pi;x)</p> */}

          <p className="mg-t-16">Dùng thuật giải di truyền để giải bài toán trên, bao gồm 5 phần: </p>
          <ul>
            <li className="mg-l-16">Mô hình hoá nhiễm sắc thể</li>
            <li className="mg-l-16">Khởi tạo quần thể</li>
            <li className="mg-l-16">Tìm hàm lượng giá</li>
            <li className="mg-l-16">Xử dụng phép toán di truyền (lại tạo & đột biến)</li>
            <li className="mg-l-16">Chọn các giá trị cho xác suất lại tạo, xác suất đột biến</li>
          </ul>
          <p>Continue...</p>
        </ContentContainer>
      </BaseContent>
    </Container>
  );
}