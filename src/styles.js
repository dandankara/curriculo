import styled from 'styled-components';

export const Info = styled.div`
  
  margin-top:10px;
  font-size:25px;
  float:left;
  font-family:'Times New Roman', Times, serif;
  img{
      border-radius:50%;
      max-width:180px;
      max-height:180px;
      width: auto;
      height:auto;
      align-content:center;
      margin-bottom:10px;
    }
  a{
    color: black;
    padding:5px;
    text-decoration:none;
    margin-left:20px;
  }
`;

export const Content = styled.div`
  /* background-color:blue; */
  display:flex;
  align-items:stretch;
  padding:15px;
  font-size:20px;
  /* font-family:'Times New Roman', Times, serif; */
    span{
      font-size:40px;
    }
    p{
      font-size:20px;
      text-align:justify;
      
    }
    ul{
      list-style:circle;
    }
`;

export const App = styled.div`
  background-color:blue;
`;

export const Footer = styled.div`
  color:#FFFFFF
`;