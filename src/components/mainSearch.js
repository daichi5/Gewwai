import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLable from '@material-ui/core/FormControlLabel'
import logo from '../topbanner.png'

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
    width: "50%",
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
  searchIcon: {
    position: "absolute",
    left: 8,
    top: 14,
    width: 40,
    height: 40,
    margin: 2,
    color: "#888"
  },
  formControl: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10
  }

}

export default class MainSearch extends Component {

  executeSearch(e) {
    if ( e.keyCode === 13 ) {
      console.log(e.target.value)
    }
  }

  render() {
    return (
      <Grid item xs={12} style={styles.search}>
        <div style={styles.searchFormWrap}>
          <div style={styles.formControl}>
            <InputBase style={styles.searchForm}
                      placeholder="キーワードを入力　例)"
                      onKeyDown={this.executeSearch}
                      />
            <SearchIcon style={styles.searchIcon} />
          </div>
          <div style={styles.formControl}>
            <FormControlLable control={<Checkbox color="primary" /> } label="Wifiあり" />
            <FormControlLable control={<Checkbox color="primary" /> } label="電源あり" />
          </div>
        </div>
      </Grid>
    )
  }
}