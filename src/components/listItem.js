import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import ItemDialog from './itemDialog'
import { toggleItemDialog } from '../actions'
import defaultImage from '../list-item.jpg'

const styles = {
  card: {
    height: 350,
    textAlign: "center",
    padding: 0,
    margin: 0,
    position: "relative"
  },
  listContent: {
    wordWrap: "break-word"
  }
}

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.props.toggleItemDialog(this.props.id)
  }

  render() {
    
    const item = this.props.listItems[this.props.id]

    return (
      <Grid item xs={12} sm={6} md={4} style={{padding:10}}>
        <CardActionArea>
        <Card style={styles.card} onClick={this.toggle}>
          { item.image_url.shop_image1 === "" ? (
          <CardMedia image={defaultImage} style={{height: 140}} />
          ) : (
            <CardMedia image={item.image_url.shop_image1} style={{height: 140}} />     
          )}
          <CardContent style={{height: 160}}>
            <Typography variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography color="textSecondary" component="p" style={styles.listContent}>
              {item.pr.pr_short}
            </Typography>
          </CardContent>
        </Card>
        </CardActionArea>
        <ItemDialog id={this.props.id} />
      </Grid>
    )
  }
}

const mapStateToProps = state => ({ listItems: state.listItems })
const mapDispatchToProps = ({ toggleItemDialog })

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)