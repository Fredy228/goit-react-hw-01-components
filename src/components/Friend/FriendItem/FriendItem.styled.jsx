import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    align-items: center;
    width: 200px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin-bottom: 15px;
    padding: 5px;
`;

export const Status = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) => {
        switch (props.isOnline) {
            case true:
                return ('green')
        
            default:
                return ('red')
        }
    }};
`;

export const Avatar = styled.img`
    width: 50px;
    height: auto;
    margin-left: 5px;
`;

export const Name = styled.p`
    font-size: 20px;
    margin-left: 5px;
`;