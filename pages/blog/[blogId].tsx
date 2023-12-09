import React from 'react'

import Navbar from '@/components/Home/Navbar/Navbar';
import Container from '@mui/material/Container';
import Head from 'next/head';

import { useRouter } from 'next/router';

const Blog = () => {

  const router = useRouter()
  const { blogId } = router.query

  const [pageTitle, setPageTitle] = React.useState<string | undefined>(undefined)
  const [blogPost, setBlogPost] = React.useState<string | undefined>(undefined)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!ref.current) {
      return
    }

    const title = ref.current.querySelector('h1')?.textContent

    if (title) setPageTitle(title)
  }, [blogPost])

  React.useEffect(() => {
    if (!blogId) {
      return
    }

    try {
      const htmlContent = require(`!raw-loader!/public/static/blog-posts/${blogId}.html`).default
      setBlogPost(htmlContent)
    } catch (e) {
      console.error(e)
    }
  }, [blogId])

  if (!blogId) {
    return <div className="default">Carregando...</div>
  }

  if (!blogPost) {
    return <div className="default">404 Página não encontrada</div>
  }

  return (
    <>
      <Head>  
        <title>{pageTitle}abc</title>
      </Head>
      <div className={"indexPage"}>
        <Navbar />
        <Container maxWidth="lg">
          <div ref={ref} className={"blog-post"} dangerouslySetInnerHTML={{__html: blogPost}}/>
        </Container>
      </div>
    </>
  )
}

export default Blog