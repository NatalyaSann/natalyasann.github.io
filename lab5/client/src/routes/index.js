import Start from '../components/pages/StartPage'
import NewFile from '../components/pages/NewFilePage'
import EditFile from '../components/pages/EditFilePage'

const routes = [
  {
    path: '/files',
    name: 'Files',
    component: Start
  },
  {
    path: '/files/new',
    name: 'NewFile',
    component: NewFile
  },
  {
    path: '/files/:id',
    name: 'EditFile',
    component: EditFile
  }
]
export default routes
