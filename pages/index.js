import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Charles de Gaulle est né à Lille le 22 novembre 1890 dans une famille catholique et patriote. Son père, Henri de Gaulle est professeur de lettres et d’histoire.
Le jeune Charles fait ses études chez les Jésuites et opte très tôt pour la carrière des armes. Il est reçu en 1908 à l’École spéciale militaire de Saint-Cyr, au 119e rang. Avant d’apprendre leur métier d’officier, les élèves doivent connaître la troupe. Charles de Gaulle est donc muté dans un régiment pour y faire l’expérience de son futur métier. Le voilà élève officier au 33e régiment d’infanterie d’Arras, commandé alors par le colonel Pétain. Après ses quatre années d’études à Saint-Cyr, il est à nouveau nommé à Arras en 1912.</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
