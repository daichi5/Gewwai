import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleNewItemDialog } from '../actions'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLable from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
  card: {
    height: 450,
    textAlign: "center",
    padding: 10,
    margin: "10px auto",
    position: "relative"
  },
  closeButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto"
  },
  textFieldWrap: {
    width: "60%",
    margin: "20px auto 20px"
  }
}

class NewItemDialog extends Component {
  render() {
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={this.props.toggleMenus.newItemDialog}
        onClose={this.props.toggleNewItemDialog}
        TransitionComponent={Transition}
      >
      <DialogContent style={styles.card}>
          <Typography variant="h5" component="h2">
            新規投稿
          </Typography>
          <div style={styles.textFieldWrap}>
            <TextField 
              label="店名"
              fullWidth
              placeholder="例) Starbucks Coffee"
              style={{marginBottom: 20}}
            />
            <TextField 
              label="住所"
              fullWidth
              placeholder="例) 東京都品川区..."
              style={{marginBottom: 20}}
            />
            <TextField 
              label="営業時間"
              fullWidth
              placeholder="例) AM10:00 ~ PM20:00"
              style={{marginBottom: 30}}
            />
          <FormGroup row>
            <FormControlLable control={<Checkbox color="primary" /> } label="Wifi" />
            <FormControlLable control={<Checkbox color="primary" /> } label="電源" />
            <FormControlLable control={<Checkbox color="primary" /> } label="喫煙席" />
          </FormGroup>
          <Button variant="contained" size="large" color="primary" style={{marginTop: 10, width: "50%"}}>
            投稿
          </Button>
          <p>
            自作APIを準備中のため<br />
            投稿機能は未実装です
          </p>
        </div>
        <div style={styles.closeButton}>
          <Button onClick={this.props.toggleNewItemDialog}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
    )
  }
}

const mapStateToProps = state => ({ toggleMenus: state.toggleMenus })
const mapDispatchToProps = ({ toggleNewItemDialog })

export default connect(mapStateToProps, mapDispatchToProps)(NewItemDialog)
