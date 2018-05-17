import React from 'react';

//not a class so we can't use this
const NewStarForm = (props => 
            <div >
                <form onSubmit={props.handleSubmitChild}>
                    <input value={props.newStar.name} onChange={props.handleChangeForChild('name')} placeholder="Star Name" />
                    <input value={props.newStar.diameter} onChange={props.handleChangeForChild('diameter')} placeholder="Star Name" />
                    <input type="submit" value="Add New Star" />
                </form>
            </div>

        );

export default NewStarForm;

