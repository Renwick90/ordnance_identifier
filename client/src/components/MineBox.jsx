var React = require('react');
var MineSelect = require('./MineSelect');
var TypeSelect = require('./TypeSelect');
var MineDetail = require('./MineDetail');
var _ = require('lodash')
var MineBox = React.createClass({
  getInitialState:function(){
    return { mines:[], focusType:null, focusMine:null }
  },
  componentDidMount:function(){
    var url = "http://localhost:3000/api/new_api";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(request.status === 200){
        var response = JSON.parse(request.responseText);
        this.setState({mines: response.data.mine_api, focusMine:response.data.mine_api[0]});
      }
    }.bind(this)
    request.send(null);
  },
  setFocusMine:function(mine){
    this.setState({focusMine: mine});
  },
  setFocusType:function(type){
    this.setState({focusType: type});
  },
  types:function(){
    var types = this.state.mines.map(function(mine){
      return mine.type;
    });
    types.unshift("All");
    return _.uniq(types);
  },
  minesForType:function(){
    if(!this.state.focusType || this.state.focusType === "All"){return this.state.mines}
    return this.state.mines.filter(function(mine){
      return mine.type === this.state.focusType
    }.bind(this));
  },
  // getCountryByCode:function(code){
  //   return _.find(this.state.countries, function(country){ return country.alpha3Code === code })
  // },
  // borderingCountries:function(){
  //   if(!this.state.focusCountry){return []};
  //   return this.state.focusCountry.borders.map(function(code){
  //     return this.getCountryByCode(code)
  //   }.bind(this))
  // },
  render:function(){
    return(
      <div>
        <div id="heading">
            <h2>Identifier</h2>
        </div>

        <div id="type_select">
          <TypeSelect items={this.types()} selectType={this.setFocusType}> Mine Type </TypeSelect>
        </div>

        <div id="mine_select" >
          <MineSelect mines={this.minesForType()} selectMine={this.setFocusMine}> Mine Name</MineSelect>
        </div>
          <MineDetail mine={ this.state.focusMine } ></MineDetail>
      </div>
    )
  }
})


module.exports = MineBox;
