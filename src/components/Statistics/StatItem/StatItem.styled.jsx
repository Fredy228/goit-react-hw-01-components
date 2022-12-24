import styled from '@emotion/styled';

export const Item = styled.li`
    text-align: center;
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    color: white;
    background-color: ${props => {  
        switch (props.data) {
            case '.docx':
                return 'green'
            case '.pdf':
                return 'red'
            case '.mp3':
                return 'blue'
            case '.psd':
                return 'purple'
            default:
                return "black"
        }
    }};
`;

export const Label = styled.span`
    margin-bottom: 5px;
    font-size: 14px;
`;

export const Percentage = styled.span`
    font-size: 20px;
`;