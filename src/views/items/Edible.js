import { CTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import url from 'src/libs/url'

export default function Edible() {
  const [items, setItems] = useState([])
  const columns = [
    {
      key: 'name',
      label: 'Name',
      _props: { scope: 'col' },
    },

    {
      key: 'quantity',
      label: 'Quantity',
      _props: { scope: 'col' },
    },

    {
      key: 'price',
      label: 'Last Price',
      _props: { scope: 'col' },
    },
  ]

  const fetchEdibleItems = () => {
    url
      .get('api/stock/items')
      .then((res) => setItems(res.data.list))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchEdibleItems()
  }, [])

  return <CTable columns={columns} items={items} />
}
