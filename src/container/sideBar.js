import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar,
} from '@coreui/react'


const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      
      {/* <CSidebarMinimizer className="c-d-md-down-none"/> */}
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
