import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLable from '@material-ui/core/FormControlLabel'
import logo from '../topbanner.png'
import { getItems, toggleWifi, toggleOutret, changeFreeword } from '../actions'

const styles = {
  search: {
    width: "100%",
    height: 220,
    textAlign: "center",
    paddingTop: 110,
    marginBottom: 20,
    backgroundImage: `url(${logo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 0px"
  },
  searchFormWrap: {
    position: "relative",
    width: "60%",
    margin: "0 auto"
  },
  searchForm: {
    width: "100%",
    height: 70,
    border: "1px solid #ddd",
    borderRadius: 20,
    paddingLeft: 60,
    background: "#fff"
  },
  searchIconButton: {
    position: "absolute",
    left: 8,
    top: 15,
    margin: 0,
    padding: 0,
    color: "#888"
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
  formControl: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10
  }

}

class MainSearch extends Component {
  constructor(props) {
    super(props)
    this.executeSearch = this.executeSearch.bind(this)
    this.handleOnChangeFreeword = this.handleOnChangeFreeword.bind(this)
    this.handleKeyDownSearch = this.handleKeyDownSearch.bind(this)
    this.toggleWifi = this.toggleWifi.bind(this)
    this.toggleOutret = this.toggleOutret.bind(this)
  }

  executeSearch() {
      this.props.getItems(this.props.toggleMenus)
  }

  handleKeyDownSearch(e) {
    if ( e.keyCode === 13 ) {
      this.executeSearch()
    }
  }

  handleOnChangeFreeword(e) {
    this.props.changeFreeword(e.target.value)
  }

  toggleWifi() { this.props.toggleWifi() }
  toggleOutret() { this.props.toggleOutret() }

  render() {
    return (
      <Grid item xs={12} style={styles.search}>
        <div style={styles.searchFormWrap}>
          <div style={styles.formControl}>
            <InputBase style={styles.searchForm}
                      placeholder="キーワードを入力 ( 例 ) 横浜　カフェ"
                      onChange={this.handleOnChangeFreeword}
                      onKeyDown={this.handleKeyDownSearch}
                      />
            <Button style={styles.searchIconButton} onClick={this.executeSearch} >
            <SearchIcon style={styles.searchIcon}/>
            </Button>
          </div>
          <div style={styles.formControl}>
            <FormControlLable control={<Checkbox color="primary" /> }
                              label="Wifiあり"
                              checked={this.props.toggleMenus.wifi}
                              onClick={this.toggleWifi}
            />
            <FormControlLable control={<Checkbox color="primary" /> }
                              label="電源あり"
                              checked={this.props.toggleMenus.outret}
                              onClick={this.toggleOutret}
            />
          </div>
        </div>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  listItems: state.listItems,
  toggleMenus: state.toggleMenus
})
const mapDispatchToProps = ({ getItems, toggleWifi, toggleOutret, changeFreeword })

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)