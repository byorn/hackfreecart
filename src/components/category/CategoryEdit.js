import React from 'react';

const CategoryEdit = (props)=>{
    const { match: { params } } = props;
    console.log(params);
    return (
        <div>Category Edit</div>
    )
}

export default CategoryEdit;