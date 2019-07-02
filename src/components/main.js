import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import MainSearch from './mainSearch'
import ListItem from './listItem'
import { connect } from 'react-redux'
import { getItems } from '../actions'
import _ from 'lodash'

class Main extends Component {
  componentDidMount() {
    //this.props.getItems()
  }

  renderList() {
    return _.map(this.props.listItems, (l, i) => (
      /*keyはJSONデータに合わせて変更*/
      <ListItem key={i} id={i} />
    ))
  }

  render() {
    return (
      <main>
        <Grid container spacing={0}>
          <MainSearch />
          {this.renderList()}
        </Grid>

      </main>      
    )
  }
}

const mapStateToProps = state => ({ listItems: state.listItems })
const mapDispatchToProps = ({ getItems })

export default connect(mapStateToProps, mapDispatchToProps)(Main)
