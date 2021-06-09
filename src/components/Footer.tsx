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
        <div className="footer__address">
          <p>
            180 а Чуй просп., Бишкек 720001 <br />
            Телефон: 0312 392 093, 0312 392 010;<br />
            Email: www.ksla.kg
          </p>
          <img className="footer__logo" src='/images/text-logo.png' alt="logo" />
          <div className="footer__social">
            <p> Мы в социальных сетях</p>
            <div className="footer__social-icons">
              {social.map((src, index) => (
                <img src={src} key={index} />
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