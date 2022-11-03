import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import React, { useState } from 'react'
import Edible from './Edible'
import NewItem from './NewItem'
import NonEdible from './NonEdible'

export default function Items() {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink onClick={() => setActiveKey(1)} active={activeKey === 1}>
            Edible
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink onClick={() => setActiveKey(2)} active={activeKey === 2}>
            Non Edible
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink onClick={() => setActiveKey(3)} active={activeKey === 3}>
            +
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          <Edible />
        </CTabPane>

        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
          <NonEdible />
        </CTabPane>

        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 3}>
          <NewItem />
        </CTabPane>
      </CTabContent>
    </>
  )
}
