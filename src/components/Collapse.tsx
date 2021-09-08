import React, { useState } from 'react'
import Image from 'next/image'
import classnames from 'classnames'
import { Collapse as CollapseComponent } from 'react-collapse'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation('common')
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
        {items.map((item: any, index: any) => {
          return (
            <div onClick={() => handleItemClick(index)} className="block" key={index}>
              <div className="titleLine">
                {item.image ? (
                  <Image
                    loading="lazy"
                    src={item.image}
                    className="collapseImage"
                    width={146}
                    height={146}
                  />
                ) : (
                  <img alt="" src="/images/arrow.png" />
                )}
                {/* <img alt="" src={item.image} /> */}
                <p className="title">
                  {item?.full_name}
                  <span className="subtitle">{t(item?.position)}</span>
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
                    <p>{t('total_work_exp')}</p>
                    <span style={{ fontWeight: 600 }}>{Number(item.experience.overall)}</span>
                  </div>
                  <div>
                    <p>{t('scientific_exp')}</p>{' '}
                    <span style={{ fontWeight: 600 }}> {Number(item.experience.pedagogical)}</span>
                  </div>
                  <div>
                    <p>{t('education')}</p>
                    <Grid key={index} container direction="row">
                      {item.education.map((item: any) => (
                        <>
                          <Grid item>
                            {item.from_year && <h6>{`${item.from_year} - ${item.to_year}`}</h6>}
                          </Grid>
                          <Grid item xs={12}>
                            <h6>{item.description}</h6>
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  </div>

                  <div>
                    <p>{t('awards')}: </p>
                    <Grid key={index} container direction="column">
                      {item.rewards.map((item: any) => (
                        <>
                          <Grid item xs={12}>
                            <h6>{item.year}</h6>
                          </Grid>
                          <Grid item>
                            <h6>{item.description}</h6>
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  </div>
                  <div>
                    <p>{t('training')}: </p>
                    <Grid key={index} container direction="column">
                      {item.trainings.map((item: any) => (
                        <>
                          <Grid item>
                            <h6>{item.date}</h6>
                          </Grid>
                          <Grid item xs={12}>
                            <h6>{item.description}</h6>
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  </div>

                  <div>
                    <p>{t('corporate_email')}:</p>
                    <span> {item.contacts?.email?.corporate}</span>
                  </div>
                  <div>
                    <p>{t('personal_email')}:</p>
                    <span>{item.contacts?.email?.personal}</span>
                  </div>
                  <div>
                    <p>{t('phone')}:</p>
                    <span>{item.contacts?.phone}</span>
                  </div>
                </div>
              </CollapseComponent>
            </div>
          )
        })}
      </div>
    </div>
  )
}
