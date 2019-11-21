import React from 'react';
import axios from 'axios';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        cowname: '',
        descript: ''
      }
    }

    onChange(element) {
      if(element.target.id === "cowname") {
        this.setState ({
          cowname: element.target.value,
        })
      }
      if(element.target.id === "descript") {
        this.setState ({
          descript: element.target.value
        })
      }
    }

    handleSubmit() {
      axios({
        method: 'post',
        url: '/api/cowlist',
        data: this.state,
        dataType: 'application/json'
      })
    }

    render(props) {
      return (
        <div>
          <h3>Create New Cow</h3>
          <form>
            <input
            type = "text"
            id="cowname"
            placeholder="Enter Cow's Name"
            value={this.state.cowname}
            onChange={this.onChange.bind(this)}
            />
            <input
            type="text"
            id="descript"
            placeholder="Enter Cow's Description"
            value={this.state.descript}
            onChange={this.onChange.bind(this)}
            />
            <input
            type="submit"
            name="submitCow"
            value="Submit Entry"
            onClick={this.handleSubmit.bind(this)}
            />
          </form>
        </div>
      )
    }
  }

  export default AddCow;