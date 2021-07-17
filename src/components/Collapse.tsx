import React, { useState } from 'react'
import classnames from 'classnames'
import { Collapse as CollapseComponent } from 'react-collapse'

export type CollapseItem = {
  name?: string
  position?: string
  experience?: string
  content?: string
  image?: string | undefined
}

export type CollapseProps = {
  items: CollapseItem[]
}

export const Collapse: React.FC<CollapseProps> = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState<Array<number>>([])

  const handleItemClick = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index))
    } else {
      setSelectedItems([...selectedItems, index])
    }
  }

  return (
    <div className="collapse">
      <div className={classnames('blocks')}>
        {items.map((item: any, index: any) => (
          <div onClick={() => handleItemClick(index)} className="block" key={index}>
            <div className="titleLine">
              {/* <img src={item.image} className="collapseImage" /> */}
              <p className="title">
                {item.name}
                <span className="subtitle">{item.position}</span>
              </p>
              <img
                style={{ marginLeft: '4px' }}
                src="/images/plus.svg"
                className="collapseButton"
                alt="plus-icon"
              />
            </div>
            <CollapseComponent
              isOpened={selectedItems.includes(index)}
              theme={{ collapse: 'customCollapse' }}
            >
              <div className="collapsedContent">
                <div>
                  {' '}
                  <p>Email </p>
                  <span>{item.email}</span>
                </div>
                <div>
                  {' '}
                  <p>Телефон </p> <span> {item.phoneNumber}</span>
                </div>
                <div>
                  <p> Образование </p>{' '}
                  <span dangerouslySetInnerHTML={{ __html: item.content }}></span>
                </div>
              </div>
            </CollapseComponent>
          </div>
        ))}
      </div>
    </div>
  )
}
