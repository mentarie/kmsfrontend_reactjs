import React, {Component} from 'react';
import { Route, Router ,Switch, NavLink, Link } from 'react-router-dom'
import LandingPage from '../../app/landing-page';
import NewsPage from '../../app/news-page'
import KmsPage from '../../app/kms-page'
import RegisterPage from '../../app/register-page'
import SigninPage from '../../app/signin-page'
import { history } from '../../common/router/store';
class RouterPage extends Component {
    render() {
        return (
            
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/news" component={NewsPage}/>
                    <Route path="/kms" component={KmsPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route exact path="/signin" component={SigninPage} />
                </Switch>
            
        );
    }
}
export default RouterPage;