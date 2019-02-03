import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Yesterday 5:30am" comment="Hey there!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Robert" timeAgo="Today at 2:00pm" comment="Hey there!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Champ" timeAgo="Today at 8:00pm" comment="Hey there!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Little Pangolin" timeAgo="Wednesday at 4:35am" comment="Hey there!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Luna" timeAgo="Thursday at 1:00pm" comment="Hey there!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
          
        </div>
       
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));