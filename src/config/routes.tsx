import { RouteRecordRaw } from 'vue-router'
import { Welcome } from '../views/Welcome'
import { First } from '../components/welcome/First'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'
import { Forth } from '../components/welcome/Forth'
import { FirstActions } from '../components/welcome/FirstActions'
import { SecondActions } from '../components/welcome/SecondActions'
import { ThirdActions } from '../components/welcome/ThirdActions'
import { ForthActions } from '../components/welcome/ForthActions'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    redirect: '/welcome/1',
    children: [
      { path: '1', components: { main: First, footer: FirstActions }, },
      { path: '2', components: { main: Second, footer: SecondActions }, },
      { path: '3', components: { main: Third, footer: ThirdActions }, },
      { path: '4', components: { main: Forth, footer: ForthActions }, },
    ]
  }
]
