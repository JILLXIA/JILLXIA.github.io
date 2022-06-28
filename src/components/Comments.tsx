import {useUtterances} from './useUtterances'
import React from 'react';

const commentNodeId = 'comments';

const Comments = () => {
	useUtterances(commentNodeId);
	return <div id={commentNodeId} />;
};

export default Comments;
