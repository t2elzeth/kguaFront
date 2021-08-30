import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const links = [
  {
    title: 'header.about_us',
    route: '/about',
  },
  {
    title: 'header.training_units',
    route: '/training-units',
  },
  {
    title: 'header.science',
    route: '/science',
  },
  {
    title: 'header.international_cooperation',
    route: '/international-cooperation',
  },
  {
    title: 'header.incoming',
    route: '/incoming',
  },
  {
    title: 'header.students',
    route: '/students',
  },

  {
    title: 'header.employees',
    route: '/employees',
  },
]
const socials = [
  {
    href: 'https://www.facebook.com/ksla.kg/',
    img: '/images/facebook.svg',
  },
  {
    href: 'https://www.tiktok.com/@law_college.ksla?',
    img: '/images/tiktok.svg',
  },
  {
    href: '',
    img: '/images/gmail.svg',
  },
  {
    href: '',
    img: '/images/whatsapp.svg',
  },
  {
    href: '',
    img: '/images/telegram.svg',
  },
]
export const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__links">
          {links.map((link) => (
            <Link key={link.title} href={link.route}>
              <a style={{ textDecoration: 'none' }}>{t(link.title)}</a>
            </Link>
          ))}
        </div>
        <div className="footer__address">
          <p>
            180 а Чуй просп., Бишкек 720001 <br />
            Телефон: 0312 392 093, 0312 392 010;
            <br />
            Email: www.ksla.kg
          </p>
          <img className="footer__logo" src="/images/text-logo.png" alt="logo" />
          <div className="footer__social">
            <p>Мы в социальных сетях</p>
            <div className="footer__social-icons">
              {socials.map((social) => (
                <Link key={social.href} href={social.href}>
                  <a target="_blank">
                    <img alt="social" src={social.img} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="footer__copyright">
          Все права защищены © 2002 - 2021 - Кыргызский Государственный Юридический Университет
          (КГЮА)
        </p>
      </div>
    </div>
  )
}
