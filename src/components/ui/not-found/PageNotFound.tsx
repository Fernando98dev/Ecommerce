import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"


export const PageNotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h2 className={`${titleFont.className} not-found__message`}>404</h2>
        <p className="not-found__sorry-message">Whoops! lo sentimos mucho</p>
        <p className="not-found__home-message">
             <span>Puedes regresar al </span>
             <Link href="/"
             className="not-found__link">Inicio</Link>
        </p>
      </div>

      <div className="not-found__image">
        <Image
        src="/imgs/starman_750x750.png"
        alt="Starman"
        className="image__sky"
        height={550}
        width={550}
        />
      </div>

    </div>
  )
}
