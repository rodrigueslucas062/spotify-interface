import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChevronLeft, ChevronRight } from "lucide-react"

const NavButton = () => {
    const router = useRouter()
    const [ultimaRota, setUltimaRota] = useState(null)

    const handleAvancar = () => {
        if (ultimaRota) {
            router.push(ultimaRota)
        }
    }

    const handleVoltar = () => {
        router.back()
    }

    useEffect(() => {
        setUltimaRota(router.asPath)
        const handleRouteChange = (url) => {
            setUltimaRota(url)
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router])

    return (
        <div>
            <button className="rounded-full bg-black/40 p-2 hover:bg-white/10" onClick={handleVoltar}>
                <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2 hover:bg-white/10" onClick={handleAvancar}>
                <ChevronRight />
            </button>
        </div>
    )
}

export default NavButton