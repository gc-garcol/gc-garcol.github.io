import { BaseContent, BlogTag, Container } from "common/Common";
import { BlogRepository } from "_database_/blog-repository";
import { BlogType } from "page/blog/BlogPage.type";
import { Title, TagsContainer, ContentContainer, H2, RefLink, H3 } from "../_common_/blog-common";
import { CopyBlock, dracula } from "react-code-blocks";
import MenuBar from "common/components/menu/MenuBar";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styled from "styled-components";

const ID = "20220326-01";
export const BlogPage2022032601 = () => {

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
        <ContentContainer>
          <H2>Documentation</H2>
          <RefLink className="mg-t-16" target="_blank" href="https://redisson.org/">Redisson documentation</RefLink>
          <H2>Features</H2>

          <p className="mg-t-16">Một số features nổi bật</p>

          <ContentWrapper>
            <FeatureWrapper>
              <H3>Distributed Java collections</H3>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#71-map">Map</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#72-multimap">Multimap</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#73-set">Set</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#77-list">List</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#74-sortedset">SortedSet</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#75-scoredsortedset">ScoredSortedSet</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#76-lexsortedset">LexSortedSet</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#78-queue">Queue/ Dequeue</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#710-blocking-queue">Blocking Queue</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#714-blocking-fair-deque">Blocking Fair Queue</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#716-priority-queue">Priority Queue/ Dequeue</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#715-delayed-queue">Delay Queue</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#720-stream">Stream</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#722-transfer-queue">Transfer Queue</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#721-ring-buffer">Ring Buffer</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/7.-distributed-collections/#723-time-series">Time Series</Feature>
            </FeatureWrapper>

            <FeatureWrapper>
              <H3 style={ { color: 'red' } }>Distributed Java locks and synchronizers</H3>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#81-lock">Lock</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#82-fair-lock">FairLock</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#83-multilock">MultiLock</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#85-readwritelock">ReadWriteLock</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#86-semaphore">Semaphore</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#87-permitexpirablesemaphore">PermitExpirableSemaphore</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#88-countdownlatch">CountDownLatch</Feature>
            </FeatureWrapper>

            <FeatureWrapper>
              <H3 style={ {color: 'red'} }>Distributed Java objects</H3>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/6.-distributed-objects/#61-object-holder">Object holder</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/6.-distributed-objects/#64-bitset">BitSet</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/6.-distributed-objects/#65-atomiclong">AtomicLong</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/6.-distributed-objects/#67-topic">PublishSubscribe</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/6.-distributed-objects#614-id-generator">Id generator</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/6.-distributed-objects#612-ratelimiter">RateLimiter</Feature>
            </FeatureWrapper>

            <FeatureWrapper>
              <H3 style={ {color: 'red'} }>Distributed Java services</H3>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/9.-distributed-services/#91-remote-service">Remote service</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/9.-distributed-services/#92-live-object-service">Live Object service</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/9.-distributed-services/#93-distributed-executor-service">Executor service</Feature>
              <Feature target="_blank" className="red" href="https://github.com/redisson/redisson/wiki/9.-distributed-services/#94-distributed-scheduled-executor-service">Scheduler service</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/9.-distributed-services/#95-distributed-mapreduce-service">MapReduce service</Feature>
              <Feature target="_blank" href="https://github.com/redisson/redisson/wiki/10.-additional-features/#104-transactions">Transactions</Feature>
            </FeatureWrapper>

            <FeatureWrapper>
              <H3>Supported codecs</H3>
              <Feature target="_blank" href="https://github.com/FasterXML/jackson">Jackson JSON</Feature>
              <Feature target="_blank" className="red" href="https://github.com/EsotericSoftware/kryo">Kryo</Feature>
            </FeatureWrapper>
          </ContentWrapper>

          <H2>Good for reading</H2>
          <Feature style={{ marginTop: 16 }} className="blue" target="_blank" href="https://github.com/FasterXML/jacksonhttps://dzone.com/articles/how-to-reach-500k-opssec-with-only-3-redis-nodes-i">Reaching 500K Ops/Sec With Only 3 Redis Nodes</Feature>
          <Feature className="blue" target="_blank" href="https://dzone.com/articles/distributed-tasks-execution-and-scheduling-in-java">Distributed tasks Execution and Scheduling in Java, powered by Redis</Feature>
          {/* <Feature className="blue" target="_blank" href="https://evuvatech.com/2016/02/05/distributed-lock-with-redis/">Distributed lock with Redis</Feature> */}
          <Feature className="blue" target="_blank" href="https://www.baeldung.com/redis-redisson">A Guide to Redis with Redisson</Feature>
        </ContentContainer>
      </BaseContent>
    </Container>
  );
}

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const FeatureWrapper = styled.div`
`
const Feature = styled.a`
display: block;
margin-top: 8px;
text-decoration: none;
cursor: pointer;
color: #000000;
&:hover {
  font-weight: bold;
}
&:nth-child(1) {
  margin-top: 16px;
}
&.red {
  color: red;
}

&.blue {
  color: #4c6a98;
}
`