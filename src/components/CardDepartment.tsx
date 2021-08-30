import React from 'react'

// export type CardDepartmentItem = {
//   title: string
//   route: string
//   name: string
//   contacts: string
// }

import { Grid } from '@material-ui/core'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export type CardDepartmentProps = {
  items: any
}

export const CardDepartment: React.FC<CardDepartmentProps> = ({ items }) => {
  const { t } = useTranslation('common')
  return (
    <Grid container justifyContent="space-between" direction="row" className="blocksGrid">
      {items?.map((item: any) => (
        <Link key={item.title} href={`/about/structure/departments/department/${item.id}`}>
          <Grid item xs={12} md={5} className="block">
            <a style={{ cursor: 'pointer' }}>
              <h4 className="title">{item.title}</h4>
              <p>
                Заведующий кафедрой:{' '}
                <span style={{ fontWeight: 500, fontSize: 15 }}>
                  {t(item?.head_teacher?.position)}
                </span>
              </p>
              <span style={{ fontSize: 17 }}>{item?.head_teacher?.full_name}</span>
              <p>Контактные данные: </p>
              <span>{item.contacts.phone}</span>
            </a>
          </Grid>
        </Link>
      ))}
    </Grid>
  )
}
