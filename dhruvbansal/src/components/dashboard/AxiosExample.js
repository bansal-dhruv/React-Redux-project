import React, { Component } from 'react'
import { fetchPosts } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Axios extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="card" key={post.id}>
                    <a href="#" className="btn-floating pink pulse">
                        <i className="material-icons">favorite</i>
                    </a>
                    <div className="card-content">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">More Details</a>
                        <a href="#">View user</a>
                    </div>
                </div>
            );
        });
    }

    render(){
        console.log(this.props.posts);
        return <div className="container">{this.renderList()}</div> ;   
    }
}

const mapStateToProps = (state) => {
    return {posts : state.posts};
};

const mapDispatchToProps=(dispatch) => {
    return bindActionCreators({fetchPosts}, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Axios);
