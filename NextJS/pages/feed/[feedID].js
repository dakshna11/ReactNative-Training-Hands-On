import { useRouter } from 'next/router';
import { Toolbar } from '../../components/toolbar';
import styles from '../../styles/Feed.module.css'

export const Feed = ({pageNumber, articles})=>{
    const router = useRouter();
    return (
    <div className='page-container'>
      <Toolbar/>
        <div className={styles.main}>
          {articles.map((article, index) => (
            <div key={index} className={styles.post}>
              <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
              <p>{article.description}</p>
              {!!article.urlToImage && <img src={article.urlToImage} />}
            </div>
          ))}
        </div>

        <div className={styles.paginator}>
          <div
            className={pageNumber === 1 ? styles.disabled : styles.active}
            onClick={() => {
              if (pageNumber > 1) {
                router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
            }
          }}
        >
          Previous Page
        </div>

        <div>#{pageNumber}</div>

        <div
          className={pageNumber === 5 ? styles.disabled : styles.active}
          onClick={() => {
            if (pageNumber < 5) {
                router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
            }
          }}>
          Next Page
        </div>
        </div>
        </div>
    )
}

export const getServerSideProps = async pageContext =>{
    const pageNumber = pageContext.query.feedID

    if(!pageNumber || pageNumber < 1 || pageNumber > 5 ){
        return {
            props:{
                articles:[],
                pageNumber: 1
            }
        }
    }
    const apiResponse = await fetch(
        `http://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
        {
            headers:{
                Authorization: '2a7b96f826cf40eb976cd00fb1f287a3'
            }
        }
        )
    const apiJson = await apiResponse.json()
    const {articles} = apiJson

    return {
        props:{
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
}
export default Feed