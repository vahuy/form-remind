import './App.css';
import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputName: '',
            inputPassword: '',
            rdLang: '0',
            chkReadStatus: false
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[name]: value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const {rdLang, chkReadStatus} = this.state;
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Form</h3>
                                </div>
                                <div className="panel-body">
                                    <form>
                                        <div className="form-group">
                                            <input type="text"
                                                   name={"inputName"}
                                                   className="form-control"
                                                   placeholder="Input..."
                                                   onChange={this.handleInputChange}
                                                   value={this.state.username}
                                            />
                                            <input type="password"
                                                   name={"inputPassword"}
                                                   className="form-control"
                                                   placeholder="Input..."
                                                   onChange={this.handleInputChange}
                                                   value={this.state.password}
                                            />
                                            <label>Description</label>
                                            <textarea name="description"
                                                      cols="30"
                                                      rows="10"
                                                      onChange={this.handleInputChange}
                                                      value={this.state.description}
                                            />
                                            <div className="form-group">
                                                <label htmlFor="inputID"
                                                       className="col-sm-2 control-label">Gioi tinh:</label>
                                                <div className="col-sm-10">
                                                    <select name="gioiTinh" id="inputID" className="form-control" onChange={this.handleInputChange}>
                                                        <option value="0">--</option>
                                                        <option value="1">Nam</option>
                                                        <option value="2">Nu</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="radio">
                                                <label>English<input
                                                    type="radio"
                                                    name="rdLang"
                                                    id="inputEn"
                                                    value="0"
                                                    onChange={this.handleInputChange}
                                                    checked={rdLang === '0'}
                                                /></label>
                                                <label>Vietnamese<input
                                                    type="radio"
                                                    name="rdLang"
                                                    id="inputVi"
                                                    value="1"
                                                    onChange={this.handleInputChange}
                                                    checked={rdLang === '1'}
                                                /></label>
                                            </div>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="" id=""
                                                       name="chkReadStatus"
                                                       checked={chkReadStatus === true}
                                                       onChange={this.handleInputChange}
                                                />
                                                Read
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                                        <button type="reset" className="btn btn-second">Reset</button>
                                    </form>
                                </div>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
