import React, { useState } from 'react'
import classnames from 'classnames'
import { Collapse as CollapseComponent } from 'react-collapse'
import { Grid } from '@material-ui/core'

export type CollapseItem = {
  full_name?: string
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
              <img alt="" src={item.image} className="collapseImage" />
              <p className="title">
                {item.full_name}
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
                  <p>Общий стаж работы</p>
                  <span>{item.experience.overall}</span>
                </div>
                <div>
                  <p>Научно-педагогический стаж</p> <span> {item.experience.pedagogical}</span>
                </div>
                <div>
                  <p> Образование </p>
                  {item.education.map((item: any, index: number) => (
                    <Grid key={index} container direction="column">
                      <Grid item xs={12}>
                        <h6>{item.description}</h6>
                      </Grid>
                      <Grid item>
                        <h6>{`${item.from_year} - ${item.to_year}`}</h6>
                      </Grid>
                    </Grid>
                  ))}
                </div>

                <div>
                  <p>Награды: </p>
                  {item.rewards.map((item: any, index: number) => (
                    <Grid key={index} container direction="column">
                      <Grid item xs={12}>
                        <h6>{item.year}</h6>
                      </Grid>
                      <Grid item>
                        <h6>{item.description}</h6>
                      </Grid>
                    </Grid>
                  ))}
                </div>
                <div>
                  <p>Повышение квалификации: </p>
                  {item.trainings.map((item: any, index: number) => (
                    <Grid key={index} container direction="column">
                      <Grid item xs={12}>
                        <h6>{item.description}</h6>
                      </Grid>
                      <Grid item>
                        <h6>{`${item.from_year} - ${item.to_year}`}</h6>
                      </Grid>
                    </Grid>
                  ))}
                </div>

                <div>
                  <p>Копроративный Email:</p>
                  <span> {item.contacts.email.corporate}</span>
                </div>
                <div>
                  <p>Персональный Email:</p>
                  <span>{item.contacts.email.personal}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>{item.contacts.phone}</span>
                </div>
              </div>
            </CollapseComponent>
          </div>
        ))}
      </div>
    </div>
  )
}
