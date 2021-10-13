import React from 'react';

const Expert = ({ expert }) => {
    const { name, expertize, img } = expert
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="bg-black text-white py-2 my-3 rounded-3">
                <img src={img} alt="" />
                <h3 className="mt-3">Name:{name}</h3>
                <h5 className="mt-3">Expertize:{expertize}</h5>
            </div>
        </div>
    );
};

export default Expert;