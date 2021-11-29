import React from 'react'
import './App.scss'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import MenuItem from './components/Menu/menuItem'
import Menu from './components/Menu/menu'
const App: React.FC = () => {
  return (
    <>
      <Menu
        defaultIndex={2}
        onSelect={(index) => {
          alert(index)
        }}
      >
        <MenuItem index={0}>123</MenuItem>
        <MenuItem index={1} disabled>
          456
        </MenuItem>
        <MenuItem index={2}>789</MenuItem>
      </Menu>
      <Menu defaultIndex={2} mode={'vertical'}>
        <MenuItem index={0}>123</MenuItem>
        <MenuItem index={1} disabled>
          456
        </MenuItem>
        <MenuItem index={2}>789</MenuItem>
      </Menu>
      <hr></hr>
      <Button
        autoFocus={true}
        btnType={ButtonType.Primary}
        size={ButtonSize.large}
      >
        Hello
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Hello
      </Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.large}>
        Hello
      </Button>
      <Button size={ButtonSize.large} disabled={true}>
        World
      </Button>
      <Button
        target='_blank'
        btnType={ButtonType.Link}
        href={'http://www.baidu.com'}
      >
        Baidu Link
      </Button>
      <Button
        target='_blank'
        btnType={ButtonType.Link}
        disabled={true}
        href={'http://www.baidu.com'}
      >
        Baidu Link
      </Button>
    </>
  )
}

export default App
