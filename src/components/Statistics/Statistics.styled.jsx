import styled from '@emotion/styled';

export const Statistics = styled.section`
    text-align: center;
    max-width: 330px;
    margin: 50px auto;
    background-color: #fff;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    margin: 0;
    padding: 15px 0;
`;

export const StatList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    text-align: center;
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    color: white;
    background-color: ${props => {  
        console.log(props)
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