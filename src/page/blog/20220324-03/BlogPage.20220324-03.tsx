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
        <TagsContainer>
          <span className="text-bold">Tags: </span>
          <BlogTag to="/" style={ { backgroundColor: '#ed894c', fontWeight: 'bold', marginRight: '4px' }} >#all</BlogTag>
          {
            blog.tags.map(tag => {
              return (
                <BlogTag className="blog-tag" to={ `/home?tag=${tag.name}` } key={ tag.name } style={ tag.tagStyles } >{ tag.name }</BlogTag>
              )
            })
          }
        </TagsContainer>
        <p className="mg-t-16"> Bài viết tham khảo ở tài liệu Trí tuệ nhân tạo - Lập trình tiến hoá của <b>Ts. Nguyễn Đình Thúc</b> </p>
        <ContentContainer>
          <H2>Khái niệm cơ bản</H2>
          <p className="mg-t-16"><b>Generic Algorithm</b> là một loại giải thuật mô phỏng các hiện tượng tự nhiên: <b>kế thừa</b> và <b>đấu tranh sinh tồn </b> 
            để cải tiến lời giải và khảo sát không gian lời giải</p>
          <p className="mg-t-12">Ví dụ về sự tiến hoá của quần thể thỏ: </p>
          <p className="mg-t-8">Có một quần thể thỏ. Trong số đó sẽ có những con nhanh nhẹn và thông minh hơn những con khác(<b>alpha thỏ</b>).
          Thỏ alpha có xác suất bị cáo ăn thịt nhỏ hơn, do đó chúng tồn tại lâu hơn để <b>tạo thêm nhiều thỏ tốt</b>. 
          Dĩ nhiên, một số thỏ chậm chạp đần đồn cũng sống chỉ vì may mắn. Quần thể những chú thỏ sống sát sẽ bắt đầu sinh sản. 
          Việc sinh sản này sẽ tạo ra một hỗn hợp tốt về "nguyên liệu di truyền thỏ".
          Thiên nhiên thỉnh thoảng lại ném vào một con thỏ "hoang dã" bằng cách làm đột biến nguyên liệu di truyền thỏ. 
          Những con Thỏ này sẽ nhanh hơn và thông minh hơn những con trong quần thể gốc vì có nhiều bố mẹ nhanh nhẹn và thông mình hơn đã thoát chết khỏi cáo chồn.
          </p>

          <H2>Tối ưu hàm một biến</H2>
          <p className="mg-t-16">Xét bài toàn tối ưu không ràng buộc sau:</p>
          {/* <MathJaxContext>
            <MathJax>{ "\\(\\max f(x) = x . \\sin(10\\pi . x) \\) + 1.0, trong đó: \\(x \\in [-1, 2]  \\)" }</MathJax>
          </MathJaxContext> */}
          <pre className="mathjax-block">
            <p>Max f(x) = x.sin(10&pi;x) + 1; trong đó x ∈ [-1, 2]</p>
          </pre>

          <img className="img width-50 mg-t-8" src={ require("./resources/001_graph.png") } alt="" />
          {/* <p>Đạo hàm bất nhất: </p>
          <p>f'(x) = sin(10&pi;x) + 10&pi;x + cos(10&pi;x)</p> */}

          <p className="mg-t-16">Dùng thuật giải di truyền để giải bài toán trên, bao gồm 5 phần: </p>
          <ul>
            <li className="mg-l-16">Mô hình hoá nhiễm sắc thể</li>
            <li className="mg-l-16">Khởi tạo quần thể</li>
            <li className="mg-l-16">Chọn lọc tự nhiên - Sử dụng hàm lượng giá</li>
            <li className="mg-l-16">Sử dụng phép toán di truyền (lại tạo & đột biến)</li>
            <li className="mg-l-16">Chọn các giá trị cho xác suất lại tạo, xác suất đột biến</li>
          </ul>

          <img className="img width width-50 mg-t-8" src={ require('./resources/004_flow.png') } alt="" />

          <H3>1. Mô hình hoá nhiễm sắc thể</H3>
          <p className="mg-t-16">Sử dụng vector nhị phân làm nhiễm sắc thể biểu diễn các giá trị thực của biến x. 
          Chiều dài vector phụ thuộc và độ chính xác cần có, trong ví dụ này, ta tính chính xác đến <b>6</b> chữ số phần thập phân.</p>
          <p className="mg-t-8">Miền xác định là [-1, 2] sẽ có chiều dài bằng 3, với yêu cầu độ chính xác là 6 số lẽ phần thập phân, 
          thì phải chia khoảng [-1, 2] thành ít nhất 3.10<sup>6</sup> khoảng có kích thước bằng nhau (<small>Vì 1 khoảng 1 integer đơn vị, tương ứng với ít nhất 10<sup>6</sup> khoảng bằng nhau</small>). 
          Ta tìm được chiều dài tối thiểu để
          biểu diễn cho yêu cầu bài toán là 22 bit nhị phân: </p>
          <pre className="mathjax-block">
            <p className="mg-t-8">2<sup>21</sup> &lt; 3.000.000 ≤ 2<sup>22</sup></p>
          </pre>
          <p className="mg-t-8">Ánh xạ chuỗi nhị phân - chromosome <small className="mathjax-inline-block">(b<sub>21</sub>b<sub>20</sub>...b<sub>0</sub>)<sub>2</sub></small> thành số thực x trong khoảng [-1, 2] được thực hiện qua 2 bước:</p>
          <img className="img width width-80 mg-t-8" src={ require('./resources/002_chromosome.png') } alt="" />
          <p className="mg-t-8 mg-l-8">• Convert <small className="mathjax-inline-block">(b<sub>21</sub>b<sub>20</sub>...b<sub>0</sub>)<sub>2</sub></small> từ cơ số 2 sang x' ở cơ số 10</p>
          <p className="mg-t-8 mg-l-8">• Tìm số thực x tương ứng:</p>
          <div className="mg-l-16">
            <MathJaxContext>
              <p className="mg-t-8"></p>
              <MathJax className="mathjax-block">{ "\\(x = lowerbound + x'.\\frac{domainLength}{totalFragment}  \\)" }</MathJax>
              <p className="mg-t-8">Tương ứng với bài toán sẽ là: </p>
              <MathJax className="mathjax-block">{ "\\(x = -1 + x'.\\frac{3}{2^{22} - 1} = -1 + x' . \\frac{3}{4194303} \\)" }</MathJax>
            </MathJaxContext>
          </div>

          <H3>2. Khởi tạo quần thể (Population)</H3>
          <p className="mg-t-16">Tạo random các nhiễm sắc thể với độ đài 22 bit</p>

          <H3>3. Chọn lọc tự nhiên (Selection) - Sử dụng hàm lượng giá</H3>
          <p className="mg-t-16 mathjax-inline-block">eval(chromosome) = f(x)</p>
          <p className="mg-t-8">Với việc tìm max, nếu hàm eval có giá trị càng lớn, thì chromosome có đột thích nghi càng cao.</p>
          <p className="mg-t-8">Với việc tìm min, có thể biểu diễn <i className="mathjax-inline-block">g(x) = -f(x)</i> rồi tìm max của <i className="mathjax-inline-block">g(x)</i></p>
          <p className="mg-t-8">Với cách dùng Roulette Wheel cho việc chọn lọc, hàm thích nghi eval(chromosome) phải không âm, để đạt được điều đó thì ánh xạ: <span className="mathjax-inline-block">eval = e<sup>eval</sup> = e<sup>f(x)</sup></span>, với e là một số lớn hơn 1 </p>

          <H3>4. Sử dụng phép toán di truyền</H3>
          <p className="mg-t-16"><b>a. Phép lai (crossover):</b></p>
          <p>Ví dụ lai giữa 2 nhiễm sắc thể <span className="mathjax-inline-block">(0101110111)</span> và <span className="mathjax-inline-block">(1110000000)</span> ở vị trí thứ 6 (chọn ngẫu nhiên):</p>
          <img className="img width width-80 mg-t-8" src={ require('./resources/003_crossover.png') } alt="" />
          <p className="mg-t-16"><b>a. Phép đột biến (mutation):</b></p>
          <p>Phép đột biến thay đổi (đảo bit) 1 bit bất kì của nhiễm sắt thể.</p>

          <H3>5. Chọn các giá trị cho xác suất lại tạo, xác suất đột biến</H3>
          <p className="mg-t-16 mg-l-8">• Kích thước quần thể: pop-size = 50</p>
          <p className="mg-t-8 mg-l-8">• Xác suất lai tạo: p<sub>cross</sub> = 0.25: chromosome trong population có 25% cơ hội để thực hiện phép lai</p>
          <p className="mg-t-8 mg-l-8">• Xác suất đột biến: p<sub>muta</sub> = 0.01: xác suất để 1 bit bất kì của 1 chromosome trong quần thể bị đột biến</p>

          <H3>Coding example</H3>
          <p>Tham khảo: <RefLink className="blog-tag" target="_blank" href="/#/blog/20220323-01_understanding-bitwise-operators">Understanding bitwise</RefLink></p>
          <RefLink className="20220324-03__introduction mg-t-8" target="_blank" href="https://github.com/gc-garcol/blog-demo/tree/master/blog-20220324-03">Source code</RefLink>
          <p className="mg-t-16"><b>Mô hình hoá nhiễm sắc thể</b></p>
          <p className="mg-t-16">Biểu diễn nhiễm sắt thể dưới dạng long value:</p>
          <CopyBlock
            language={"java"}
            text={` // Chromosome.java
    long value;
    int length;
`}
            showLineNumbers={ false }
            theme={dracula}
            wrapLines={true}
            codeBlock
          />

          <p className="mg-t-16"><b>Phép toán đột biến</b></p>
          <CopyBlock
            language={"java"}
            text={` // ChromosomeOperator.java
    long value = chromosome.getValue();
    long newValue = value ^ (1 << index);
}
`}
            showLineNumbers={ false }
            theme={dracula}
            wrapLines={true}
            codeBlock
          />

          <p className="mg-t-16"><b>Phép toán lai tạo</b></p>
          <CopyBlock
            language={"java"}
            text={` // ChromosomeOperator.java
    long rightMark = (1 << (index + 1)) - 1;
    long leftMark = rightMark ^ 0xffffff;

    long leftParent = father.value & leftMark;
    long rightParent = father.value & rightMark;

    long leftMother = father.value & leftMark;
    long rightMother = father.value & rightMark;

    Chromosome firstChild = Chromosome.of(leftParent + rightMother, length);
    Chromosome secondChild = Chromosome.of(leftMother + rightParent, length);
}
`}
            showLineNumbers={ false }
            theme={dracula}
            wrapLines={true}
            codeBlock
          />  

          <p className="mg-t-16"><b>Lặp lại việc call hàm "evolve" cho đến khi thoã mãn điều kiện dừng</b></p>
          <CopyBlock
            language={"java"}
            text={` // GeneticAlgorithm.java
    private void evolve() {
        doSelection();
        doCrossovers();
        doMutations();
    }
`}
            showLineNumbers={ false }
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <H2>Tính đúng đắn của giải thuật di truyền</H2>
          <p className="mg-t-16">Continue...</p>
        </ContentContainer>
      </BaseContent>
    </Container>
  );
}