var React = require('react');

var MineDetail = React.createClass({
  render:function(){
    if(!this.props.mine){return <h4> No Mine Selected </h4>}

    const imgLink = '/images/' + this.props.mine.image
    return(
      <div>
        <div id="mine_name">
          <h1>{ this.props.mine.name } </h1>
        </div>
          
        <div >
          <img id="image" src={imgLink}/> 
        </div>

        <div id="origin">
          <p> <b>ORIGIN:  </b>  { this.props.mine.origin } </p>
        </div>

        <div id="description">
          <p> <b>DESCRIPTION:  </b> { this.props.mine.description } </p>
        </div>

        <div id="operation">
          <p> <b>OPERATION:  </b> { this.props.mine.operation } </p>
        </div>

        <div id="neutralisation">
          <p> <b>NEUTRALISATION:  </b> { this.props.mine.neutralisation } </p><br/>
        </div>

        <div id="dissarming">
          <p> <b>DISSARMING:  </b> { this.props.mine.dissarming } </p>
        </div>

        <div id="status">
          <p> <b>STATUS:  </b> { this.props.mine.status } </p>
        </div>

        <div id="notes">
          <p> <b>NOTES:  </b> { this.props.mine.notes } </p>
        </div>

        <div id="content">
          <p> <b>EXPLOSIVE CONTENT:  </b> { this.props.mine.content } </p>
        </div>
      </div>
    )
  }
})




module.exports = MineDetail;
