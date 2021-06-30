const links = [
  {
    title: 'О КГЮА',
    route: '/about',
  },
  {
    title: 'Учебные подразделения',
    route: '/structure',
  },
  // {
  //   title: 'Наука',
  //   route: '/',
  // },
  // {
  //   title: 'Международные сотрудничества',
  //   route: '',
  // },
  {
    title: 'Поступающим',
    route: '/incoming',
  },
  // {
  //   title: 'Сотрудникам',
  //   route: '',
  // },
  {
    title: 'Студентам',
    route: '/students',
  }
]
const social = [
  '/images/facebook.svg',
  '/images/tiktok.svg',
  '/images/gmail.svg',
  '/images/whatsapp.svg',
  '/images/telegram.svg',
]
export const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__links">
          {links.map((link) => (
            <a>{link.title}</a>
          ))}
        </div>
        <div className="footer__address">
          <p>
            180 а Чуй просп., Бишкек 720001 <br />
            Телефон: 0312 392 093, 0312 392 010;<br />
            Email: www.ksla.kg
          </p>
          <img className="footer__logo" src='/images/text-logo.png' alt="logo" />
          <div className="footer__social">
            <p> Мы в социальных сетях</p>
            <div className="footer__social-icons">
              {social.map((src) => (
                <img src={src} />
              ))}
            </div>
          </div>
        </div>
        <p className="footer__copyright">
          Все права защищены © 2002 - 2021 - Кыргызский Государственный Юридический Университет (КГЮА)
        </p>
      </div>
    </div >
  )
}