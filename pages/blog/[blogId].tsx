import Navbar from '@/components/Home/Navbar/Navbar';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import React, {lazy} from 'react'

const Blog = () => {

  const router = useRouter()
  const { blogId } = router.query

  const [blogPost, setBlogPost] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    if (!blogId) {
      return
    }

    try {
      const htmlContent = require(`!raw-loader!../../blog-posts/${blogId}.html`).default
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
    <div className={"indexPage"}>
      <Navbar />
      <Container maxWidth="lg">
        <div className={"blog-post"} dangerouslySetInnerHTML={{__html: blogPost}}/>
      </Container>
    </div>
  )
}

export default Blog