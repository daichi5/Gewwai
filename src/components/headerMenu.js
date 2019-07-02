import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleHeaderMenu, toggleNewItemDialog } from '../actions'

import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person'
import Drawer from '@material-ui/core/Drawer'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AddIcon from '@material-ui/icons/Add'
import BuildIcon from '@material-ui/icons/Build'
import NewItemDialog from './newItemDialog'

const styles = {
  menu: {
    position: "absolute",
    right: 30,
    height: "100%",
    borderRadius: "50%"
  },
  menuIcon: {
    width: 40,
    height: "100%",
    color: "#ddd",
    background: "#555",
    borderRadius: "50%",
    padding: 2
  }
}

class HeaderMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <Button style={styles.menu} onClick={this.props.toggleHeaderMenu}>
          <PersonIcon style={styles.menuIcon} />
        </Button>
        <Drawer
          anchor="right"
          open={this.props.toggleMenus.sideMenu}
          onClose={this.props.toggleHeaderMenu}
        >
          <Button onClick={this.props.toggleHeaderMenu} >
            <ChevronRightIcon />
          </Button>
          <Divider />
          <List>
            <ListItem button onClick={this.props.toggleNewItemDialog}>
              <ListItemIcon><AddIcon /></ListItemIcon>
              <ListItemText primary="新規投稿" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><BuildIcon /></ListItemIcon>
              <ListItemText primary="設定" />
            </ListItem>
          </List>
        </Drawer>
        <NewItemDialog />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ toggleMenus: state.toggleMenus })
const mapDispatchToProps = ({ toggleHeaderMenu, toggleNewItemDialog })

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)