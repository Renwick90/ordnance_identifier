var React = require('react');

var MineSelect = React.createClass({
  getInitialState: function() {
    return { selectedIndex: null };
  },

  handleChange: function(e){
    e.preventDefault();
    var newIndex = e.target.value;
    this.setState( { selectedIndex: newIndex } );
    this.props.selectMine( this.props.mines[newIndex] );
  },

  render: function(){
    var options = this.props.mines.map(function (mine, index) {
        return <option  value={index} key={index}>{mine.name}</option>;
    });
    return(
      
      <select value={this.state.selectedIndex} onChange={this.handleChange}>

       {options}
      </select>
      
    )
  }
})

module.exports = MineSelect
