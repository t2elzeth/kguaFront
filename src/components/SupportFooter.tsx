import React from 'react'

const SupportFooter: React.FC<any> = () => (
  <div className="support-footer">
    <div className="block">
      <a href="/support" className="bold-text">
        <img src="/images/question.svg" alt="question icon" />
        FAQ
      </a>
      <a href="/data/ioka-rules.pdf" target="_blank" className="bold-text">
        <img src="/images/paper.svg" alt="paper icon" />
        Условия пользования
      </a>
    </div>
    <a>©ioka 2021</a>
  </div>
)

export default SupportFooter
