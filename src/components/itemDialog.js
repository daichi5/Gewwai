import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleItemDialog } from '../actions'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
  card: {
    height: 500,
    textAlign: "center",
    padding: 0,
    margin: 10,
    position: "relative"
  },
  listContent: {
    wordWrap: "break-word",
    padding: "0 20px"
  },
  closeButton: {
    margin: "20px 0 10px",
    textAlign: "center"
  },
  itemData: {
    marginBottom: 15,
    whiteSpace: "pre-line"
  }
}

class ItemDialog extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.checkDialog = this.checkDialog.bind(this)
  }

  toggle() {
    this.props.toggleItemDialog(this.props.id)
  }
 
  checkDialog() {
    return this.props.id === this.props.dialogId ? true : false
  }
  
  render() {

    const item = this.props.listItem[this.props.id]

    return (
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={this.checkDialog()}
        onClose={this.toggle}
        TransitionComponent={Transition}
      >
        <DialogContent style={styles.card}>
          <CardMedia image={item.image_url.shop_image1} style={{height: 140}} />
          <CardContent style={{height: 160}}>
            <Typography variant="h5" component="h2" style={{marginBottom: 20}}>
              {item.name}
            </Typography>
            <Typography color="textSecondary" component="div" style={styles.listContent}>
              <p style={styles.itemData}>{item.tel}</p>
              <p style={styles.itemData}>{ item.address }</p>
              <p style={styles.itemData}>{item.pr.pr_short}</p>
              <h3>営業時間</h3>
              <p style={styles.itemData}>{item.opentime}</p>
              <h3>定休日</h3>
              <p style={styles.itemData}>{item.holiday}</p>
            </Typography>
          </CardContent>
        </DialogContent>
        <div style={styles.closeButton}>
          <Button onClick={this.toggle}>Close</Button>
        </div>
      </Dialog>
    )
  }
}

const mapStateToProps = state => ({
  listItem: state.listItems,
  dialogId: state.toggleMenus.ItemDialogId
})
const mapDispatchToProps = ({ toggleItemDialog })

export default connect(mapStateToProps, mapDispatchToProps)(ItemDialog)