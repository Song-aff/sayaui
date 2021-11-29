import React from 'react'
import './App.scss'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import MenuItem from './components/Menu/menuItem'
import Menu from './components/Menu/menu'
import SubMenu from './components/Menu/subMenu'
const App: React.FC = () => {
  return (
    <>
      <Menu
        defaultIndex='0'
        onSelect={(index) => {
          console.log(index)
        }}
      >
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>cool link 2</MenuItem>
        <SubMenu title='123'>
          <MenuItem>aa</MenuItem>
          <MenuItem>aa</MenuItem>
          <MenuItem>aa</MenuItem>
          <MenuItem>aa</MenuItem>
          <MenuItem>aa</MenuItem>
        </SubMenu>
      </Menu>
      <Menu defaultIndex={'2'} mode={'vertical'}>
        <MenuItem>123</MenuItem>
        <MenuItem disabled>456</MenuItem>
        <MenuItem>789</MenuItem>
        <MenuItem>789</MenuItem>
        <SubMenu title='123'>
          <MenuItem>aa</MenuItem>
          <MenuItem>aa</MenuItem>
          <MenuItem>aa</MenuItem>
          <MenuItem>aa</MenuItem>
          <MenuItem>aa</MenuItem>
        </SubMenu>
        <MenuItem>789</MenuItem>
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
