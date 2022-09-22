import { Menu, app } from 'electron'
import { IS_DEV } from '../shared/env'
import { main } from './classes/main'
import { Tab } from './classes/tab'
import { Window } from './classes/window'

/** A dock menu. */
export let dockMenu = Menu.buildFromTemplate([
  {
    label: 'Open Sketch…',
    click() {
      main.open()
    },
  },
  { role: 'recentDocuments', submenu: [{ role: 'clearRecentDocuments' }] },
])

/** The app's top-level menu. */
export let appMenu = Menu.buildFromTemplate([
  {
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideOthers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' },
    ],
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'Open Sketch…',
        accelerator: 'CmdOrCtrl+O',
        click() {
          main.open()
        },
      },
      { role: 'recentDocuments', submenu: [{ role: 'clearRecentDocuments' }] },
      { type: 'separator' },
      {
        label: 'Close Sketch',
        accelerator: 'CmdOrCtrl+W',
        click() {
          console.log('close sketch clicked')
        },
      },
    ],
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click() {
          let tab = Tab.byActive()
          if (tab) tab.reload()
        },
      },
      { type: 'separator' },
      { role: 'togglefullscreen' },
      { type: 'separator' },
      {
        label: 'Toggle Developer Tools',
        accelerator: 'CmdOrCtrl+Alt+I',
        click() {
          let tab = Tab.byActive()
          if (tab) tab.inspect()
        },
      },
    ],
  },
  {
    label: 'Development',
    visible: IS_DEV,
    submenu: [
      {
        label: 'Reload Window',
        click() {
          let window = Window.byActive()
          if (window) window.reload()
        },
      },
      {
        label: 'Toggle Window Developer Tools',
        click() {
          let window = Window.byActive()
          if (window) window.inspect()
        },
      },
      { type: 'separator' },
      {
        label: 'Clear Storage and Quit',
        click() {
          main.clear()
          main.quit()
        },
      },
    ],
  },
])
