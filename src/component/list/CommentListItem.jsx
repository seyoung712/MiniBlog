import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const ConstentText = styled.p`
    font-size: 14px;
`;

function CommentListItem(props){
    const { comment } = props;
    
    return (
        <Wrapper>
            <ConstentText>{comment.content}</ConstentText>
        </Wrapper>
    ); // ContentText -> ConstentText로 변경
}

export default CommentListItem;