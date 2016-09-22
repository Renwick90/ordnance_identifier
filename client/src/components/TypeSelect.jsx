var React = require('react');

var TypeSelector = React.createClass({
  getInitialState: function() {
    return { selectedIndex: null };
  },

  handleChange: function(e){
    e.preventDefault();
    var newIndex = e.target.value;
    this.setState( { selectedIndex: newIndex } );
    this.props.selectType( this.props.items[newIndex] );
  },

  render: function(){
    console.log(this.props.items)
    var options = this.props.items.map(function (item , index) {
        return <option value={index} key={index}>{item}</option>;
    });
    return(
      <select value={this.state.selectedIndex} onChange={this.handleChange}>
       {options}
      </select>
    )
  }
})

module.exports = TypeSelector
