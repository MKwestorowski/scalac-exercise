import React from 'react'
import Select from 'react-select';
import {Link} from 'react-router-dom'
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import {List, ListGroupItemHeader} from 'react-bootcards';
import { connect } from 'react-redux'

import './App.css'

export default connect(
    state => ({
        selectedData: state.selectingData.data.data,
        contributorLogin: state.contributorLogin.contributorLogin.contributorLogin,
        contributors: state.contributors

    }),
    dispatch => ({
        selectingData: data => dispatch({
            type: 'SELECTED__DATA',
            data: data
        })

    })
)(class Singin extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            labelName: null
        };
    }


    render() {

        const contributor = this.props.contributorLogin
        const contributors = this.props.contributors.data
        const selectingData = this.props.selectingData
        const selectedData = this.props.selectedData
        const options = [
            {value: `https://api.github.com/users/${contributor.login}/orgs`, label: 'Organisations'},
            {value: `https://api.github.com/users/${contributor.login}/repos`, label: 'Repositories'},
            {value: `https://api.github.com/users/${contributor.login}/starred`, label: 'Starred'},
            {value: `https://api.github.com/users/${contributor.login}/subscriptions`, label: 'Subscriptions'},
            {value: `https://api.github.com/users/${contributor.login}/followers` , label: 'Followers   '}
        ];

       const logChange = (val) => {
            fetch(
                val.value
            ).then(
                response => response.json()
            ).then(
                data => selectingData(data)
            ); this.setState({
                labelName: val.label
            })
        }

        return (
            <div>
                <div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Login</th>
                            <th>
                                Avatar
                            </th>
                            <th>
                                Count contributors
                            </th>
                            <th>Choose <Link to={'/contributorlist'}>Back</Link></th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            contributor.login === null ? 'Fetching' : contributors.map(each => each.login === contributor.login ?
                                <tr key={each.login}>
                                    <td><a href={each.html_url}>{each.login}</a></td>
                                    <td><img src={each.avatar_url} className="avatar img-thumbnail" alt="avatar"/></td>
                                    <td>{each.contributions}</td>
                                    <td><Select name="form-field-name" value="one" options={options}
                                                onChange={logChange}/></td>
                                </tr> : null)
                        }
                        </tbody>
                    </table>
                </div>

                <List>
                    <Panel>
                        {console.log(selectedData)}
                    <ListGroup fill>
                           {selectedData.length !== 0 ? selectedData.map(e =>
                               <ListGroupItem key={e.id}href="#">
                           <ListGroupItemHeader>{e.name || e.login}</ListGroupItemHeader>  </ListGroupItem>
                           ) : <ListGroupItemHeader>There isnt any data to show</ListGroupItemHeader>}
                    </ListGroup>
                    </Panel>
                </List>






            </div>










        )
    }


})