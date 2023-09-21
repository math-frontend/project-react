import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../features/authentication.js'

import OneComponent from '../../components/OneComponent.js'
export default function Page() {
  const { userCurrent } = useSelector((state) => state.authentication)
  const dispatch = useDispatch()

  return (
    <div>
      {/* <headerDefault></headerDefault>
      <menuDefault></menuDefault>
      <footerDefault></footerDefault> */}
      <p>Index</p>
    </div>
  );
}
