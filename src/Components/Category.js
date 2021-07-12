import React, { Component } from 'react';
import {Query} from '@apollo/client/react/components';
import LoadProducts  from '../GraphQL/Queries';

class Category extends Component 
{
    render()
    {
        return(
            <Query query={LoadProducts}>
                {( {Loading, data} ) =>
                {
                if(Loading) return 'Loading...';
                if(data)
                {
                    const {category} = data;
                    // }
                    return category.products.map(product => <h1>{product.name}</h1>)
                }
                return <div>error</div>
                }}
            </Query>
        );
    }
}

export default Category;