import React from "react";
import { useNavigate } from "react-router-dom"; //페이지 전환 패키지
import styled from "styled-components"; //스타일 패키지
import PostList from "../list/PostList"; //글 목록
import Button from "../ui/Button"; //버튼
import data from "../../data.json"; //더미데이터

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom : 16px;
        }
    }
`;

function MainPage(props){
    const {} = props;

    const navigate = useNavigate(); //페이지 이동

    return(
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;