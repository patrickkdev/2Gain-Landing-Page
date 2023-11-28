import React from 'react'
import { useRouter } from 'next/router'
import { gtag_report_conversion } from '@/lib/gtag';

const Thankyou = () => {

  const router = useRouter()

  // redirect to home
  React.useEffect(() => {
    gtag_report_conversion(window.location.href, "LycGCI2M3_oYEJDvlcgq")

    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return 
  (
    <h1>Obrigado pela compra.</h1>
  )
}

export default Thankyou