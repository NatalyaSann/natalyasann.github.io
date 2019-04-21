import Start from '@/components/pages/StartPage'
import NewFile from '@/components/pages/NewFilePage'
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
  }
]
export default routes
