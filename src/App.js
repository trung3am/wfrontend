import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { closeMaxProductModal, signOut, toogleSideBar, updateCurrentUser } from "./store/actions";
import MainLayout from "./Layouts/MainLayout";
import * as Maincontainers from "./views";
import Spinner from "./Spinner/Spinner";


import "./App.css";




class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout
          isLoading={this.props.isLoading}
          storeCartCount={this.props.storeCartItemsCount}
          showModal={this.props.showModalProp}
          closeModalProp={this.props.closeModalProp}
          modalMessage={this.props.modalMessageProp}
          showSideBar={this.props.showSideNavigationProp}
          toggleSideBar={this.props.toggleSideBarProp}
          currentUser={this.props.currentUser}
        >
          <Switch>
            <Route path={"/"} exact component={this.props.isLoading ? Spinner : Maincontainers.HomePage} />
            <Route path={"/all"} exact component={this.props.isLoading ? Spinner : Maincontainers.AllPage} />
            <Route
              path={"/category/:category"}
              component={this.props.isLoading ? Spinner : Maincontainers.ProductCategoriesPage}
            />
            <Route exact path={"/login"} render = {
              () => this.props.currentUser ? (<Redirect to = '/user'/>) : (<Maincontainers.LoginPage/>)
            }  />
            <Route exact path={"/user"} render = {
              () => this.props.currentUser ?  (<Maincontainers.UserPage user_data={this.props.user_data}
              updateCurrentUser ={this.props.updateCurrentUser}
              signOut={this.props.signOut}/>) : (<Redirect to = '/login'/>)
            }  />
            
            <Route path={"/sale"} component={this.props.isLoading ? Spinner : Maincontainers.SalesPage} />
            <Route path={"/cart"} component={this.props.isLoading ? Spinner : Maincontainers.CartPage} />
            <Route path={"/checkout"} component={this.props.isLoading ? Spinner : Maincontainers.CheckoutPage} />
            <Route
              path={"/product/:productSlug"}
              render={(props) => ( this.props.isLoading ? <Spinner/> :
                <Maincontainers.ProductDetailsPage
                  key={props.match.params.productSlug}
                  {...props}
                />
              )}
            />
            {/*always redirect to index*/}
            <Redirect to={"/"} />
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading : state.isLoading,
    storeCartItemsCount: state.cartTotal,
    showModalProp: state.productMaxShowModal,
    modalMessageProp: state.modalMessage,
    showSideNavigationProp: state.showSideNavigation,
    currentUser: state.currentUser,
    user_data: state.user_data
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModalProp: () => dispatch(closeMaxProductModal()),
    toggleSideBarProp: () => dispatch(toogleSideBar()),
    updateCurrentUser: (user) =>dispatch(updateCurrentUser(user)),
    signOut: () => dispatch(signOut())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
