import { IncomingPage } from '../../templetes'


const SecondaryEducation: React.FC = () => {
  return (
    <IncomingPage pageName="Среднее профессиональное образование;" pageTitle='Среднее профессиональное образование;я' image='/images/incoming-2.png'>
      <h4>Юридический колледж</h4>
      <p>
        специальность «Правоведение» 030503- квалификация – «Юрист»;<br />
        специальность «Экономика и бухгалтерский учет» 080110 - квалификация -  «Бухгалтер».<br />
        На базе 9 класса - срок обучения 2 года 10 месяцев;<br />
        На базе 11 класса -  срок обучения 1 год 10 месяцев<br />
      </p>
      <h4>
        IT-Академия
      </h4>
      <p>
        Программа среднего профессионального образования (1 год 10 месяцев после 11 класса, 2 года 10 месяцев после 9 класса):<br />
        230701  Прикладная информатика (в юриспруденции);<br />
        100203  Информационная безопасность автоматизированных систем (в юриспруденции).<br />
      </p>
      <h4> Профессиональный лицей №99</h4>
      <p>
        на базе 9 класса – направления:<br />
        код 7231 "Слесарь по ремонту автомобилей";<br />
        код 6753 "Оператор по обслуживанию компьютерных устройств".<br />
        По окончанию выдается аттестат о среднем общем образовании и  диплом о начальном профессиональном образовании.<br />
        на базе 11 класса – направления:<br />
        код 7231 "Слесарь по ремонту автомобилей".<br />
        По окончанию выдается диплом о начальном профессиональном образовании.
      </p>
    </IncomingPage >
  )
}

export default SecondaryEducation